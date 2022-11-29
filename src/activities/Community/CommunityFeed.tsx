import { useFlow } from "../../stackflow";
import BoardListItem from "../../components/BoardListItem";
import { BsPencil } from "react-icons/bs";
import { useEffect, useState } from "react";
import { PostAllApi } from "../../utils/api/community";
import useInfinityQuery from "../../hooks/useInfinitypost";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { useActivity, useStack } from "@stackflow/react";

export interface IBoard {
  user_id: number;
  title: string;
  post_id: string;
  text: string;
  username: string;
  category?: string;
  created_at: string;
}
const CommunityFeed = () => {
  // history.pushState(null, "", location.href);
  // window.onpopstate = function () {
  //   history.go(1);
  // };
  const { push } = useFlow();
  const [data, setData] = useState<IBoard[] | null>(null);
  // const [feedData, setFeedData] = useState<any>(null);
  const fetchControl = useInfinityQuery("/posts");
  const feedData = fetchControl.result?.pages;
  let previous_Y = 0;
  let previous_Ratio = 0;

  const activity = useActivity();
  const stack = useStack();
  // useEffect(() => {
  //   console.log("현재 액티비티의 전환 상태:", activity.transitionState);
  //   setFeedData(fetchControl.result?.pages);
  // }, [stack]);
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
      fetchControl.nextFetch();
      previous_Y = current_Y;
      previous_Ratio = current_Ratio;
    }
  };

  const { setTarget } = useIntersectionObserver({ onIntersect });

  const handlerTarget = (index: number) => {
    if (index % 3 == 0 && index != 0) {
      return setTarget;
    }
  };

  return (
    <div className="h-[85%] p-5 overflow-y-scroll scrollbar-hide">
      {feedData?.map((elem2: []) =>
        elem2?.map((elem: IBoard, index: number) => (
          <div ref={handlerTarget(index)} key={elem.post_id}>
            <BoardListItem {...elem} key={elem.post_id} />
          </div>
        ))
      )}

      <button
        onClick={() => {
          push("CreateBoardActivity", {});
        }}
        className=" absolute bottom-16 right-2 self-center w-[45px] h-[45px] rounded-full m-2 ring-2 ring-[#9d6ddd] text-[#9d6ddd] bg-white ring-opacity-70 bg-opacity-70"
      >
        <div className="flex items-center justify-center">
          <BsPencil className="w-7 h-7 opacity-70" />
        </div>
      </button>
    </div>
  );
};

export default CommunityFeed;
