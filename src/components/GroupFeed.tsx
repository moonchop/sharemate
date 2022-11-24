import { HashTagColor } from "../utils/HashTagColor";
import HashTag from "./HashTag";
import { HiUserGroup } from "react-icons/hi";
import { useFlow } from "../stackflow";
import { IoIosArrowForward } from "react-icons/io";
import { BiBuildingHouse } from "react-icons/bi";
interface IGroup {
  id: number;
  building: string;
  hashtag: string[];
  groupIntro: string;
  mateIntro: string[];
  people: string[];
  room: number;
}
const ICON_OBJ = ["text-indigo-400", "text-purple-400", "text-pink-300"];
const GroupFeed = () => {
  const groupData: IGroup[] = [
    {
      id: 1,
      building: "광교관",
      hashtag: [
        "아침형생활습관아침형생활습관",
        "아침형생활습관",
        "아침형생활습관",
      ],
      groupIntro:
        "동갑내기 친구들과 편하고 즐겁게 지내고 싶어요야야아아아아아.",
      mateIntro: [
        "22살이었으면 좋겠어요.",
        "비흡연자였으면 좋겠어요.",
        "코를 안 골았으면 좋겠어요",
        "친하게 지내고 싶어요.",
        "방을 깨끗이 쓰면 좋겠어요.",
      ],
      people: ["정희수"],
      room: 4,
    },
    {
      id: 2,
      building: "광교관",
      hashtag: ["청결민감", "소음민감", "아침형생활습관"],
      groupIntro: "동갑내기 친구들과 편하고 즐겁게 지내고 싶어요.",
      mateIntro: [
        "22살이었으면 좋겠어요.",
        "비흡연자였으면 좋겠어요.",
        "코를 안 골았으면 좋겠어요",
        "친하게 지내고 싶어요.",
        "방을 깨끗이 쓰면 좋겠어요.",
      ],
      people: ["정희수"],
      room: 4,
    },
    {
      id: 3,
      building: "광교관",
      hashtag: ["청결민감", "소음민감", "아침형생활습관"],
      groupIntro: "동갑내기 친구들과 편하고 즐겁게 지내고 싶어요.",
      mateIntro: [
        "22살이었으면 좋겠어요.",
        "비흡연자였으면 좋겠어요.",
        "코를 안 골았으면 좋겠어요",
        "친하게 지내고 싶어요.",
        "방을 깨끗이 쓰면 좋겠어요.",
      ],
      people: ["정희수", "정희수", "정희수"],
      room: 4,
    },
    {
      id: 4,
      building: "일신관",
      hashtag: ["청결민감", "소음민감", "아침형생활습관"],
      groupIntro: "동갑내기 친구들과 편하고 즐겁게 지내고 싶어요.",
      mateIntro: [
        "22살이었으면 좋겠어요.",
        "비흡연자였으면 좋겠어요.",
        "코를 안 골았으면 좋겠어요",
        "친하게 지내고 싶어요.",
        "방을 깨끗이 쓰면 좋겠어요.",
      ],
      people: ["정희수", "정희수", "정희수"],
      room: 4,
    },
    {
      id: 5,
      building: "광교관",
      hashtag: ["청결민감", "소음민감", "아침형생활습관"],
      groupIntro: "동갑내기 친구들과 편하고 즐겁게 지내고 싶어요.",
      mateIntro: [
        "22살이었으면 좋겠어요.",
        "비흡연자였으면 좋겠어요.",
        "코를 안 골았으면 좋겠어요",
        "친하게 지내고 싶어요.",
        "방을 깨끗이 쓰면 좋겠어요.",
      ],
      people: ["정희수"],
      room: 4,
    },
    {
      id: 6,
      building: "광교관",
      hashtag: ["청결민감", "소음민감", "아침형생활습관"],
      groupIntro: "동갑내기 친구들과 편하고 즐겁게 지내고 싶어요.",
      mateIntro: [
        "22살이었으면 좋겠어요.",
        "비흡연자였으면 좋겠어요.",
        "코를 안 골았으면 좋겠어요",
        "친하게 지내고 싶어요.",
        "방을 깨끗이 쓰면 좋겠어요.",
      ],
      people: ["정희수", "정희수"],
      room: 4,
    },
  ];

  const { push } = useFlow();

  return (
    <div className="h-[86%] overflow-y-scroll px-1 mt-2 scrollbar-hide">
      {groupData.map((elem: IGroup, index: number) => (
        <div
          key={elem.id + elem.building}
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
                {elem.groupIntro}
              </p>

              <div className="overflow-x-auto py-2 pl-1 w-full scrollbar-hide">
                <HashTag
                  text={elem.hashtag}
                  color={HashTagColor as ("red" | "blue" | "green")[]}
                />
              </div>
              <span className="flex justify-start text-xs text-right pl-1 mt-1 text-gray-500">
                {`모집 현황 : ${elem.people.length}명 / ${elem.room}명 `}
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
          push("CreateGroupActivity");
        }}
        className=" absolute bottom-16 right-2 self-center w-[80px] h-[30px] m-2 ring-2 ring-[#9d6ddd] text-[#9d6ddd] bg-white bg-opacity-60 font-extrabold text-sm  rounded-md shadow-button"
      >
        그룹 생성
      </button>
    </div>
  );
};

export default GroupFeed;
