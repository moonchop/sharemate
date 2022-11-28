import { HashTagColor } from "../../utils/HashTagColor";
import HashTag from "../../components/HashTag";
import { HiUserGroup } from "react-icons/hi";
import { useFlow } from "../../stackflow";
import { IoIosArrowForward } from "react-icons/io";
import { BiBuildingHouse } from "react-icons/bi";
import { useEffect, useState } from "react";

import { BsPencil } from "react-icons/bs";
import useInfinitygroup from "../../hooks/useInfinitygroup";
import useIntersectionObserver from "../../hooks/userIntersectionObserverGroup";

export interface IGroup {
  group_id: number;
  created_at?: number;
  curNum: number;
  maxNum: number;
  hashtags: string[];
  building: string;
  title: string;
  user_id: number;
}
const ICON_OBJ = ["text-indigo-400", "text-purple-400", "text-pink-300"];
const GroupFeed = () => {
  // history.pushState(null, "", location.href);
  // window.onpopstate = function () {
  //   history.go(1);
  // };

  //const [groupData, setGroupData] = useState<any>(null);
  const { push, replace } = useFlow();

  const fetchControl = useInfinitygroup("/groups");
  const feedData = fetchControl.result?.pages;
  //console.log(fetchControl.result);

  let previous_Y = 0;
  let previous_Ratio = 0;

  const onIntersect: IntersectionObserverCallback = ([
    { isIntersecting, boundingClientRect, intersectionRatio },
  ]) => {
    const current_Y = boundingClientRect.y;
    const current_Ratio = intersectionRatio;
    if (
      isIntersecting &&
      current_Ratio > previous_Ratio &&
      current_Y > previous_Y
    ) {
      //console.log("감지");
      fetchControl.nextFetch();
      previous_Y = current_Y;
      previous_Ratio = current_Ratio;
    }
  };

  const { setTarget } = useIntersectionObserver({ onIntersect });

  const handlerTarget = (index: number) => {
    if (index % 6 == 0 && index != 0) {
      return setTarget;
    }
  };

  return (
    <div className="h-[86%] overflow-y-scroll px-1 mt-2 scrollbar-hide">
      {feedData?.map((elem2: []) =>
        elem2.map((elem: IGroup, index: number) => (
          <div
            key={index}
            ref={handlerTarget(index)}
            className=""
            onClick={() => {
              push("DetailGroupActivity", { num: elem.group_id });
            }}
          >
            <div className="flex justify-between h-full">
              <div className="flex flex-col w-full p-3 ">
                <div className="flex items-center mb-1">
                  <BiBuildingHouse
                    className={`w-6 h-6 mr-1 ${ICON_OBJ[index % 3]}`}
                  />
                  <p className="text-[20px] font-semibold text-black">
                    {elem.building}
                  </p>
                </div>
                <p className=" text-[15px] mb-1 h-auto overflow-scroll whitespace-pre-line">
                  {elem.title}
                </p>

                <div className="overflow-x-auto py-2 pl-1 w-full scrollbar-hide">
                  <HashTag
                    text={elem.hashtags}
                    color={HashTagColor as ("red" | "blue" | "green")[]}
                  />
                </div>
                <span className="flex justify-start text-xs text-right pl-1 mt-1 text-gray-500">
                  {`모집 현황 : ${elem.curNum}명 / ${elem.maxNum}명 `}
                </span>
              </div>

              {/* <IoIosArrowForward className="flex w-[40px] h-full items-center opacity-30 pt-[10%] pr-[2%] bg-neutral-600" /> */}
              <div className="flex items-center">
                <IoIosArrowForward className=" w-[40px] h-[30px] opacity-30 " />
              </div>
            </div>
            <hr className="mt-1" />
          </div>
        ))
      )}
      <button
        onClick={() => {
          push("CreateGroupActivity", {});
        }}
        className=" absolute bottom-16 right-2 self-center w-[45px] h-[45px] rounded-full m-2 ring-2 ring-[#9d6ddd] text-[#9d6ddd] bg-white ring-opacity-70 bg-opacity-70 "
      >
        <div className="flex items-center justify-center">
          <BsPencil className="w-7 h-7 opacity-70" />
        </div>
      </button>
    </div>
  );
};

export default GroupFeed;
