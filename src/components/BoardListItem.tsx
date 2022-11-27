import { useFlow } from "../stackflow";
import { IBoard } from "../activities/Community/CommunityFeed";

const BoardListItem = ({
  category,
  created_at,
  post_id,
  text,
  title,
  user_id,
  username,
}: IBoard) => {
  const { push } = useFlow();
  return (
    <div
      className="m-2"
      onClick={() => {
        push("BoardDetailActivity", { post_id: post_id, name: username });
      }}
    >
      <p className="font-semibold text-lg">{title}</p>
      <p>{text.substring(0, 10)}</p>
      <p className="mb-1 text-right text-sm text-gray-400">{username}</p>
      <hr />
    </div>
  );
};

export default BoardListItem;
