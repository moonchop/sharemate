import request from "../../../stores/Request";
import React, { useState } from "react";
import { useFlow } from "../../../stackflow";
import { AiFillCloseCircle } from "react-icons/ai";

const PasswordEdit = () => {
  const { replace } = useFlow();
  const [authnumber, setAuthnumber] = useState<string>("3928347238");
  const [successState, setSuccessState] = useState<boolean>(false);

  const [authemail, setAuthemail] = useState({
    email: "",
    number: "",
  });

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;
    return setAuthemail((prev) => ({ ...prev, [name]: value }));
  };

  const emailSubmit = () => {
    const email = authemail.email;
    request
      .post("sign/email", { email })
      .then((response) => {
        console.log(response.status);
        console.log(response.data);
        setAuthnumber(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const numberCheck = () => {
    if (authemail.number == authnumber) {
      setSuccessState(true);
    } else {
      alert("인증번호를 확인해주세요");
    }
  };

  const submitHandler = () => {
    if (successState) {
      replace("FindPassword_PasswordActivity", {});
    } else {
      alert("이메일 인증을 진행해주세요");
    }
  };

  return (
    <div className="h-[85%] flex flex-col pro:pt-[30px] pt-[20px] mx-[20px] ">
      <div className="pro:text-2xl text-xl font-bold pro:mb-[25px] mb-[20px] ">
        비밀번호 찾기
      </div>
      <div className="text-lg font-medium mb-2">이메일 인증</div>
      <div className="flex h-[7%] w-full flex-row items-center justify-between mb-4">
        <div className="flex w-[75%] h-full border-2 rounded-md items-center">
          <input
            name="email"
            type={"email"}
            value={authemail.email}
            placeholder="example@email.com"
            className=" w-full outline-0  pl-[5px] text-base"
            onChange={changeHandler}
          />
          {authemail.email ? (
            <AiFillCloseCircle
              className="w-[8%] h-[50%] opacity-60 mr-1"
              onClick={() => setAuthemail((prev) => ({ ...prev, email: "" }))}
            />
          ) : (
            <></>
          )}
        </div>
        <button
          className="flex w-[18%] h-[95%] text-xs items-center justify-center text-center float-right ring-1 ring-[#ab82e0] text-[rgb(171,130,224)] font-extrabold rounded-md shadow-button"
          onClick={emailSubmit}
        >
          인증 요청
        </button>
      </div>
      <div className="text-lg font-medium mb-2">인증 번호</div>
      <div className="flex h-[7%] w-full flex-row items-center justify-between mb-4">
        <div className="flex w-[75%] h-full border-2 rounded-md items-center">
          <input
            name="number"
            type={"text"}
            value={authemail.number}
            placeholder="ex). 859283"
            className=" w-full outline-0  pl-[5px] text-base"
            onChange={changeHandler}
          />
          {authemail.number ? (
            <AiFillCloseCircle
              className="w-[8%] h-[50%] opacity-60 mr-1"
              onClick={() => setAuthemail((prev) => ({ ...prev, number: "" }))}
            />
          ) : (
            <></>
          )}
        </div>
        <button
          className="flex w-[18%] h-[95%] text-xs items-center justify-center text-center float-right ring-1 ring-[#ab82e0] text-[rgb(171,130,224)] font-extrabold rounded-md shadow-button"
          onClick={numberCheck}
        >
          확인
        </button>
      </div>
      <button
        className="h-[6%] mt-[7%] ring-1 ring-[#9d6ddd] text-[#9d6ddd] bg-white bg-opacity-60 font-extrabold text-sm rounded-md shadow-button"
        onClick={submitHandler}
      >
        다음
      </button>
    </div>
  );
};

export default PasswordEdit;
