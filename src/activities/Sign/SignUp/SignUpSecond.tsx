import { useEffect, useState } from "react";
import CheckText from "../../../components/group/CheckText";
import InputComponent from "../../../components/InputComponent";
import { useMbti, useRegisterForm } from "../../../hooks/useRegisterForm";
import { useSaveFormData } from "../../../hooks/useSaveFormData";

const SignUpSecond = ({ handleGoPrev, handleGoNext }: any) => {
  history.pushState(null, "", location.href);
  window.onpopstate = function () {
    history.go(1);
  };
  const { Component: RegisterForm, state } = useRegisterForm();
  const { getData: SecondData } = useSaveFormData("second");
  const [hashtag, setHashtag] = useState({});

  const handleSubmit = (handleGo: Function) => {
    state.hastags = Object.values(hashtag);
    sessionStorage.setItem("second", JSON.stringify(state));

    if (!Object.values(SecondData()).every((x) => x !== null && x !== "")) {
      alert("작성되지 않은 칸이 존재합니다.");
    } else {
      handleGo();
    }
  };
  const changeHashtag = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setHashtag((prev: any) => ({ ...prev, [name]: value }));
  };
  useEffect(() => {
    const data = sessionStorage.getItem("second");
    if (data === null) return;
    console.log(JSON.parse(data).hastags);
    Object.entries(JSON.parse(data).hastags).map(([key, value]) => {
      const element = document.getElementById(key);
      if (element !== null) (element as any).value = value;
    });
  }, []);

  return (
    <div className="h-[100%] overflow-y-scroll px-3 py-8">
      <RegisterForm />
      {/* <button
        onClick={() => handleSubmit(handleGoPrev)}
        className="w-[100px] h-[44px] m-2 float-left ring-2 ring-[#ab82e0] text-[#ab82e0] font-extrabold text-sm borde rounded-md shadow-button"
      >
        이전
      </button> */}
      <div className="mx-3">
        <p className="text-base">자신을 표현하는 해시태그를 입력해주세요.</p>
        <InputComponent
          placeholder="성격좋음"
          onChange={changeHashtag}
          id="0"
        />
        <InputComponent
          placeholder="잘 안 들어옴"
          onChange={changeHashtag}
          id="1"
        />
        <InputComponent placeholder="조용함" id="2" onChange={changeHashtag} />
      </div>
      <button
        onClick={() => handleSubmit(handleGoNext)}
        // onClick={() => console.log(hashtag)}
        className="mt-16 w-[100px] h-[44px] m-2 float-right ring-2 ring-[#ab82e0] text-[#ab82e0] font-extrabold text-sm borde rounded-md shadow-button"
      >
        다음
      </button>
    </div>
  );
};

export default SignUpSecond;
