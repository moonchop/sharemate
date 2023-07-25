import request from "../../stores/Request";
import React, { useState } from "react";
import { useFlow } from "../../stackflow";
import {
  AiFillEye,
  AiFillCloseCircle,
  AiFillEyeInvisible,
} from "react-icons/ai";

const PasswordEdit = () => {
  const { replace } = useFlow();
  const [showPass, setShowPass] = useState({
    origin: false,
    new: false,
    verify: false,
  });

  const [passwordForm, setPasswordForm] = useState({
    currPwd: "",
    newPwd: "",
    verifyPwd: "",
  });

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;
    return setPasswordForm((prev) => ({ ...prev, [name]: value }));
  };

  const passwordSubmit = () =>
    request
      .put("user/pwd", {
        currPwd: passwordForm.currPwd,
        newPwd: passwordForm.newPwd,
      })
      .then((response) => {
        return true;
      })
      .catch((error) => {
        console.log(error);
        return false;
      });

  const submitHandler = async () => {
    const pwdRegEx = /^[A-Za-z0-9]([A-Za-z0-9]){6,12}$/;
    if (!pwdRegEx.test(passwordForm.newPwd)) {
      alert("숫자+영문자 조합으로 6자리에서 12자리로 입력해주세요");
    } else {
      if (passwordForm.newPwd === passwordForm.verifyPwd) {
        const result = await passwordSubmit();
        if (result) {
          alert("비밀번호 변경에 성공했습니다.");
          replace("MyPageActivity", {});
        }
      } else alert("비밀번호가 일치하지 않습니다.");
    }
  };

  return (
    <div className="h-[85%] flex flex-col pt-[30px] mx-[20px] ">
      <div className="text-2xl font-bold mb-[25px]">비밀번호 수정</div>
      <div className="flex h-[7%] mb-[3%] border-2 rounded-md items-center">
        <input
          name="currPwd"
          type={showPass.origin ? "text" : "password"}
          value={passwordForm.currPwd}
          placeholder="기존 비밀번호"
          className=" w-full outline-0  pl-3 text-base"
          onChange={changeHandler}
        />
        {passwordForm.currPwd ? (
          <AiFillCloseCircle
            className="w-[8%] h-[50%] opacity-60"
            onClick={() =>
              setPasswordForm((prev) => ({ ...prev, currPwd: "" }))
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
      <div className="flex h-[7%] mb-[3%] border-2 rounded-md items-center">
        <input
          name="newPwd"
          type={showPass.new ? "text" : "password"}
          value={passwordForm.newPwd}
          placeholder="새 비밀번호"
          className=" w-full outline-0  pl-3 text-base"
          onChange={changeHandler}
        />
        {passwordForm.newPwd ? (
          <AiFillCloseCircle
            className="w-[8%] h-[50%] opacity-60"
            onClick={() => setPasswordForm((prev) => ({ ...prev, newPwd: "" }))}
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
      <div className="flex h-[7%] mb-[3%] border-2 rounded-md items-center">
        <input
          name="verifyPwd"
          type={showPass.verify ? "text" : "password"}
          value={passwordForm.verifyPwd}
          placeholder="새 비밀번호 확인"
          className=" w-full outline-0 pl-3 text-base"
          onChange={changeHandler}
        />
        {passwordForm.verifyPwd ? (
          <AiFillCloseCircle
            className="w-[8%] h-[50%] opacity-60"
            onClick={() =>
              setPasswordForm((prev) => ({ ...prev, verifyPwd: "" }))
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
      <button
        className="h-[6%] mt-[7%] ring-1 ring-[#9d6ddd] text-[#9d6ddd] bg-white bg-opacity-60 font-extrabold text-sm rounded-md shadow-button"
        onClick={submitHandler}
      >
        비밀번호 변경
      </button>
    </div>
  );
};

export default PasswordEdit;
