import { useFlow } from "../../stackflow";
import BoardListItem from "../../components/BoardListItem";
import { BsPencil } from "react-icons/bs";
import { useEffect } from "react";

export interface IBoard {
  user_id: number;
  title: string;
  post_id: string;
  category?: string;
  created_at: string;
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
  useEffect(() => {}, []);
  return (
    <div className="h-[86%] overflow-y-scroll p-3">
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
