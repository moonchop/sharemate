import React, { useEffect, useMemo } from "react";
import HashTag from "./HashTag";

interface IUser {
  id: number;
  name: string;
  age: string;
  major: string;
  hashtag: string[];
  photo: string;
}

const dumyData: IUser[] = [
  {
    id: 1,
    name: "이수인",
    age: "23",
    major: "행정학과",
    hashtag: ["팀장", "대장카리스마", "서비스기획"],
    photo:
      "https://user-images.githubusercontent.com/86648265/193459223-b395926e-98d0-4a2a-8787-9ec47fd5d7c6.png",
  },
  {
    id: 2,
    name: "이현조",
    age: "22",
    major: "경영학과",
    hashtag: ["빠른족보브레이커", "최강디자이너", "서비스기획"],
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
  {
    id: 4,
    name: "정희수",
    age: "24",
    major: "소프트웨어학과",
    hashtag: ["3학년", "여자", "개발자"],
    photo:
      "https://user-images.githubusercontent.com/86648265/193457444-107066f9-2d74-4625-a26c-f80e541c6458.png",
  },
  {
    id: 5,
    name: "김지훈",
    age: "24",
    major: "소프트웨어학과",
    hashtag: ["3학년", "흑인", "잘생김"],
    photo:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
  },
  {
    id: 6,
    name: "문민수",
    age: "24",
    major: "소프트웨어학과",
    hashtag: ["3학년", "선배", "101호"],
    photo:
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 7,
    name: "강민혁",
    age: "24",
    major: "국방디지털융합학과",
    hashtag: ["음주운전", "면허취소", "201호"],
    photo:
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },

];

const Feed = () => {
  return (
    <div className="h-3/6 flex-col my-3 mx-6">
      {dumyData.map((elem) => (
        <div key={elem.id}>
          <div className="flex my-2 justify-between ">
            <div className="flex flex-row">
              <img
                src={elem.photo}
                className="flex mr-2 h-14 w-14 m-1 rounded-full"
              />
              <div className="flex flex-col  w-4/5 h-16">
                <div className="flex mb-1 ">
                  <p className="max-w-[70px] mr-1 overflow-hidden text-ellipsis whitespace-nowrap">
                    {elem.name}
                  </p>
                  <p className="">{elem.age}</p>
                  <p className="w-[120px] overflow-hidden text-ellipsis whitespace-nowrap mx-2">
                    {elem.major}
                  </p>
                </div>
                <div className="flex space-x-3 ml-0.5 overflow-x-auto py-1 px-[2px] w-full">
                  
                  <HashTag text={elem.hashtag} />
                </div>
              </div>
            </div>
            {/* <button className="flex justify-center items-center w-11 h-16 focus:ring-2 rounded-md bg-slate-100 text-indigo-700 hover:bg-indigo-200 ">
              more
            </button> */}
          </div>
          <hr className="mt-3" />
        </div>
      ))}
    </div>
  );
};

export default Feed;
