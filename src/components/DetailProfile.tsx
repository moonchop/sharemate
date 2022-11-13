import { useActivityParams } from "@stackflow/react";
import React from "react";
import Hashtag from "./HashTag";
import { HashTagColor } from "../utils/HashTagColor";
import Ajou from "../assets/Ajou.gif";

interface ParamsValue2 {
  id: number;
  avatar: string;
  email: string;
  first_name: string;
  last_name: string;
}

interface ParamsValue {
  id: number;
  name: string;
  age: string;
  major: string;
  hashtag: string[];
  photo: string;
}

const DetailProfile = () => {
  const activity: ParamsValue = useActivityParams();
  const props = activity;

  return (
    <div className="flex-col h-full">
      <div className="w-full h-[30%]">
        <div className="h-full relative">
          <img src={Ajou} className="absolute h-[87%] z-1 opacity-25" />
          <div className="absolute h-[87%] w-full z-2 bg-[rgba(86,64,221,0.2)]">
            <img
              src={props.photo}
              className="absolute z-20 rounded-full shadow-xl w-[110px] h-[110px] top-[33px] left-[140px]"
            />
          </div>
          <div className="absolute bg-white rounded-3xl top-[83px] left-[41px] right-[41px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
            <div className="h-full w-full z-10">
              <div className="flex mb-[11px] flex-row items-center justify-center">
                <div className="items-center w-[110px] h-[60px]" />
              </div>
              <div className="font-bold text-2xl text-center mb-[11px]">
                {props.name}
              </div>
              <div className="text-xl mb-[28px] font-medium text-[rgb(133,129,129)] text-center">
                {props.major} &nbsp;3학년 &nbsp;{props.age}살
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex ml-[8px] w-full h-[70%]">
        <div className="flex mr-[18px] h-full border border-solid border-[#D1CECE]"></div>
        <div className="absolute w-[16px] h-[16px] left-[2px] top-[355px] bg-[#DB9CDA] rounded-full"></div>
        <div className="absolute w-[16px] h-[16px] left-[2px] top-[408px] bg-[#AFADF5] rounded-full"></div>
        <div className="absolute w-[16px] h-[16px] left-[2px] top-[566px] bg-[#BA98E5] rounded-full"></div>
        <div className="mt-[30px]">
          <div className="mb-[13px] text-left">
            <div className=" mb-[24px] text-xl font-medium">
              <strong className="text-[#AFADF5] text-xl font-semibold underline underline-offset-8">
                MBTI
              </strong>{" "}
              &nbsp; ISTJ
            </div>
            <div className="font-bold text-xl mb-[18px] text-[#AFADF5] underline underline-offset-8">
              나의 생활
            </div>
            <div className="flex flex-row mb-[22px] w-[310px] justify-between ">
              <div className="flex text-xl "> 아침형 </div>
              <div className="flex text-xl"> 비흡연 </div>
              <div className="flex text-xl"> 음주 잦음 </div>
            </div>
            <div className="flex flex-row mb-[32px] w-[320px] justify-between">
              <div className="flex  text-xl">청결 예민</div>
              <div className="flex  text-xl">코골이</div>
              <div className="flex  text-xl">수면 5시간 ↓ </div>
            </div>
            <div className="font-bold text-xl mb-[15px] text-[#AFADF5] underline underline-offset-8">
              자기 소개
            </div>
            <div className="text-xl font-medium w-[329px]">
              안녕하세요. 저는 무슨무슨 학과 몇학년 땡땡땡입니다. 저는 특히
              무엇을 좋아해서 무엇을 같이 할 수 있는 사람이면 좋겠습니다.
            </div>
          </div>
          <div className="w-[329px] whitespace-pre-wrap	font-bold text-xl text-center mb-[11px]">
            저한테 관심있으면 편하게 오픈채팅으로 대화를 시작해봐요
          </div>
          <div className="flex items-center justify-center">
            <button>시작하기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProfile;
