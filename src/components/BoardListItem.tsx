import { useFlow } from "../stackflow";
import BoardDetail from "./BoardDetail";
import { IBoard } from "./CommunityFeed";

const BoardComponent = ({ id, title, username, preview }: IBoard) => {
  const { push } = useFlow();
  return (
    <div
      className="m-2"
      onClick={() => {
        push("BoardDetailActivity");
      }}
    >
      <p className="font-semibold text-lg">{title}</p>
      {preview && <p>{preview}</p>}
      <p className="mb-1 text-right text-sm text-gray-400">{username}</p>
      <hr />
    </div>
  );
};

export default BoardComponent;
