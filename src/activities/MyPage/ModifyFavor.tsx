import { useState } from "react";
import useModifyForm from "../../hooks/useModifyForm";
import { useRegisterForm } from "../../hooks/useRegisterForm";
import request from "../../stores/Request";

const ModifyFavor = () => {
  const { Component: ModifyForm, state } = useModifyForm();
  const [intro, setIntro] = useState("");

  const submitHandler = () => {
    const result = { ...state, selfIntro: intro };
    console.log(result);
    request.put("/favor", { result });
  };

  return (
    <>
      <ModifyForm />
      <div className="m-2 mb-14">
        <p className="my-4 mt-10 ml-2 text-md">
          자기소개 글을 입력해주세요.(50자 이내)
        </p>
        <input
          className=" w-full h-[150px] px-4 mb-8 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-[#F65B8082] border border-coolGray-200 rounded-lg shadow-input"
          id="selfIntro"
          type="text"
          onChange={(e) => {
            setIntro(e.target.value);
            console.log(intro);
          }}
        />
        <button
          // onClick={handleGoPrev}
          className="w-[100px] h-[44px] m-2 float-left ring-2 ring-[#ab82e0] text-[#ab82e0] font-extrabold text-sm borde rounded-md shadow-button"
        >
          이전
        </button>
        <button
          onClick={submitHandler}
          className="w-[100px] h-[44px] m-2 float-right ring-2 ring-[#ab82e0] text-[#ab82e0] font-extrabold text-sm borde rounded-md shadow-button"
        >
          수정하기
        </button>
      </div>
    </>
  );
};

export default ModifyFavor;
