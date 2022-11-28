import React from "react";
import { IoIosArrowForward } from "react-icons/io";

export default function ArrowText({
  text,
  onClick,
  isThick,
  isThin,
}: {
  text: string;
  onClick: React.MouseEventHandler<HTMLDivElement> | undefined;
  isThick?: boolean;
  isThin?: boolean;
}) {
  return (
    <>
      <div className="h-16" onClick={onClick}>
        <div className="flex justify-between items-center py-4">
          <div className="text-[#AFADF5] text-sm ml-5">{text}</div>
          <div>
            <IoIosArrowForward
              size={25}
              className="opacity-30"
            ></IoIosArrowForward>
          </div>
        </div>
        {isThin && <hr />}
        {isThick && <hr className="h-1 bg-[rgba(170,170,170,0.25)] " />}
      </div>
    </>
  );
}
