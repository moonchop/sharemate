import { HashTagColor } from "../utils/HashTagColor";
import HashTag from "./HashTag";

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
      text: "그룹소개글입니다. 그룹소개글입니다. 그룹소개글입니다. 그룹소개글입니다. 그룹소개글입니다. 그룹소개글입니다.",
      people: ["소프트웨어학과20세", "경영학과20세", "미디어학과 28세"],
    },
    {
      id: 2,
      building: "일신관",
      room: 2,
      hashtag: ["청결민감", "소음민감", "아침형생활습관"],
      text: "그룹소개글입니다. 그룹소개글입니다. 그룹소개글입니다. 그룹소개글입니다. 그룹소개글입니다. 그룹소개글입니다.",
      people: ["소프트웨어학과20세", "경영학과20세", "미디어학과 28세"],
    },
    {
      id: 3,
      building: "국제학사",
      room: 2,
      hashtag: ["청결민감", "소음민감", "아침형생활습관"],
      text: "그룹소개글입니다. 그룹소개글입니다. 그룹소개글입니다. 그룹소개글입니다. 그룹소개글입니다. 그룹소개글입니다.",
      people: ["소프트웨어학과20세", "경영학과20세", "미디어학과 28세"],
    },
    {
      id: 4,
      building: "용지관",
      room: 2,
      hashtag: ["청결민감", "소음민감", "아침형생활습관"],
      text: "그룹소개글입니다. 그룹소개글입니다. 그룹소개글입니다. 그룹소개글입니다. 그룹소개글입니다. 그룹소개글입니다.",
      people: ["소프트웨어학과20세", "경영학과20세", "미디어학과 28세"],
    },
  ];

  return (
    <div>
      {groupData.map((elem, index) => (
        <div key={elem.id} className="h-3/6 ">
          <div className="flex my-2 justify-between ">
            <div className="flex flex-col">
              <p className="flex text-black mx-2">{`[${elem.building} ${elem.room}인실]`}</p>
              <div className="flex space-x-3 px-3 py-2">
                {/* <p className="flex items-center justify-center bg-white rounded-2xl ring-2  ring-[rgb(219,156,218)] text-[rgb(219,156,218)] text-sm px-3 py-1 ">{`#${elem.hashtag}`}</p> */}
                {/* {hashtag.map((hashtag)=> (<p className="flex items-center justify-center bg-white rounded-2xl ring-2  ring-[rgb(219,156,218)] text-[rgb(219,156,218)] text-sm px-3 py-1 ">{`#${hashtag}`}</p>))} */}
                <HashTag
                  text={elem.hashtag}
                  color={HashTagColor as ("red" | "blue" | "green")[]}
                />
              </div>
              <p className="flex ml-3 mr-3 text-xs mt-0.5">{elem.text}</p>
              <div className="flex space-x-4 mt-2 ml-4">
                <img
                  src="https://s3-alpha-sig.figma.com/img/465a/bfe5/ae648339a0461dcd3fb418d4992fd276?Expires=1665360000&Signature=UdSNG9lFISSbS3UM0PmoIJdVVpxM3Hg4C123xdVLhggdNQBYYlUgzKkMeP-IlAIAUnqXYyK0sfZAodf82RXnKpWYXZB3-bMPOrrZdRanItAyp2iNby9ynmJ461gbHUx7ngYGYc~DPZHGrdtoN9VbYbtX6DEmdQXpSi6FctWhXwxE8Ja4nQNDR5rlxZpzu37p19Y831Twhui2sGU24nnJdMQmPRMkjfrbE994BaNpE6p5a0SsSgveyPJRd5gAcgsU2tEDynZOoOmB~E04iWHAlUalW9ERI7hOA27aZ1hH11TEnhoFzXrSNiiqhg7KBjZuyb4KVpQwWbKRTJg-2-UQKA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  className="flex h-5 w-5 -mr-2"
                />
                <p className="flex text-xs mt-0.5">{elem.people}</p>
                {/* {people.map((elem.person)=> (<p className="flex text-xs mt-0.5">{elem.person}</p>))} */}
              </div>
            </div>
          </div>
          <hr className="mt-1" />
        </div>
      ))}
    </div>
  );
};

export default GroupFeed;
