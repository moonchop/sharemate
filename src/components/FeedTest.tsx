import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import { useVirtualizer } from "@tanstack/react-virtual";
import TopNav from "./TopNav";
import BottomNav from "./BottomNav";

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
    id: 4,
    name: "문민수",
    age: "24",
    major: "소프트웨어학과",
    hashtag: ["#3학년", "선배", "101호"],
    photo:
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
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
    id: 4,
    name: "문민수",
    age: "24",
    major: "소프트웨어학과",
    hashtag: ["#3학년", "선배", "101호"],
    photo:
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
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
    id: 4,
    name: "문민수",
    age: "24",
    major: "소프트웨어학과",
    hashtag: ["#3학년", "선배", "101호"],
    photo:
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
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
    id: 4,
    name: "문민수",
    age: "24",
    major: "소프트웨어학과",
    hashtag: ["#3학년", "선배", "101호"],
    photo:
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
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
    id: 4,
    name: "문민수",
    age: "24",
    major: "소프트웨어학과",
    hashtag: ["#3학년", "선배", "101호"],
    photo:
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
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
    id: 4,
    name: "문민수",
    age: "24",
    major: "소프트웨어학과",
    hashtag: ["#3학년", "선배", "101호"],
    photo:
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
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
    id: 4,
    name: "문민수",
    age: "24",
    major: "소프트웨어학과",
    hashtag: ["#3학년", "선배", "101호"],
    photo:
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

const FeedTest = () => {
  const [temp, setTemp] = useState("");
  return (
    <div>
      <TopNav />
      <RowVirtualizerFixed />
      <BottomNav />
    </div>
  );
};

function RowVirtualizerFixed() {
  const parentRef = React.useRef();

  const rowVirtualizer = useVirtualizer({
    count: 10,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 5,
    overscan: 5,
  });

  return (
    <>
      {dumyData.map((v) => (
        <div key={v.id}>
          <div className="flex my-2 justify-between ">
            <div className="flex flex-row">
              <img
                src={v.photo}
                className="flex mr-2 h-14 w-14 m-1 rounded-full"
              />
              <div className="flex flex-col  w-56 h-12">
                <div className="flex mb-1">
                  <p className="">{v.name}</p>
                  <p className="">{v.age}</p>
                  <p className="mx-2">{v.major}</p>
                </div>
                <div className="flex space-x-3">
                  <p className="flex items-center justify-center bg-white rounded-2xl ring-2  ring-[rgb(219,156,218)] text-[rgb(219,156,218)] text-sm px-2 py-1 ">
                    {v.hashtag[0]}
                  </p>
                  <p className="flex items-center justify-center bg-white rounded-2xl ring-2 ring-[rgb(175,173,245)] text-[rgb(175,173,245)] text-sm px-2 py-1">
                    {v.hashtag[1]}
                  </p>
                  <p className="flex items-center justify-center bg-white rounded-2xl ring-2  ring-[rgb(186,152,229)] text-[rgb(186,152,229)] text-sm px-2 py-1">
                    {v.hashtag[2]}
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
    </>
  );
}

export default FeedTest;
