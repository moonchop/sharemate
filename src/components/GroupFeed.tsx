import { HashTagColor } from "../utils/HashTagColor";
import HashTag from "./HashTag";
import { HiUserGroup } from "react-icons/hi";
import { useFlow } from "../stackflow";
import { IoIosArrowForward } from "react-icons/io";
import { BiBuildingHouse } from "react-icons/bi";
interface IGroup {
  groupID: number;
  building: string;
  hashtags: string[];
  text: string;
  wishLists: string[];
  maxNum: number;
  curNum: number;
  userID: number;
  kakaoLink: string;
}
const ICON_OBJ = ["text-indigo-400", "text-purple-400", "text-pink-300"];
const GroupFeed = () => {
  const groupData: IGroup[] = [
    {
      groupID: 1,
      building: "광교관",
      hashtags: [
        "아침형생활습관아침형생활습관",
        "아침형생활습관",
        "아침형생활습관",
      ],
      text: "동갑내기 친구들과 편하고 즐겁게 지내고 싶어요야야아아아아아.",
      wishLists: [
        "22살이었으면 좋겠어요.",
        "비흡연자였으면 좋겠어요.",
        "코를 안 골았으면 좋겠어요",
        "친하게 지내고 싶어요.",
        "방을 깨끗이 쓰면 좋겠어요.",
      ],
      maxNum: 4,
      userID: 1,
      kakaoLink: "sdfsdf",
      curNum: 2,
    },
    {
      groupID: 2,
      building: "광교관",
      hashtags: ["청결민감", "소음민감", "아침형생활습관"],
      text: "동갑내기 친구들과 편하고 즐겁게 지내고 싶어요.",
      wishLists: [
        "22살이었으면 좋겠어요.",
        "비흡연자였으면 좋겠어요.",
        "코를 안 골았으면 좋겠어요",
        "친하게 지내고 싶어요.",
        "방을 깨끗이 쓰면 좋겠어요.",
      ],
      maxNum: 4,
      userID: 1,
      kakaoLink: "sdfsdf",
      curNum: 2,
    },
    {
      groupID: 3,
      building: "광교관",
      hashtags: ["청결민감", "소음민감", "아침형생활습관"],
      text: "동갑내기 친구들과 편하고 즐겁게 지내고 싶어요.",
      wishLists: [
        "22살이었으면 좋겠어요.",
        "비흡연자였으면 좋겠어요.",
        "코를 안 골았으면 좋겠어요",
        "친하게 지내고 싶어요.",
        "방을 깨끗이 쓰면 좋겠어요.",
      ],
      maxNum: 4,
      userID: 1,
      kakaoLink: "sdfsdf",
      curNum: 2,
    },
    {
      groupID: 4,
      building: "일신관",
      hashtags: ["청결민감", "소음민감", "아침형생활습관"],
      text: "동갑내기 친구들과 편하고 즐겁게 지내고 싶어요.",
      wishLists: [
        "22살이었으면 좋겠어요.",
        "비흡연자였으면 좋겠어요.",
        "코를 안 골았으면 좋겠어요",
        "친하게 지내고 싶어요.",
        "방을 깨끗이 쓰면 좋겠어요.",
      ],
      maxNum: 4,
      userID: 1,
      kakaoLink: "sdfsdf",
      curNum: 2,
    },
    {
      groupID: 5,
      building: "광교관",
      hashtags: ["청결민감", "소음민감", "아침형생활습관"],
      text: "동갑내기 친구들과 편하고 즐겁게 지내고 싶어요.",
      wishLists: [
        "22살이었으면 좋겠어요.",
        "비흡연자였으면 좋겠어요.",
        "코를 안 골았으면 좋겠어요",
        "친하게 지내고 싶어요.",
        "방을 깨끗이 쓰면 좋겠어요.",
      ],
      maxNum: 4,
      userID: 1,
      kakaoLink: "sdfsdf",
      curNum: 2,
    },
    {
      groupID: 6,
      building: "광교관",
      hashtags: ["청결민감", "소음민감", "아침형생활습관"],
      text: "동갑내기 친구들과 편하고 즐겁게 지내고 싶어요.",
      wishLists: [
        "22살이었으면 좋겠어요.",
        "비흡연자였으면 좋겠어요.",
        "코를 안 골았으면 좋겠어요",
        "친하게 지내고 싶어요.",
        "방을 깨끗이 쓰면 좋겠어요.",
      ],
      maxNum: 4,
      userID: 1,
      kakaoLink: "sdfsdf",
      curNum: 2,
    },
  ];

  const { push } = useFlow();

  return (
    <div className="h-[86%] overflow-y-scroll px-1 mt-2 scrollbar-hgroupIDe">
      {groupData.map((elem: IGroup, index: number) => (
        <div
          key={elem.groupID + elem.building}
          className=""
          onClick={() => {
            push("DetailGroupActivity", elem);
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
                {elem.text}
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
      ))}
      <button
        onClick={() => {
          push("CreateGroupActivity", {});
        }}
        className=" absolute bottom-16 right-2 self-center w-[80px] h-[30px] m-2 ring-2 ring-[#9d6ddd] text-[#9d6ddd] bg-white bg-opacity-60 font-extrabold text-sm  rounded-md shadow-button"
      >
        그룹 생성
      </button>
    </div>
  );
};

export default GroupFeed;
