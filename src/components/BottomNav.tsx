import React from "react";
import { BiHome, BiUser } from "react-icons/bi";
import { GrGroup } from "react-icons/gr";
import { BsLayoutTextWindowReverse } from "react-icons/bs";
import { Link } from "../stackflow";
import { useActivity } from "@stackflow/react";
import { classNames } from "../utils/class";

const NAVIGATE_OBJ = [
  {
    action: "MainActivity" as const,
    content: "개인",
    Icon: <BiHome />,
  },
  {
    action: "GroupActivity" as const,
    content: "그룹",
    Icon: <GrGroup />,
  },
  {
    action: "CommunityActivity" as const,
    content: "커뮤니티",
    Icon: <BsLayoutTextWindowReverse />,
  },
  {
    action: "MyPageActivity" as const,
    content: "내정보",
    Icon: <BiUser />,
  },
];

const BottomNav = () => {
  const activity = useActivity();

  //activity.name === "Profile" || activity.name === "DetailGroup" ? return <></> :

  return (
    <nav className="fixed inset-x-0 bottom-0 h-[6%] bg-white flex justify-around border-t-2 border-gray-500">
      {NAVIGATE_OBJ.map(({ action, content, Icon }, idx) => (
        <Link
          activityName={action}
          activityParams={{}}
          replace="true"
          animate={false}
          key={`bottom-${idx}`}
          className={classNames(
            `text-xs h-full text-center`,
            activity.name === action ? "opacity-100" : "opacity-30"
          )}
        >
          {React.cloneElement(Icon, {
            className: classNames(
              `justify-center items-center w-full h-3/6 mt-1`,
              activity.name === action ? "opacity-100" : "opacity-30"
            ),
          })}
          {content}
        </Link>
      ))}
    </nav>
  );
};

export default BottomNav;
