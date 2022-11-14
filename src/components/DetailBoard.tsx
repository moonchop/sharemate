import { useActivityParams } from "@stackflow/react";

const BoardDetail = () => {
  const activity: ParamsValue = useActivityParams();
  const props = activity;

  return (
    <div className="p-1 mx-1 mt-10">
      <p className="pl-2 text-3xl font-bold">{props.title}</p>
      <p className="text-right text-sm text-gray-400">{props.username}</p>
      <hr className="ml-2 my-2"></hr>
      <p className="m-2 my-8">{props.text}</p>
    </div>
  );
};
export default BoardDetail;
