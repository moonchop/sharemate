import React, { useState } from "react";
import {
  AiFillEye,
  AiFillCloseCircle,
  AiFillEyeInvisible,
} from "react-icons/ai";

const PasswordEdit = () => {
  const [showPass, setShowPass] = useState({
    origin: false,
    new: false,
    verify: false,
  });

  const [passwordForm, setPasswordForm] = useState({
    origin_pass: "",
    new_pass: "",
    verify_pass: "",
  });

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;
    return setPasswordForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="h-[85%] flex flex-col pro:pt-[30px] pt-[20px] mx-[20px] ">
      <div className="pro:text-3xl text-2xl font-bold pro:mb-[25px] mb-[20px] ">
        비밀번호 수정
      </div>
      <div className="flex h-[6%] mb-[3%] border-2 rounded-md items-center">
        <input
          name="origin_pass"
          type={showPass.origin ? "text" : "password"}
          value={passwordForm.origin_pass}
          placeholder="기존 비밀번호"
          className=" w-full outline-0  pl-[5px] placeholder:text-lg placeholder:font-normal"
          onChange={changeHandler}
        />
        {passwordForm.origin_pass ? (
          <AiFillCloseCircle
            className="w-[8%] h-[50%] opacity-60"
            onClick={() =>
              setPasswordForm((prev) => ({ ...prev, origin_pass: "" }))
            }
          />
        ) : (
          <></>
        )}
        {!showPass.origin ? (
          <AiFillEye
            className="w-[10%] h-[60%] opacity-60"
            onClick={() => {
              setShowPass((prev) => ({ ...prev, origin: true }));
            }}
          />
        ) : (
          <AiFillEyeInvisible
            className="w-[10%] h-[60%] opacity-60"
            onClick={() => {
              setShowPass((prev) => ({ ...prev, origin: false }));
            }}
          />
        )}
      </div>
      <div className="flex h-[6%] mb-[3%] border-2 rounded-md items-center">
        <input
          name="new_pass"
          type={showPass.new ? "text" : "password"}
          value={passwordForm.new_pass}
          placeholder="새 비밀번호"
          className=" w-full outline-0  pl-[5px] placeholder:text-lg placeholder:font-normal"
          onChange={changeHandler}
        />
        {passwordForm.new_pass ? (
          <AiFillCloseCircle
            className="w-[8%] h-[50%] opacity-60"
            onClick={() =>
              setPasswordForm((prev) => ({ ...prev, new_pass: "" }))
            }
          />
        ) : (
          <></>
        )}
        {!showPass.new ? (
          <AiFillEye
            className="w-[10%] h-[60%] opacity-60"
            onClick={() => {
              setShowPass((prev) => ({ ...prev, new: true }));
            }}
          />
        ) : (
          <AiFillEyeInvisible
            className="w-[10%] h-[60%] opacity-60"
            onClick={() => {
              setShowPass((prev) => ({ ...prev, new: false }));
            }}
          />
        )}
      </div>
      <div className="flex h-[6%] mb-[3%] border-2 rounded-md items-center">
        <input
          name="verify_pass"
          type={showPass.verify ? "text" : "password"}
          value={passwordForm.verify_pass}
          placeholder="새 비밀번호 확인"
          className=" w-full outline-0  pl-[5px] placeholder:text-lg placeholder:font-normal"
          onChange={changeHandler}
        />
        {passwordForm.verify_pass ? (
          <AiFillCloseCircle
            className="w-[8%] h-[50%] opacity-60"
            onClick={() =>
              setPasswordForm((prev) => ({ ...prev, verify_pass: "" }))
            }
          />
        ) : (
          <></>
        )}
        {!showPass.verify ? (
          <AiFillEye
            className="w-[10%] h-[60%] opacity-60"
            onClick={() => {
              setShowPass((prev) => ({ ...prev, verify: true }));
            }}
          />
        ) : (
          <AiFillEyeInvisible
            className="w-[10%] h-[60%] opacity-60"
            onClick={() => {
              setShowPass((prev) => ({ ...prev, verify: false }));
            }}
          />
        )}
      </div>
      <button className="h-[6%] mt-[10%] ring-2 ring-[#9d6ddd] text-[#9d6ddd] bg-white bg-opacity-60 font-extrabold text-sm rounded-md shadow-button">
        비밀번호 변경
      </button>
    </div>
  );
};

export default PasswordEdit;
