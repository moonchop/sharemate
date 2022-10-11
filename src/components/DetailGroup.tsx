import { useActivity } from "@stackflow/react";
import React from "react";

const DetailGroup = () => {
  const activity = useActivity();
  let value = activity.params.elem;

  return (
    <div className="text-center">
      <div className="text-2xl">{value.building}</div>
      <br />
      <div>해시태그 : </div>
      {value.hashtag.map((elem) => (
        <div>#{elem}</div>
      ))}
      <br />
      <div>참여인원 : </div>
      {value.people.map((elem) => (
        <div>{elem}</div>
      ))}
      <br />
      <div>{value.text}</div>
    </div>
  );
};

export default DetailGroup;
