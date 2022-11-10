import { useFlow } from "../stackflow";
import { IBoard } from "./CommunityFeed";

const BoardListItem = ({ id, title, username, preview, text }: IBoard) => {
  const { push } = useFlow();
  return (
    <div
      className="m-2"
      onClick={() => {
        push("BoardDetailActivity", { id, title, username, preview, text });
      }}
    >
      <p className="font-semibold text-lg">{title}</p>
      {preview && <p>{preview}</p>}
      <p className="mb-1 text-right text-sm text-gray-400">{username}</p>
      <hr />
    </div>
  );
};

export default BoardListItem;
