import { useActivityParams } from "@stackflow/react";
import React, { useState } from "react";
import Hashtag from "./HashTag";
import { HashTagColor } from "../utils/HashTagColor";
import Ajou from "../assets/Ajou.gif";
import KakaoButton from "../assets/KakaoButton.png";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface ParamsValue {
  id: number;
  name: string;
  age: number;
  grade: string;
  major: string;
  hashtag: string[];
  mbti: string;
  photo: string;
  self_intro: string;
  kakao_link: string;
}

const props: ParamsValue = {
  id: 3,
  name: "장은학",
  age: 24,
  grade: "3",
  major: "소프트웨어학과",
  hashtag: ["3학년", "운동", "비염"],
  mbti: "ISTJ",
  photo:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  self_intro:
    "안녕하세요. 저는 무슨무슨 학과 몇학년 땡땡땡입니다. 저는 특히 무엇을 좋아해서 무엇을 같이 할 수 있는 사람이면 좋겠습니다.",
  kakao_link: "https://open.kakao.com/o/s2qDCFOe",
};

const DetailProfile = () => {
  const [like, setLike] = useState<boolean>(false);

  return (
    <div className="flex-col h-[92%]">
      <div className="w-full h-[38%]">
        <div className="h-full relative">
          <img src={Ajou} className="absolute h-[87%] z-1 opacity-25" />
          <div className="absolute h-[87%] w-full z-2 bg-[rgba(86,64,221,0.2)] justify-center items-center" />
          <div className="flex items-center justify-center h-[57%]">
            <img
              src={props.photo}
              className="flex z-20 rounded-full shadow-xl w-[85px] pro:w-[109px] pro:h-[109px] h-[85px] "
            />
          </div>
          <div className="absolute h-[70%] bg-white rounded-3xl top-[29%] left-[41px] right-[41px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
            <div className="h-full w-full z-10">
              <div className="flex mb-[3%] flex-row items-center justify-center">
                <div className="items-center w-[28%] h-[42px] pro:h-[55px] " />
              </div>
              <div className="font-bold pro:text-2xl text-xl text-center mb-[3%]">
                {props.name}
              </div>
              <div className="pro:text-xl text-lg pro:mb-[5%] mb-[5px] font-medium text-[rgb(133,129,129)] text-center">
                {props.major} &nbsp;{props.grade}학년 &nbsp;{props.age}살
              </div>
              <div className=" mb-[24px] pro:text-xl text-lg font-medium text-center">
                <strong className="text-[#AFADF5] font-semibold">MBTI</strong>
                &nbsp; {props.mbti}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col ml-[38px] mr-[38px] h-[62%] justify-center ">
        <div className="h-[80%] pro:mt-[9%] mt-[5%] item-center border-b-2 border-[#AAAAAA]">
          <div className=" text-left w-full ">
            <div className="font-bold pro:text-xl text-lg pro:mb-[30px] mb-[18px] text-[#AFADF5] underline underline-offset-8">
              나의 생활
            </div>
            <div className="flex pro:text-xl text-lg flex-row pro:mb-[30px] mb-[22px] w-full justify-between ">
              <div className="flex "> 아침형 </div>
              <div className="flex "> 비흡연 </div>
              <div className="flex "> 음주 잦음 </div>
            </div>
            <div className="flex pro:text-xl text-lg flex-row pro:mb-[12%] mb-[5%] w-full justify-between">
              <div className="flex">청결 예민</div>
              <div className="flex">코골이</div>
              <div className="flex">수면 5시간 ↓ </div>
            </div>
            <div className="font-bold pro:text-xl text-lg pro:mb-[27px] mb-[15px] text-[#AFADF5] underline underline-offset-8">
              자기 소개
            </div>
            <div className="pro:text-xl pro:leading-9 text-lg font-medium w-full	">
              {props.self_intro}
            </div>
          </div>
        </div>
        <div className="flex justify-between w-full h-[13%]">
          {!like ? (
            <AiOutlineHeart
              color="#AAAAAA"
              className="h-full w-[10%]"
              onClick={() => setLike(true)}
            />
          ) : (
            <AiFillHeart
              color="red"
              className="h-full w-[10%] "
              onClick={() => setLike(false)}
            />
          )}

          <img
            src={KakaoButton}
            className="h-full items-center w-[130px] "
            onClick={() => {
              window.open(props.kakao_link);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default DetailProfile;
