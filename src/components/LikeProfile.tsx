import React from "react";
import { useFlow } from "../stackflow";
import { IUser } from "./PersonalFeed";
import { HashTagColor } from "../utils/HashTagColor";
import HashTag from "./HashTag";
import { IoIosArrowForward } from "react-icons/io";

const dumyData: IUser[] = [
  {
    id: 1,
    name: "이수인",
    age: "23",
    major: "행정학과",
    hashtag: ["팀장", "대장", "카리스마"],
    photo:
      "https://user-images.githubusercontent.com/86648265/193459223-b395926e-98d0-4a2a-8787-9ec47fd5d7c6.png",
  },
  {
    id: 2,
    name: "이현조",
    age: "22",
    major: "경영학과",
    hashtag: ["브레이커", "최강", "디자이너"],
    photo:
      "https://user-images.githubusercontent.com/86648265/193459183-cc7fea86-851d-492a-b537-70975de31643.png",
  },
  {
    id: 3,
    name: "장은학",
    age: "24",
    major: "소프트웨어학과",
    hashtag: ["3학년", "운동", "비염"],
    photo:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

const LikeProfile = () => {
  const { push } = useFlow();

  return (
    <>
      <div className="h-[85%] flex flex-col pro:pt-[30px] pt-[20px] mx-[20px] ">
        <div className="pro:text-3xl text-2xl font-bold pro:mb-[25px] mb-[20px] ">
          좋아요 누른 프로필
        </div>
        {dumyData.map((elem: IUser) => (
          <div className="h-[17%]" key={elem.id}>
            <div
              className="h-[100%] flex justify-between items-center"
              onClick={() => {
                push("ProfileActivity", {});
              }}
            >
              <div className="flex flex-row h-[100%] w-[100%] items-center">
                <div className="flex w-[20%] items-center">
                  <img
                    src={elem.photo}
                    className="mr-2 w-[58px] h-[58px] rounded-xl object-fill"
                  />
                </div>
                <div className="flex flex-col ml-2 w-[70%]">
                  <div className="flex mb-1 w-full">
                    <p className="max-w-[78px] mr-1 overflow-hidden text-ellipsis whitespace-nowrap">
                      {elem.name}
                    </p>
                    <p className="">24</p>
                    <p className="w-[50%] overflow-hidden text-ellipsis whitespace-nowrap mx-2">
                      {/* 9글자가 최대 */}
                      {elem.major}
                    </p>
                  </div>
                  <div className="flex space-x-3 overflow-x-auto py-1 px-[2px] w-full scrollbar-hide">
                    <HashTag
                      text={elem.hashtag}
                      color={HashTagColor as ("red" | "blue" | "green")[]}
                    />
                  </div>
                </div>
                <IoIosArrowForward className="flex w-[10%] h-full items-center opacity-30"></IoIosArrowForward>
              </div>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </>
  );
};

export default LikeProfile;
