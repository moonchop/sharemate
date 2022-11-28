import { useFlow } from "../../stackflow";
import BoardListItem from "../../components/BoardListItem";
import { BsPencil } from "react-icons/bs";
import { useEffect, useState } from "react";
import { PostAllApi } from "../../utils/api/community";

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
  history.pushState(null, "", location.href);
  window.onpopstate = function () {
    history.go(1);
  };
  const { push } = useFlow();
  const [data, setData] = useState<IBoard[] | null>(null);
  useEffect(() => {
    PostAllApi().then((response: any) => {
      console.log(response.data);
      setData(response.data);
    });
  }, []);
  return (
    <div className="p-5 overflow-y-scroll">
      {data &&
        data?.map((elem: IBoard) => (
          <BoardListItem {...elem} key={elem.post_id} />
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
