import React, { useEffect, useState } from "react";
import { useFlow } from "../stackflow";
import Logo from "../assets/Logo.png";

const solution = {
  email: "test",
  password: "1234",
};

const accessToken = "Token입니다.";

const Login = () => {
  const { replace } = useFlow();
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    const { value, name } = e.currentTarget;
    return setLoginForm((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = () => {
    loginForm.email === solution.email &&
    loginForm.password === solution.password
      ? replace("MainActivity", { accessToken })
      : (alert("이메일, 비밀번호 불일치"),
        setLoginForm((prev) => ({ ...prev, password: "" })));
  };

  return (
    <div className="h-full w-full">
      <div className="flex flex-col items-center h-full w-full">
        <div className="flex h-[55%] w-[63%] items-center justify-center">
          <img src={Logo} className="flex mt-[54%] mb-[35%]" />
        </div>
        <div className="h-[12%] w-[81%]">
          <input
            className="border-b-2 w-full mb-[9%] outline-0 placeholder:text-lg placeholder:font-normal "
            type={"email"}
            placeholder="Email"
            value={loginForm.email}
            name="email"
            onChange={changeHandler}
          />
          <input
            className="border-b-2 w-full mb-[9%] outline-0 placeholder:text-lg placeholder:font-normal"
            type={"password"}
            placeholder="Password"
            value={loginForm.password}
            name="password"
            onChange={changeHandler}
          />
        </div>
        <div className="w-[81%] flex flex-row justify-between mb-[23%]">
          <div className="flex text-[#AAAAAA] font-semibold">회원가입</div>
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
