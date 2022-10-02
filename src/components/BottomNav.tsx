import React from "react";
import "./BottomNav.css";
import { BiHome, BiUser } from "react-icons/bi";
import { GrGroup } from "react-icons/gr";
import { BsLayoutTextWindowReverse } from "react-icons/bs";

type Navigate_Type = "Main" | "Group" | "Community" | "MyPage";

const NAVIGATE_OBJ = [
  {
    action: "Main",
    content: "개인",
    image: <BiHome />,
  },
  {
    action: "Group",
    content: "그룹",
    image: 
      <GrGroup />
    ,
  },
  {
    action: "Community",
    content: "커뮤니티",
    image: <BsLayoutTextWindowReverse />
    ,
  },
  {
    action: "MyPage",
    content: "내정보",
    image: <BiUser  />,
  },
];

const BottomNav = ({navigate,navigatePath}:{navigate(action:string) : void,navigatePath:Navigate_Type}) => {
  console.log(navigatePath)
  return (
    <nav className="wrapper bg-white">
      {NAVIGATE_OBJ.map(({ action, content, image }) => (
        <div
          className={`text-xs h-full ${navigatePath===action?'opacity-100':'opacity-50'}`}
          key={action}
          onClick={() => navigate(action)}
        >
          {React.cloneElement(image,{
            className: `justify-center items-center w-full h-3/6 mt-1 ${navigatePath===action?'opacity-100':'opacity-30'}`
          })}
          {content}
        </div>
      ))}
    </nav>
  );
};

export default BottomNav;
