import { useMbti, useRegisterForm } from "../../hooks/useRegisterForm";

const SignUpSecond = ({ handleGoPrev, handleGoNext }: any) => {
  const { Component: RegisterForm, state } = useRegisterForm();

  const handleSubmit = (handleGo: Function) => {
    sessionStorage.setItem("second", JSON.stringify(state));
    handleGo();
  };

  return (
    <div className="h-[100%] overflow-y-scroll px-3 py-8">
      <RegisterForm />
      {/* <button
        onClick={() => handleSubmit(handleGoPrev)}
        className="w-[100px] h-[44px] m-2 float-left ring-2 ring-[#ab82e0] text-[#ab82e0] font-extrabold text-sm borde rounded-md shadow-button"
      >
        이전
      </button> */}
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
