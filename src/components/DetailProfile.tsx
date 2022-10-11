import { useActivity } from "@stackflow/react";
import React from "react";

const DetailProfile = () => {
  const activity = useActivity();
  let value = activity.params.elem;

  return (
    <div className="flex flex-col pt-24 text-center justify-center items-center">
      <img src={value.photo} className="mb-14 rounded-full justify-center items-center" />
      <div>이름 : {value.name}</div>
      <div>나이 : {value.age}</div>
      <div>전공 : {value.major}</div>
      <div>해시태그 : </div>
      {value.hashtag.map((elem) => (
        <div>#{elem} </div>
      ))}
      <div>자기소개 : 안녕하세요</div>
    </div>
  );
};

export default DetailProfile;
