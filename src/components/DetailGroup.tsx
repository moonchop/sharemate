import { useActivityParams } from "@stackflow/react";
import { HashTagColor } from "../utils/HashTagColor";
import React from "react";
import HashTag from "./HashTag";
import Ajou from "../assets/Ajou.gif";
import { IoIosCheckmark } from "react-icons/io";
interface ParamsValue {
  id: number;
  building: string;
  hashtag: string[];
  groupIntro: string;
  mateIntro: string[];
  people: string[];
  room: number;
}

const DetailGroup = () => {
  // props : elem
  const activity: ParamsValue = useActivityParams() as any;
  const props = activity;

  return (
    <div className="">
      <img src={Ajou} className="absolute z-5 h-[20%] opacity-50" />
      {/* 하얀색 카드 Form */}
      <div className="absolute h-[75%] bg-white rounded-3xl top-[20%] w-[90%] right-1/2 left-1/2 -translate-x-1/2 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] ">
        <div className=" p-5 z-10 ">
          {/* 카드 내용 */}
          <p className="text-2xl font-bold">{props.building}</p>
          <p className="text-md mt-2">{props.groupIntro}</p>
          {/* 해시태그(화면 width 꽉차게 스크롤로 구현) */}
          <div className="pl-3 overflow-auto scrollbar-hide -mx-5 mt-2 ">
            <div className="p-2">
              <HashTag
                text={props.hashtag}
                color={HashTagColor as ("red" | "blue" | "green")[]}
              />
            </div>
          </div>
          <hr className="w-full mt-5 mb-5" />
          <p className="text-lg font-medium mt-3 mb-1">
            이런 룸메이트를 원해요.
          </p>
          <div>
            {props.mateIntro.map((elem, index) => (
              <div key={index} className="flex items-center mb-2 -ml-1.5">
                <IoIosCheckmark className="w-7 h-7 text-green-700 opacity-50" />
                <p className={"text-md"}>{elem}</p>
              </div>
            ))}
          </div>
          <hr className="w-full mt-5 mb-5" />
          <p className="text-lg font-medium">모집된 룸메이트 정보</p>
        </div>
      </div>
    </div>
  );
};

export default DetailGroup;
