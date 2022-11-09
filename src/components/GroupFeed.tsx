import { HashTagColor } from "../utils/HashTagColor";
import HashTag from "./HashTag";
import { HiUserGroup } from "react-icons/hi";
import { useFlow } from "../stackflow";

interface IGroup {
  id: number;
  building: string;
  floor: number;
  hashtag: string[];
  groupIntro: string;
  mateIntro: string[];
  people: string[];
  room: number;
}

const GroupFeed = () => {
  const groupData: IGroup[] = [
    {
      id: 1,
      building: "광교관",
      floor: 4,
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
      id: 2,
      building: "광교관",
      floor: 1,
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
      floor: 3,
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
      floor: 11,
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
      floor: 2,
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
      floor: 3,
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
    <div className="h-[86%] overflow-y-scroll px-1 mt-2">
      {groupData.map((elem: IGroup) => (
        <div
          key={elem.id + elem.building}
          className="h-auto mb-2"
          onClick={() => {
            push("DetailGroupActivity", elem);
          }}
        >
          <div className="flex justify-between mb-2 h-full">
            <div className="flex flex-row pr-2">
              <div className="flex flex-col w-full">
                <div className="flex flex-row">
                  <span className="flex text-[22px] mt-1 font-semibold text-black mx-2">{`[ ${elem.building} ]`}</span>
                  <span className="pt-4 -ml-0.5 text-sm text-gray-700">
                    {elem.floor}층
                  </span>
                </div>
                <p className="mx-3 text-[15px] w-[95%] h-auto overflow-scroll whitespace-pre-line">
                  {elem.groupIntro}
                </p>

                <span className="ml-1 float-right flex space-x-3 overflow-x-auto p-2 w-full scrollbar-hide">
                  <HashTag
                    text={elem.hashtag}
                    color={HashTagColor as ("red" | "blue" | "green")[]}
                  />
                </span>
                <span className="text-xs text-right -mr-16 text-gray-500">
                  {`모집 현황 : ${elem.people.length}명 / ${elem.room}명 `}
                </span>
              </div>
            </div>
            {/* <div
              className="flex w-[40px] text-center justify-center items-center px-2 py-0.5 mx-2 rounded-lg text-xs font-medium bg-blue-100 text-blue-800"
              onClick={() => {
                push("DetailGroupActivity", elem);
              }}
            >
              attend
            </div> */}
          </div>
          <hr className="" />
        </div>
      ))}
      <button
        onClick={() => {
          push("CreateGroupActivity");
        }}
        className=" absolute bottom-16 right-2 self-center w-[80px] h-[30px] m-2 ring-2 ring-[#9d6ddd] text-[#9d6ddd] bg-white bg-opacity-60 font-extrabold text-sm borde rounded-md shadow-button"
      >
        그룹 생성
      </button>
    </div>
  );
};

export default GroupFeed;
