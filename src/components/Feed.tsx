import React, { useEffect, useMemo } from "react";

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
    name: "장은학",
    age: "24",
    major: "소프트웨어학과",
    hashtag: ["#3학년", "운동", "비염"],
    photo:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 2,
    name: "정희수",
    age: "24",
    major: "소프트웨어학과",
    hashtag: ["#3학년", "여자", "개발자"],
    photo:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 3,
    name: "김지훈",
    age: "24",
    major: "소프트웨어학과",
    hashtag: ["#3학년", "흑인", "잘생김"],
    photo:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
  },
  {
    id: 4,
    name: "문민수",
    age: "24",
    major: "소프트웨어학과",
    hashtag: ["#3학년", "선배", "101호"],
    photo:
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 5,
    name: "강민혁",
    age: "24",
    major: "국방디지털융합학과",
    hashtag: ["#음주운전", "#면허취소", "201호"],
    photo:
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

const Feed = () => {
  return (
    <div className="h-3/6 flex-col my-3 mx-6">
      {dumyData.map((elem, index) => (
        <div key={index}>
          <div className="flex my-2 justify-between ">
            <div className="flex flex-row">
              <img
                src={elem.photo}
                className="flex mr-2 h-14 w-14 m-1 rounded-full"
              />
              <div className="flex flex-col  w-56 h-16">
                <div className="flex mb-1 ">
                  <p className="max-w-[70px] mr-1 overflow-hidden text-ellipsis whitespace-nowrap">
                    {elem.name}
                  </p>
                  <p className="">{elem.age}</p>
                  <p className="w-[120px] overflow-hidden text-ellipsis whitespace-nowrap mx-2">
                    {elem.major}
                  </p>
                </div>
                <div className="flex space-x-3 ml-0.5">
                  <p className="flex items-center justify-center bg-white rounded-2xl ring-2  ring-[rgb(219,156,218)] text-[rgb(219,156,218)] text-sm px-2 py-1 ">
                    {elem.hashtag[0]}
                  </p>
                  <p className="flex items-center justify-center bg-white rounded-2xl ring-2 ring-[rgb(175,173,245)] text-[rgb(175,173,245)] text-sm px-2 py-1">
                    {elem.hashtag[1]}
                  </p>
                  <p className="flex items-center justify-center bg-white rounded-2xl ring-2  ring-[rgb(186,152,229)] text-[rgb(186,152,229)] text-sm px-2 py-1">
                    {elem.hashtag[2]}
                  </p>
                </div>
              </div>
            </div>
            <button className="flex justify-center items-center w-11 h-16 focus:ring-2 rounded-md bg-slate-100 text-indigo-700 hover:bg-indigo-200 ">
              more
            </button>
          </div>
          <hr className="mt-3" />
        </div>
      ))}
    </div>
  );
};

export default Feed;
