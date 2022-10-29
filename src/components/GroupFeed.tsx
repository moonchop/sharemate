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
      text: "그룹소개글입니다. 그룹소개글입니다. 그룹소개글입니다.",
      people: ["20살 /", " 20살 /", " 28살", " (3명)"],
    },
    {
      id: 2,
      building: "일신관",
      room: 2,
      hashtag: ["청결민감", "소음민감", "아침형생활습관"],
      text: "그룹소개글입니다. 그룹소개글입니다. 그룹소개글입니다.그룹소개글이빈다.그래보낭아",
      people: ["20살 /", " 20살 /", " 28살", " (3명)"],
    },
    {
      id: 3,
      building: "국제학사",
      room: 2,
      hashtag: ["청결민감", "소음민감", "아침형생활습관"],
      text: "그룹소개글입니다. 그룹소개글입니다. 그룹소개글입니다. 그룹소개글입니다. 그룹소개글입니다. 그룹소개글입니다.",
      people: ["20살 /", " 20살 /", " 28살", " (3명)"],
    },
    {
      id: 4,
      building: "용지관",
      room: 2,
      hashtag: ["청결민감", "소음민감", "아침형생활습관"],
      text: "그룹소개글입니다. 그룹소개글입니다. 그룹소개글입니다. 그룹소개글입니다. 그룹소개글입니다. 그룹소개글입니다.",
      people: ["20살 /", " 20살 /", " 28살", " (3명)"],
    },
    {
      id: 5,
      building: "용지관",
      room: 2,
      hashtag: ["청결민감", "소음민감", "아침형생활습관"],
      text: "그룹소개글입니다. 그룹소개글입니다. 그룹소개글입니다. 그룹소개글입니다. 그룹소개글입니다. 그룹소개글입니다.",
      people: ["20살 /", " 20살 /", " 28살", " (3명)"],
    },
    {
      id: 6,
      building: "용지관",
      room: 4,
      hashtag: ["청결민감", "소음민감", "아침형생활습관"],
      text: "그룹소개글입니다.",
      people: ["20살 /", " 20살 /", " 28살", " (3명)"],
    },
    {
      id: 7,
      building: "용지관",
      room: 4,
      hashtag: ["청결민감", "소음민감", "아침형생활습관"],
      text: "그룹소개글입니다. 그룹소개글입니다. 그룹소개글입니다. 그룹소개글입니다. 그룹소개글입니다. 그룹소개글입니다.",
      people: ["20살 /", " 20살 /", " 28살", " (3명)"],
    },
  ];

  const { push } = useFlow();

  return (
    <div className="h-[86%] overflow-y-scroll px-1 mt-2">
      {groupData.map((elem: IGroup) => (
        <div key={elem.id} className="h-[21%] mb-4">
          <div className="flex justify-between mb-2 h-full">
            <div className="flex flex-row ml-1 mr-2">
              <div className="flex flex-col w-[90%] h-auto">
                <p className="flex text-black mx-2">{`[${elem.building} ${elem.room}인실]`}</p>
                <span className="flex space-x-3 px-3 py-2">
                  {/* <p className="flex items-center justify-center bg-white rounded-2xl ring-2  ring-[rgb(219,156,218)] text-[rgb(219,156,218)] text-sm px-3 py-1 ">{`#${elem.hashtag}`}</p> */}
                  {/* {hashtag.map((hashtag)=> (<p className="flex items-center justify-center bg-white rounded-2xl ring-2  ring-[rgb(219,156,218)] text-[rgb(219,156,218)] text-sm px-3 py-1 ">{`#${hashtag}`}</p>))} */}
                  <HashTag
                    text={elem.hashtag}
                    color={HashTagColor as ("red" | "blue" | "green")[]}
                  />
                </span>
                <p className="ml-3 mr-3 text-xs mt-0.5 w-[90%] h-[30px] overflow-hidden whitespace-pre-line	">
                  {elem.text}
                </p>
                <div className="flex space-x-4 mt-2 ml-4">
                  <HiUserGroup className="flex h-5 w-5 -mr-2" />
                  <p className="flex text-xs mt-0.5">{elem.people}</p>
                  {/* {people.map((elem.person)=> (<p className="flex text-xs mt-0.5">{elem.person}</p>))} */}
                </div>
              </div>
            </div>
            <div
              className="flex text-center justify-center items-center px-2 py-0.5 mx-2 rounded-lg text-xs font-medium bg-blue-100 text-blue-800"
              onClick={() => {
                push("DetailGroupActivity", elem);
              }}
            >
              attend
            </div>
          </div>
          <hr className="" />
        </div>
      ))}
    </div>
  );
};

export default GroupFeed;
