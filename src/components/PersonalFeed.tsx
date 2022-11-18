import { useState } from "react";
import { HashTagColor } from "../utils/HashTagColor";
import HashTag from "./HashTag";
import { useFlow } from "../stackflow";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import useInfinityQuery from "../hooks/useInfinityQuery";
import { IoIosArrowForward } from "react-icons/io";
//import { useActivityParams } from "@stackflow/react";

export interface IUser {
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
    hashtag: ["가나다라마바사아", "인간입니다", "남자아아아아아"],
    photo:
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 8,
    name: "a",
    age: "24",
    major: "국방디지털융합학과",
    hashtag: ["가나다라마바사아", "인간입니다", "남자아아아아아"],
    photo:
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 9,
    name: "b",
    age: "24",
    major: "국방디지털융합학과",
    hashtag: ["가나다라마바사아", "인간입니다", "남자아아아아아"],
    photo:
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 10,
    name: "c",
    age: "24",
    major: "국방디지털융합학과",
    hashtag: ["가나다라마바사아", "인간입니다", "남자아아아아아"],
    photo:
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 11,
    name: "d",
    age: "24",
    major: "국방디지털융합학과",
    hashtag: ["가나다라마바사아", "인간입니다", "남자아아아아아"],
    photo:
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

interface InData {
  page: number;
  per_page: number;
  total: number;
  total_page: number;
  data: OutData[];
  support: string[];
}

interface OutData {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

const Feed = () => {
  const { push } = useFlow();
  //const token: string = useActivityParams();
  const fetchControl = useInfinityQuery();

  const onIntersect: IntersectionObserverCallback = ([{ isIntersecting }]) => {
    console.log(`감지결과 : ${isIntersecting}`);
  };
  const { setTarget } = useIntersectionObserver({ onIntersect });
  const tempdata = fetchControl.result?.pages;

  const handlerRef = (id: number) => {
    if (id == 8) return setTarget;
  };

  return (
    <div className="h-[85%] overflow-y-scroll scrollbar-hide px-5 pt-3">
      {/* {tempdata?.map((elem2: InData) =>
        elem2.data.map((elem: OutData) => ( */}
      {dumyData.map((elem: IUser) => (
        <div className="h-[17%]" key={elem.id}>
          <div
            ref={handlerRef(elem.id)}
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
            {/* <button className="flex justify-center items-center w-11 h-16 focus:ring-2 rounded-md bg-slate-100 text-indigo-700 hover:bg-indigo-200 ">
              more
            </button> */}
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Feed;
