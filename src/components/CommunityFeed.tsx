import { useFlow } from "../stackflow";
import BoardListItem from "./BoardListItem";

export interface IBoard {
  id: number;
  username: string;
  title: string;
  preview?: string;
  text: string;
}

const boardData: IBoard[] = [
  {
    id: 1,
    username: "정희수",
    title: "제목입니다.",
    preview: "미리보기 글입니다.",
    text: "내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.",
  },
  {
    id: 2,
    username: "정희수",
    title: "제목입니다.",
    preview: "미리보기 글입니다.",
    text: "내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.",
  },
  {
    id: 3,
    username: "정희수",
    title: "제목입니다.",
    preview: "미리보기 글입니다.",
    text: "내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.",
  },
  {
    id: 4,
    username: "정희수",
    title: "제목입니다.",
    preview: "미리보기 글입니다.",
    text: "내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.",
  },
  {
    id: 5,
    username: "정희수",
    title: "제목입니다.",
    preview: "미리보기 글입니다.",
    text: "내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.",
  },
  {
    id: 6,
    username: "정희수",
    title: "제목입니다.",
    preview: "미리보기 글입니다.",
    text: "내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.",
  },
  {
    id: 7,
    username: "정희수",
    title: "제목입니다.",
    preview: "미리보기 글입니다.",
    text: "내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.",
  },
];

const CommunityFeed = () => {
  const { push } = useFlow();
  return (
    <div className="h-[86%] overflow-y-scroll px-1 mt-2">
      {boardData.map((elem: IBoard) => (
        <BoardListItem
          id={elem.id}
          username={elem.username}
          title={elem.title}
          preview={elem.preview}
          text={elem.text}
          key={elem.id}
        />
      ))}
      <button
        onClick={() => {
          push("CreateBoardActivity", {});
        }}
        className=" absolute bottom-16 right-2 self-center w-[80px] h-[30px] m-2 ring-2 ring-[#9d6ddd] text-[#9d6ddd] bg-white bg-opacity-60 font-extrabold text-sm borde rounded-md shadow-button"
      >
        글쓰기
      </button>
    </div>
  );
};

export default CommunityFeed;
