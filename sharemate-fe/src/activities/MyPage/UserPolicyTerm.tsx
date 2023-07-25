import React from "react";
import { data } from "../../assets/texts/term";

const UserTerm = () => {
  return (
    <div className="mx-6 h-[93%] overflow-y-scroll scrollbar-hide">
      <div className="text-lg pt-8 pb-4 font-semibold">{data[1].title}</div>
      <span className="text-xs whitespace-pre-line">{data[1].text}</span>
    </div>
  );
};

export default UserTerm;
