import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useFlow } from "../../stackflow";
import { HashTagColor } from "../../utils/HashTagColor";
import { IGroupJoined } from "../DetailGroup";
import HashTag from "../HashTag";

export default function PersonCard({
  age,
  gender,
  hashtags,
  major,
  name,
  profile_photo,
  userID,
  onClick,
}: IGroupJoined & { onClick: React.MouseEventHandler<HTMLDivElement> }) {
  const { push } = useFlow();
  return (
    <div
      onClick={() => {
        push("ProfileActivity", { id: userID });
      }}
      className="px-5 pt-3 pb-2 w-full bg-white-500 h-50 border-1 rounded-lg border-white border shadow-[1px_1px_5px_1px_rgba(0,0,0,0.2)] "
    >
      <div className="flex flex-row text-sm mb-2">
        <p>{name}</p>
        <p className="ml-0.5">{`(${age})`}</p>
        <p className="ml-3">{major}</p>
        <IoIosArrowForward className=" absolute w-[20px] h-[20px] opacity-30 right-9" />
      </div>
      <div className="flex flex-row overflow-auto scrollbar-hide py-3 px-1">
        <HashTag
          text={hashtags}
          color={HashTagColor as ("red" | "blue" | "green")[]}
        />
      </div>
    </div>
  );
}
