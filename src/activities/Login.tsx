import React, { useEffect, useState } from "react";
import { useFlow } from "../stackflow";
import Logo from "../assets/Logo.png";
import { useAuth } from "../stores/auth";
import request from "../stores/Request";

const Login = () => {
  const { accessToken, refreshToken, setToken } = useAuth();

  const { replace, push } = useFlow();
  const [loginForm, setLoginForm] = useState({
    email: "",
    pwd: "",
  });

  const loginSubmit = () =>
    request
      .post("/login", loginForm)
      .then((response) => {
        console.log(response);
        setToken(response.data);
        return true;
      })
      .catch((error) => {
        console.log(error);
        return false;
      });

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;
    return setLoginForm((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = async () => {
    if (loginForm.email == "" || loginForm.pwd == "") {
      alert("이메일, 비밀번호를 입력해 주세요");
      return;
    }
    const resultStatus = await loginSubmit();
    if (resultStatus) replace("MainActivity", { accessToken });

    setLoginForm((prev) => ({ ...prev, pwd: "" }));
  };

  return (
    <div className="h-full w-full">
      <div className="flex flex-col items-center h-full w-full">
        <div className="flex h-[55%] w-[63%] items-center justify-center">
          <img src={Logo} className="flex mt-[54%] mb-[35%]" />
        </div>
        <div className="h-[12%] w-[81%]">
          <input
            className="border-b-2 w-full pro:mb-[9%] mb-[5%] outline-0 placeholder:text-lg placeholder:font-normal "
            type={"email"}
            placeholder="Email"
            value={loginForm.email}
            name="email"
            onChange={changeHandler}
          />
          <input
            className="border-b-2 w-full pro:mb-[9%] mb-[5%] outline-0 placeholder:text-lg placeholder:font-normal"
            type={"password"}
            placeholder="Password"
            value={loginForm.pwd}
            name="pwd"
            onChange={changeHandler}
          />
        </div>
        <div className="w-[81%] flex flex-row justify-between pro:mb-[30%] mb-[23%]">
          <div
            className="flex text-[#AAAAAA] font-semibold"
            onClick={() => {
              push("SignUpActivity", {});
            }}
          >
            회원가입
          </div>
          <div className="flex text-[#AAAAAA] font-semibold">비밀번호 찾기</div>
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
