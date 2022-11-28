import InputComponent from "../../components/InputComponent";
import { AppScreen } from "@stackflow/basic-ui";
import { ActivityComponentType } from "@stackflow/react";
import { useFlow } from "../../stackflow";
import { IoMdArrowRoundBack } from "react-icons/io";
import AppBar from "@stackflow/basic-ui/dist/AppBar";
import ReportRadioButton from "../../components/ReportRadioButton";
import { useState } from "react";

const Report: ActivityComponentType = () => {
  const { pop } = useFlow();
  const back = () => {
    pop();
  };
  const [validInput, setValidInput] = useState(false);

  function getChecked() {
    const genderNodeList = document.getElementsByName("report");
    genderNodeList.forEach((node) => {
      if (node.checked) {
        const value = node.value;
        if (value == "7") {
          setValidInput(true);
          console.log(value);
        } else {
          setValidInput(false);
          console.log(value);
        }
      }
    });
  }

  return (
    <AppScreen theme="cupertino">
      <header className="flex  justify-center  margin-0 p-4 pr-3 h-[7%]">
        <IoMdArrowRoundBack
          className="w-5 h-5 absolute left-[4%] top-[2.5%]"
          onClick={back}
        ></IoMdArrowRoundBack>
        <h1 className="flex items-center justify-center text-lg font-bold ">
          신고 사유 선택
        </h1>
      </header>
      <hr />
      <div className="flex flex-col ">
        <label className="items-center justify-center ">
          <ReportRadioButton
            text="서비스와 전혀 상관없는 내용이에요."
            id="1"
            onClick={getChecked}
          />
          <ReportRadioButton
            text="자꾸 광고하거나 홍보글을 올려요."
            id="2"
            onClick={getChecked}
          />
          <ReportRadioButton
            text="사실이 아닌 거짓 정보에요."
            id="3"
            onClick={getChecked}
          />
          <ReportRadioButton
            text="마음에 들지 않아요."
            id="4"
            onClick={getChecked}
          />
          <ReportRadioButton
            text="이 계정이 다른 계정을 사칭하고 있어요."
            id="5"
            onClick={getChecked}
          />
          <ReportRadioButton
            text="욕설,혐오,성적 발언이에요."
            id="6"
            onClick={getChecked}
          />
          <div className=" my-4">
            <input
              type="radio"
              value="7"
              name="report"
              id="7"
              className="mr-5 ml-8  my-2 h-5 w-5  accent-fuchsia-500 border-gray-400"
              onClick={getChecked}
            />
            <span className="">직접 입력</span>
            {validInput ? (
              <input
                className="shadow h-28 appearance-none border ml-[10%] mt-[3%] rounded w-[80%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="직접 입력"
                type="text"
              />
            ) : null}
          </div>
        </label>
        <button
          onClick={() => {
            console.log("신고");
          }}
          className="absolute bottom-[3%] left-[5%] w-[90%] h-[40px] ring-2 ring-[#a984da] text-[#a984da] bg-white bg-opacity-60 font-semibold text-base rounded-md shadow-button"
        >
          신고하기{" "}
        </button>
      </div>
    </AppScreen>
  );
};

export default Report;
