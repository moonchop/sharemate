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
    <div className="h-[85%] overflow-y-scroll scrollbar-hide px-5 pt-3">
      {tempdata?.map((elem2: InData) =>
        elem2.data.map((elem: OutData) => (
          <>
            <div
              key={elem.id}
              ref={handlerRef(elem.id)}
              className="h-[17%] flex justify-between items-center "
              onClick={() => {
                push("ProfileActivity", elem);
              }}
            >
              <div className="flex flex-row h-[100%] w-[100%] items-center">
                <div className="flex w-[20%] items-center">
                  <img
                    src={elem.avatar}
                    className="mr-2 w-[58px] h-[58px] rounded-xl object-fill"
                  />
                </div>
                <div className="flex flex-col ml-2 w-[80%]">
                  <div className="flex mb-1 w-full">
                    <p className="max-w-[78px] mr-1 overflow-hidden text-ellipsis whitespace-nowrap">
                      {elem.email}
                    </p>
                    <p className="">24</p>
                    <p className="w-[50%] overflow-hidden text-ellipsis whitespace-nowrap mx-2">
                      {" "}
                      {/* 9글자가 최대 */}
                      국방디지털융합학과
                    </p>
                  </div>
                  <div className="flex space-x-3 overflow-x-auto py-1 px-[2px] w-full scrollbar-hide">
                    <HashTag
                      text={["깔끔쟁이", "청결쟁이", "아침쟁이"]}
                      color={HashTagColor as ("red" | "blue" | "green")[]}
                    />
                  </div>
                </div>
              </div>
              {/* <button className="flex justify-center items-center w-11 h-16 focus:ring-2 rounded-md bg-slate-100 text-indigo-700 hover:bg-indigo-200 ">
              more
            </button> */}
            </div>
            <hr />
          </>
        ))
      )}
    </div>
  );
};

export default Feed;
