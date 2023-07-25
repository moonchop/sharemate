import React from "react";
import { useFlow } from "../../stackflow";
import { IoIosArrowForward } from "react-icons/io";

const Term = () => {
  const { push } = useFlow();
  return (
    <>
      <div className="flex flex-col h-[25%] mt-9 text-base ">
        <div className="flex border-b-2 h-[33%] items-center">
          <div
            className="pl-[28px] w-[90%]"
            onClick={() => push("UserTermActivity", {})}
          >
            개인정보 수집 이용 동의
          </div>
          <IoIosArrowForward className="opacity-30"></IoIosArrowForward>
        </div>
        <div className="flex border-b-2 h-[33%] items-center">
          <div
            className="pl-[28px] w-[90%]"
            onClick={() => push("UserPolicyTermActivity", {})}
          >
            개인정보 처리 방침
          </div>
          <IoIosArrowForward className="opacity-30"></IoIosArrowForward>
        </div>
        <div className="flex h-[33%] items-center">
          <div
            className="pl-[28px] w-[90%]"
            onClick={() => push("ServiceTermActivity", {})}
          >
            쉐어메이트 서비스 이용약관
          </div>
          <IoIosArrowForward className="opacity-30"></IoIosArrowForward>
        </div>
      </div>
    </>
  );
};

export default Term;
