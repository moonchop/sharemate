import { useState } from "react";
import { HashTagColor } from "../utils/HashTagColor";
import HashTag from "./HashTag";
import { useFlow } from "../stackflow";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import useInfinityQuery from "../hooks/useInfinityQuery";

interface IUser {
  id: number;
  name: string;
  age: string;
  major: string;
  hashtag: string[];
  photo: string;
}

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
  const fetchControl = useInfinityQuery();

  const onIntersect: IntersectionObserverCallback = ([{ isIntersecting }]) => {
    console.log(`감지결과 : ${isIntersecting}`);
  };
  const { setTarget } = useIntersectionObserver({ onIntersect });
  const tempdata = fetchControl.result?.pages;

  const handlerRef = (id: number) => {
    if (id == 6) return setTarget;
  };

  return (
    <div className="h-[85%] overflow-y-scroll px-5 pt-3">
      {tempdata?.map((elem2: InData) =>
        elem2.data.map((elem: OutData) => (
          <div key={elem.id} ref={handlerRef(elem.id)} className="h-[20%]">
            {/* 원래 14%, 무한스크롤 체크를 위해 임시조치 */}
            <div className="flex my-2 justify-between">
              <div className="flex flex-row w-[85%]">
                <img
                  src={elem.avatar}
                  className="flex mr-2 h-[90%] w-[20%] m-1 rounded-full max-h-[80px] max-w-[80px]"
                />
                <div className="flex flex-col  w-[90%]">
                  <div className="flex mb-1 ">
                    <p className="max-w-[30%] mr-1 overflow-hidden text-ellipsis whitespace-nowrap">
                      {elem.email}
                    </p>
                    <p className="">24</p>
                    <p className="w-[50%] overflow-hidden text-ellipsis whitespace-nowrap mx-2">
                      {elem.last_name}
                    </p>
                  </div>
                  <div className="flex space-x-3 overflow-x-auto py-1 px-[2px] w-full">
                    <HashTag
                      text={["깔끔", "청결", "아침"]}
                      color={HashTagColor as ("red" | "blue" | "green")[]}
                    />
                  </div>
                </div>
              </div>
              {/* <button className="flex justify-center items-center w-11 h-16 focus:ring-2 rounded-md bg-slate-100 text-indigo-700 hover:bg-indigo-200 ">
              more
            </button> */}
              <div
                onClick={() => {
                  push("ProfileActivity", elem);
                }}
              >
                Detail
              </div>
            </div>
            <hr className="mt-3" />
          </div>
        ))
      )}
    </div>
  );
};

export default Feed;
