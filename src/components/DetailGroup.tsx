import { useActivityParams } from "@stackflow/react";
import { HashTagColor } from "../utils/HashTagColor";
import React from "react";
import HashTag from "./HashTag";
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
    <div className="ml-6">
      <p className="text-3xl pt-10">{`[ ${props.building}] `}</p>
      <p className="text-3xl ">룸메이트를 모집합니다.</p>
      <br />
      <br />
      <p className="text-[18px]">{props.groupIntro}</p>
      <div className="my-2">
        <HashTag
          text={props.hashtag}
          color={HashTagColor as ("red" | "blue" | "green")[]}
        />
      </div>
      <hr className="w-[90%] justify-center items-center my-10" />
      <p className="text-2xl mb-5">이런 룸메이트를 원해요.</p>
      {props.mateIntro.map((elem, index) => (
        <li
          key={index}
          className={"items-center text-[19px] px-2 py-1 min-w-fit "}
        >
          {elem}
        </li>
      ))}
      <hr className="w-[90%] justify-center items-center my-10" />
      <p className="text-2xl mb-5">모집된 룸메이트 정보</p>
    </div>
  );
};

export default DetailGroup;
