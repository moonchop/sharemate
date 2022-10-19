import { useActivityParams } from "@stackflow/react";
import React from "react";

interface ParamsValue {
  photo: string;
  name: string;
  age: string;
  major: string;
  hashtag: string[];
}

const DetailProfile = () => {
  const activity: ParamsValue = useActivityParams();
  const props = activity;

  return (
    <div className="flex flex-col pt-24 text-center justify-center items-center">
      <img
        src={props.photo}
        className="mb-14 rounded-full justify-center items-center"
      />
      <div>이름 : {props.name}</div>
      <div>나이 : {props.age}</div>
      <div>전공 : {props.major}</div>
      <div>해시태그 : </div>
      {props.hashtag.map((elem, index) => (
        <div key={index}>#{elem} </div>
      ))}
      <div>자기소개 : 안녕하세요</div>
    </div>
  );
};

export default DetailProfile;
