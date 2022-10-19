import { useActivityParams } from "@stackflow/react";
import React from "react";

interface ParamsValue {
  building: string;
  hashtag: string[];
  people: string[];
  text: string;
}

const DetailGroup = () => {
  const activity: ParamsValue = useActivityParams();
  const props = activity;

  return (
    <div className="text-center">
      <div className="text-2xl">{props.building}</div>
      <br />
      <div>해시태그 : </div>
      {props.hashtag.map((elem, index) => (
        <div key={index}>#{elem}</div>
      ))}
      <br />
      <div>참여인원 : </div>
      {props.people.map((elem, index) => (
        <div key={index}>{elem}</div>
      ))}
      <br />
      <div>{props.text}</div>
    </div>
  );
};

export default DetailGroup;
