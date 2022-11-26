import { AppScreen } from "@stackflow/basic-ui";
import { ActivityComponentType } from "@stackflow/react";
import { useFlow } from "../../stackflow";
import { IoMdArrowRoundBack } from "react-icons/io";

const CreateBoard: ActivityComponentType = () => {
  const { pop } = useFlow();
  const onClick = () => {
    pop();
  };

  return (
    <AppScreen theme="android">
      <header className="flex justify-between margin-0 p-4 pr-3 h-[8%] items-center bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-300">
        <IoMdArrowRoundBack
          className="w-5 h-5"
          onClick={onClick}
        ></IoMdArrowRoundBack>
        <div className="font-semibold text-xl text-white" onClick={onClick}>
          등록
        </div>
      </header>

      <input className="mt-5 my-2 w-full px-5 text-xl" placeholder="제목" />
      <hr />
      <input
        className="mt-5 my-2 w-full h-60% px-5 text-lg"
        placeholder="내용을 입력하세요."
      />
    </AppScreen>
  );
};

export default CreateBoard;
