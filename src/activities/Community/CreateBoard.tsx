import { AppScreen } from "@stackflow/basic-ui";
import { ActivityComponentType } from "@stackflow/react";
import { useFlow } from "../../stackflow";
import { IoMdArrowRoundBack } from "react-icons/io";
import { PostCreateApi } from "../../utils/api/community";
import { useState } from "react";

const CreateBoard: ActivityComponentType = () => {
  const { pop } = useFlow();
  const [inputs, setInputs] = useState({
    title: "",
    text: "",
  });
  const onClick = () => {
    PostCreateApi(inputs);
    pop();
  };
  const onChange = (e: any) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const { title, text } = inputs;
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

      <input
        onChange={onChange}
        name="title"
        value={title}
        className="mt-5 my-2 w-full px-5 text-xl"
        placeholder="제목"
      />
      <hr />
      <input
        onChange={onChange}
        name="text"
        value={text}
        className="mt-5 my-2 w-full h-60% px-5 text-lg"
        placeholder="내용을 입력하세요."
      />
    </AppScreen>
  );
};

export default CreateBoard;
