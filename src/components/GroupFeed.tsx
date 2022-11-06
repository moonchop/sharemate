import { HashTagColor } from "../utils/HashTagColor";
import HashTag from "./HashTag";
import { HiUserGroup } from "react-icons/hi";
import { useFlow } from "../stackflow";

interface IGroup {
  id: number;
  building: "광교관" | "일신관" | "화홍관" | "용지관" | "남제관" | "국제학사";
  room: number;
  hashtag: string[];
  text: string;
  people: string[];
}

const GroupFeed = () => {
  const groupData: IGroup[] = [
    {
      id: 1,
      building: "광교관",
      room: 4,
      hashtag: ["청결민감", "소음민감", "아침형생활습관"],
      text: "동갑내기 친구들과 편하고 즐겁게 지낼 수 있으면 dkajkl asdklf;l 좋겠어요.",
      people: ["20살", " 20살", " 28살"],
    },
    {
      id: 2,
      building: "일신관",
      room: 2,
      hashtag: ["청결ddddd민감", "소음민ddddd감", "아침형생ddddd활습관"],
      text: "그룹소개글입니다. 그룹소개글입니다. 그룹소개글입니다.그룹소개글이빈다.그래보낭아",
      people: ["20살", " 20살", " 28살"],
    },
    {
      id: 3,
      building: "국제학사",
      room: 2,
      hashtag: ["청결민감", "소음민감", "아침형생활습관"],
      text: "그룹소개글입니다. 그룹소개글입니다. 그룹소개글입니다. 그룹소개글입니다. 그룹소개글입니다. 그룹소개글입니다.",
      people: ["20살"],
    },
    {
      id: 4,
      building: "용지관",
      room: 2,
      hashtag: ["청결민감", "소음민감", "아침형생활습관"],
      text: "그룹소개글입니다. 그룹소개글입니다. 그룹소개글입니다. 그룹소개글입니다. 그룹소개글입니다. 그룹소개글입니다.",
      people: ["20살"],
    },
    {
      id: 5,
      building: "용지관",
      room: 2,
      hashtag: ["청결민감", "소음민감", "흡연 주의보"],
      text: "그룹소개글입니다. 그룹소개글입니다. 그룹소개글입니다. 그룹소개글입니다. 그룹소개글입니다. 그룹소개글입니다.",
      people: ["20살"],
    },
    {
      id: 6,
      building: "용지관",
      room: 4,
      hashtag: ["청결민감", "소음민감", "아침"],
      text: "그룹소개글입니다.",
      people: ["20살", " 20살", " 28살"],
    },
    {
      id: 7,
      building: "용지관",
      room: 4,
      hashtag: ["청결민감", "소음민감", "아침형생활습관"],
      text: "그룹소개글입니다. 그룹소개글입니다. 그룹소개글입니다. 그룹소개글입니다. 그룹소개글입니다. 그룹소개글입니다.",
      people: ["20살", " 20살", " 28살"],
    },
  ];

  const { push } = useFlow();

  return (
    <div className="h-[86%] overflow-y-scroll px-1 mt-2">
      {groupData.map((elem: IGroup) => (
        <div
          key={elem.id}
          className="h-auto mb-4"
          onClick={() => {
            push("DetailGroupActivity", elem);
          }}
        >
          <div className="flex justify-between mb-2 h-full">
            <div className="flex flex-row ml-1 mr-2">
              <div className="flex flex-col w-full">
                <p className="flex text-[20px] text-black mx-2">{`[ ${elem.building} ]`}</p>
                <span className="flex space-x-3 overflow-x-auto py-2 pl-[10px] w-full scrollbar-hide">
                  <HashTag
                    text={elem.hashtag}
                    color={HashTagColor as ("red" | "blue" | "green")[]}
                  />
                </span>
                <p className="mx-3 text-[12px] w-[92%] h-auto overflow-scroll whitespace-pre-line">
                  {elem.text}
                </p>
                <div className="flex space-x-4 mt-2 ml-3">
                  {/* <HiUserGroup className="flex h-5 w-5 -mr-2" /> */}
                  <p className="flex text-xs">
                    {`모집 현황 : ${elem.people.length}명 / ${elem.room}명 `}
                  </p>
                </div>
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
        className=" absolute bottom-12 right-2 self-center w-[80px] h-[30px] m-2 ring-2 ring-[#ab82e0] text-[#ab82e0] bg-white bg-opacity-60 font-extrabold text-sm borde rounded-md shadow-button"
      >
        그룹 생성
      </button>
    </div>
  );
};

export default GroupFeed;
