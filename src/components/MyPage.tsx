import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const MyPage = () => {
  return (
    <div className="h-[85%] ">
      <div className="h-[34%] flex flex-col pt-[30px]">
        <div className="h-[100%]">
          <div className="text-3xl font-bold mb-[25px] ml-[24px]">
            마이페이지
          </div>
          <div className="flex items-center">
            <div className="flex flex-row items-center w-[83%] ml-[24px]">
              <img
                className="flex rounded-3xl w-[80px] h-[80px] mr-[15px]"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              />
              <div className="flex flex-col">
                <div className="font-bold text-xl">장은학님</div>
                <div className="text-[#858181]">devnak</div>
              </div>
            </div>
            <IoIosArrowForward className="w-[25px] h-[25px] opacity-30"></IoIosArrowForward>
          </div>
        </div>
        <div className="h-[4%] bg-[rgba(170,170,170,0.25)]"></div>
      </div>
      <div className="h-[31%]">
        <div className="h-[32%] flex items-center border-b-2">
          <div className="pl-[28px] w-[90%] text-[#AFADF5] text-lg font-semibold">
            아주대학교 공지사항
          </div>
          <IoIosArrowForward className="opacity-30"></IoIosArrowForward>
        </div>
        <div className="h-[32%] flex items-center border-b-2">
          <div className=" pl-[28px] w-[90%] text-[#AFADF5] text-lg font-semibold">
            기숙사 공지사항
          </div>
          <IoIosArrowForward className="opacity-30"></IoIosArrowForward>
        </div>
        <div className="h-[32%] flex items-center">
          <div className=" pl-[28px] w-[90%] text-[#AFADF5] text-lg font-semibold">
            기숙사 둘러보기
          </div>
          <IoIosArrowForward className="opacity-30"></IoIosArrowForward>
        </div>
        <div className="h-[4%] bg-[rgba(170,170,170,0.25)]"></div>
      </div>
      <div className="h-[35%]">
        <div className="h-[32%] flex items-center border-b-2">
          <div className="pl-[28px] w-[90%] text-[#AFADF5] text-lg font-semibold">
            좋아요 누른 프로필
          </div>
          <IoIosArrowForward className="opacity-30"></IoIosArrowForward>
        </div>
        <div className="h-[32%] flex items-center ">
          <div className="pl-[28px] w-[90%] text-[#AFADF5] text-lg font-semibold">
            회원 탈퇴
          </div>
          <IoIosArrowForward className="opacity-30"></IoIosArrowForward>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
