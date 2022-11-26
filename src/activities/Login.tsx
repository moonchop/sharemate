import React, { useEffect, useState } from "react";
import { useFlow } from "../stackflow";
import Logo from "../assets/Logo.png";
import { useAuth } from "../stores/auth";
import request from "../stores/Request";
import { AiFillCloseCircle } from "react-icons/ai";

const Login = () => {
  const { setToken } = useAuth();

  const { replace, push } = useFlow();
  const [loginForm, setLoginForm] = useState({
    email: "",
    pwd: "",
  });

  const [auto, setAuto] = useState<number>(0);

  const loginSubmit = () =>
    request
      .post("/sign/login", loginForm)
      .then((response) => {
        console.log(
          "status : ",
          response.status,
          "reslut : ",
          response.data.result
        );
        setToken(response.data.data);
        return true;
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 400) alert("비밀번호가 잘못되었습니다.");
        else if (error.response.status === 500)
          alert("이메일을 확인해 주세요.");
        return false;
      });

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;
    return setLoginForm((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = async () => {
    if (loginForm.email == "" || loginForm.pwd == "") {
      alert("로그인 정보를 입력해 주세요");
      return;
    }
    const resultStatus = await loginSubmit();
    if (resultStatus) replace("MainActivity", {});

    setLoginForm((prev) => ({ ...prev, pwd: "" }));
  };

  const autoHandler = () => {
    auto === 0 ? setAuto(1) : setAuto(0);
  };

  return (
    <div className="h-full w-full">
      <div className="flex flex-col items-center h-full w-full">
        <div className="flex h-[55%] w-[63%] items-center justify-center">
          <img src={Logo} className="flex mt-[54%] mb-[35%]" />
        </div>
        <div className="flex flex-col pro:h-[13%] h-[15%] w-[81%]">
          <div className="flex w-full h-[50%] border-b-2 pro:mb-[7%] mb-[8%] items-center">
            <input
              className=" w-full h-full pb-1 outline-0 placeholder:text-base placeholder:font-normal border-none"
              type={"email"}
              placeholder="Email"
              value={loginForm.email}
              name="email"
              onChange={changeHandler}
            />
            {loginForm.email ? (
              <AiFillCloseCircle
                className="w-[10%] h-[50%] opacity-60"
                onClick={() => setLoginForm((prev) => ({ ...prev, email: "" }))}
              />
            ) : (
              <></>
            )}
          </div>
          <div className="flex w-full h-[50%] border-b-2 pro:mb-[7%] mb-[8%] items-center">
            <input
              className=" w-full h-full pb-1 outline-0 placeholder:text-base placeholder:font-normal border-none"
              type={"password"}
              placeholder="Password"
              value={loginForm.pwd}
              name="pwd"
              onChange={changeHandler}
            />
            {loginForm.pwd ? (
              <AiFillCloseCircle
                className="w-[10%] h-[50%] opacity-60"
                onClick={() => setLoginForm((prev) => ({ ...prev, pwd: "" }))}
              />
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="w-[81%] justify-between items-center flex flex-row pro:mb-[30%] mb-[23%]">
          <div className="flex text-[#AAAAAA] text-sm">
            <input
              className="flex mr-1 accent-purple-500"
              type={"checkbox"}
              value={auto}
              name="auto"
              onChange={autoHandler}
            />
            자동 로그인
          </div>
          <div className="flex flex-row">
            <div
              className="flex text-[#AAAAAA] text-sm mr-2 text  underline underline-offset-4"
              onClick={() => {
                push("SignUpActivity", {});
              }}
            >
              회원가입
            </div>
            <div
              className="flex text-[#AAAAAA] text-sm  underline underline-offset-4"
              onClick={() => {
                push("FindPwdActivity", {});
              }}
            >
              비밀번호 찾기
            </div>
          </div>
        </div>
        <button
          className="w-[81%] h-[7%] rounded-md border border-transparent bg-[#B1A4FD] text-xl font-semibold text-white shadow-[0px_3px_5px_3px_rgba(0,0,0,0.25)] "
          onClick={submitHandler}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
