import { useActivityParams } from "@stackflow/react";
import React from "react";
import Hashtag from "./HashTag";
import { HashTagColor } from "../utils/HashTagColor";

interface ParamsValue {
  id: number;
  avatar: string;
  email: string;
  first_name: string;
  last_name: string;
}

const DetailProfile = () => {
  const activity: ParamsValue = useActivityParams();
  const props = activity;

  return (
    <div className="flex w-[100%] h-[100%] px-4 flex-col pt-10 text-center items-center">
      <img
        src={props.avatar}
        className="mb-14 rounded-full justify-center items-center"
      />
      <div className="text-2xl">이름 : {props.email}</div>
      <div>나이 : {props.first_name}</div>
      <div>전공 : {props.last_name}</div>
      <div>해시태그 : </div>
      <Hashtag
        text={["깔끔", "청결", "아침"]}
        color={HashTagColor as ("red" | "blue" | "green")[]}
      />
      <div>자기소개 : 안녕하세요</div>
    </div>
  );
};

export default DetailProfile;
