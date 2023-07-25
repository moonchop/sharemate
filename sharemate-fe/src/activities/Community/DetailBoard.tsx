import { useActivityParams } from "@stackflow/react";
import { RiAlarmWarningFill } from "react-icons/ri";
import { useFlow } from "../../stackflow";
import request from "../../stores/Request";
import { useUser } from "../../stores/user";
import { PostDetailApi } from "../../utils/api/community";

const BoardDetail = () => {
  const activity: any = useActivityParams();
  const { push, pop } = useFlow();
  const { userID } = useUser();
  const props = activity;
  console.log(props.user_id, userID);
  return (
    <div className="mt-4 px-5">
      {props.user_id === userID && (
        <div
          onClick={() => {
            if (confirm("삭제하시겠습니까?")) {
              PostDetailApi(props.post_id);
              pop();
            }
          }}
          className="text-right text-gray-500"
        >
          Delete
        </div>
      )}
      <p className=" text-2xl font-bold mb-2">{props.title}</p>
      <div className="flex items-center justify-between">
        <div>
          <RiAlarmWarningFill
            className="h-6 w-6 text-red-400"
            onClick={() => push("ReportActivity", { postID: props.post_id })}
          />
        </div>
        <div>
          <p className="text-right text-sm text-gray-400">
            작성자 : {props.name}
          </p>
          <p className="text-right text-sm text-gray-400">
            작성일자 : {props.date}
          </p>
        </div>
      </div>
      <hr className="mb-2 mt-4"></hr>

      <p className="mt-7 leading-7 ">{props.text}</p>
    </div>
  );
};
export default BoardDetail;
