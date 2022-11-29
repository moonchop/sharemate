import { useFlow } from "../stackflow";
import { IBoard } from "../activities/Community/CommunityFeed";
import { useMemo } from "react";
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
  const addZero = (date: any) => {
    if (`${date}`.length === 1) {
      return `0${date}`;
    } else return date;
  };
  const postDate = useMemo(() => {
    let postDate = new Date(created_at);
    let postDateForm = {
      year: postDate.getFullYear(), //현재 년도
      month: postDate.getMonth() + 1, // 현재 월
      date: postDate.getDate(), // 현제 날짜
      hours: postDate.getHours(), //현재 시간
      minutes: postDate.getMinutes(), //현재 분
    };
    let timestring = `${postDateForm.year}/${addZero(
      postDateForm.month
    )}/${addZero(postDateForm.date)} ${addZero(postDateForm.hours)}:${addZero(
      postDateForm.minutes
    )}`;
    return timestring;
  }, []);
  return (
    <div
      className="p-2"
      onClick={() => {
        push("BoardDetailActivity", {
          post_id: post_id,
          name: username,
          title: title,
          text: text,
          date: postDate,
        });
      }}
    >
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg truncate">{title}</p>
        <p className="text-right text-sm text-gray-400">{`작성자 : ${username}`}</p>
      </div>
      <p className="truncate mb-2">{text}</p>
      <p className="text-right text-sm text-gray-400 mb-1">{`${postDate}`}</p>

      <hr />
    </div>
  );
};

export default BoardListItem;
