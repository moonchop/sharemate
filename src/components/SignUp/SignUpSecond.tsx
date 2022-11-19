import { useEffect, useState } from "react";
import { useRadio } from "../../hooks/useRadio";
import { useMbti, useRegisterForm } from "../../hooks/useRegisterForm";
import SignUpFirst from "./SignUpFirst";

const SignUpSecond = ({ handleGoPrev, handleGoNext }: any) => {
  const { Component: RegisterForm, state } = useRegisterForm();

  const handleSubmit = (handleGo: Function) => {
    sessionStorage.setItem("second", JSON.stringify(state));
    handleGo();
  };

  useEffect(() => {
    const firstData = sessionStorage.getItem("first");
    const secondData = sessionStorage.getItem("second");
    if (firstData && secondData) {
      Object.assign(JSON.parse(firstData), JSON.parse(secondData));
      console.log("here", firstData);
    }
  }, []);

  return (
    <div className="h-[100%] overflow-y-scroll">
      <RegisterForm />
      <button
        onClick={() => handleSubmit(handleGoPrev)}
        className="w-[100px] h-[44px] m-2 float-left ring-2 ring-[#ab82e0] text-[#ab82e0] font-extrabold text-sm borde rounded-md shadow-button"
      >
        이전
      </button>
      <button
        onClick={() => handleSubmit(handleGoNext)}
        className="w-[100px] h-[44px] m-2 float-right ring-2 ring-[#ab82e0] text-[#ab82e0] font-extrabold text-sm borde rounded-md shadow-button"
      >
        다음
      </button>
    </div>
  );
};

export default SignUpSecond;
