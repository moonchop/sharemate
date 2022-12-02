import { useEffect } from "react";
import { HashTagColor } from "../../utils/HashTagColor";
import HashTag from "../../components/HashTag";
import { useFlow } from "../../stackflow";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import useInfinityQuery from "../../hooks/useInfinityQuery";
import { IoIosArrowForward } from "react-icons/io";
import { useAuth } from "../../stores/auth";
import { Skeleton } from "../../components/Skeleton";
import DefaultProfile from "../../assets/DefaultProfile.png";

interface IUser {
  userID: number;
  name: string;
  major: string;
  age: number;
  gender: boolean;
  profile_photo: string;
  hashtags: string[];
}

const Feed = () => {
  const { push } = useFlow();
  const { accessToken } = useAuth();
  const fetchControl = useInfinityQuery("user/list");
  const feedData = fetchControl.result?.pages;
  let previous_Y = 0;
  let previous_Ratio = 0;

  // useEffect(() => {
  //   if (accessToken) {
  //     history.pushState(null, "", location.href);
  //   }
  // }, []);

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

  useEffect(() => {
    if (fetchControl.result?.pages[feedData.length - 1] !== 8) {
      fetchControl.reFetch();
    }
  }, [feedData]);

  const { setTarget } = useIntersectionObserver({ onIntersect });

  const handlerTarget = (index: number) => {
    if (index % 7 == 0 && index != 0) {
      return setTarget;
    }
  };

  return (
    <>
      {feedData ? (
        <div className="h-[85%] overflow-y-scroll scrollbar-hide px-5 pt-3">
          {feedData?.map((elem2: []) =>
            elem2.map((elem: IUser, index: number) => (
              <div className="h-[17%]" key={elem.userID}>
                <div
                  ref={handlerTarget(index)}
                  className="h-[100%] flex justify-between items-center"
                  onClick={() => {
                    push("ProfileActivity", { id: elem.userID });
                  }}
                >
                  <div className="flex flex-row h-[100%] w-[100%] items-center">
                    <div className="flex w-[20%] items-center">
                      <img
                        src={DefaultProfile}
                        className="mr-2 w-[58px] h-[58px] rounded-xl object-fill"
                      />
                    </div>
                    <div className="flex flex-col ml-2 w-[70%]">
                      <div className="flex mb-1 w-full">
                        <p className="max-w-[78px] mr-1 overflow-hidden text-ellipsis whitespace-nowrap">
                          {elem.name}
                        </p>
                        <p className="">{elem.age}</p>
                        <p className="w-[50%] overflow-hidden text-ellipsis whitespace-nowrap mx-2">
                          {/* 9글자가 최대 */}
                          {elem.major}
                        </p>
                      </div>
                      <div className="flex space-x-3 overflow-x-auto py-1 px-[2px] w-full scrollbar-hide">
                        <HashTag
                          text={elem.hashtags}
                          color={HashTagColor as ("red" | "blue" | "green")[]}
                        />
                      </div>
                    </div>
                    <IoIosArrowForward className="flex w-[10%] h-full items-center opacity-30"></IoIosArrowForward>
                  </div>
                </div>
                <hr />
              </div>
            ))
          )}
        </div>
      ) : (
        <Skeleton />
      )}
    </>
  );
};

export default Feed;
