import React from "react";
import "./BottomNav.css";
import { useFlow } from "../stackflow";
import { BiHome, BiUser } from "react-icons/bi";
import { GrGroup } from "react-icons/gr";
import { BsLayoutTextWindowReverse } from "react-icons/bs";

type Navigate_Type = "Main" | "Group" | "Community" | "MyPage";

const NAVIGATE_OBJ = [
  {
    action: "Main",
    content: "개인",
    image: <BiHome className="justify-center items-center w-full h-3/6 mt-1" />,
  },
  {
    action: "Group",
    content: "그룹",
    image: (
      <GrGroup className="justify-center items-center w-full h-3/6 mt-1" />
    ),
  },
  {
    action: "Community",
    content: "커뮤니티",
    image: (
      <BsLayoutTextWindowReverse className="justify-center items-center w-full h-3/6 mt-1" />
    ),
  },
  {
    action: "MyPage",
    content: "내정보",
    image: <BiUser className="justify-center items-center w-full h-3/6 mt-1" />,
  },
];

const BottomNav = () => {
  const { replace } = useFlow();

  return (
    <nav className="wrapper">
      {NAVIGATE_OBJ.map(({ action, content, image }) => (
        <div
          className="text-xs h-full"
          key={action}
          onClick={() => replace(action as Navigate_Type, {})}
        >
          {image}
          {content}
        </div>
      ))}
    </nav>
  );
};

export default BottomNav;
