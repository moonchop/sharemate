import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useFlow } from "../stackflow";

const MyPage = () => {
  const { push, replace } = useFlow();
  return (
    <div className="h-[85%] ">
      <div className="h-[32%] flex flex-col pro:pt-[30px] pt-[20px] border-b-[6px] border-[rgba(170,170,170,0.25)]">
        <div className="h-[100%] pb-[13%] ">
          <div className="pro:text-3xl text-2xl font-bold pro:mb-[25px] mb-[20px] ml-[24px]">
            마이페이지
          </div>
          <div className="flex items-center">
            <div className="flex flex-row items-center w-[83%] ml-[24px]">
              <img
                className="flex rounded-3xl pro:w-[80px] pro:h-[80px] w-[60px] h-[60px] mr-[15px]"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              />
              <div className="flex flex-col">
                <div className="font-bold pro:text-xl text-lg">장은학님</div>
                <div className="text-[#858181] pro:text-base text-sm">
                  devnak
                </div>
              </div>
            </div>
            <IoIosArrowForward
              className="w-[25px] h-[25px] opacity-30"
              onClick={() => push("ProfileEditActivity", {})}
            ></IoIosArrowForward>
          </div>
        </div>
      </div>
      <div className="h-[22%] border-b-[6px] border-[rgba(170,170,170,0.25)] pro:text-lg text-base font-semibold">
        <div className="h-[50%] flex items-center border-b-2">
          <div
            className="pl-[28px] w-[90%] text-[#AFADF5]"
            onClick={() => push("LikeProfileActivity", {})}
          >
            좋아요 누른 프로필
          </div>
          <IoIosArrowForward className="opacity-30"></IoIosArrowForward>
        </div>
        <div className="h-[48%] flex items-center">
          <div className="pl-[28px] w-[90%] text-[#AFADF5] ">비밀번호 변경</div>
          <IoIosArrowForward
            className="opacity-30"
            onClick={() => push("PasswordActivity", {})}
          ></IoIosArrowForward>
        </div>
      </div>
      <div className="h-[22%] pro:text-lg text-base font-semibold">
        <div className="h-[48%] flex items-center border-b-2">
          <div className="pl-[28px] w-[90%] text-[#AFADF5] ">로그아웃</div>
          <IoIosArrowForward
            className="opacity-30"
            onClick={() => replace("LoginActivity", {})}
          ></IoIosArrowForward>
        </div>
        <div className="h-[48%] flex items-center ">
          <div className="pl-[28px] w-[90%] text-[#AFADF5] ">회원 탈퇴</div>
          <IoIosArrowForward
            className="opacity-30"
            onClick={() => replace("LoginActivity", {})}
          ></IoIosArrowForward>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
