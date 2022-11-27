import { useActivityParams } from "@stackflow/react";

const BoardDetail = () => {
  const activity: any = useActivityParams();
  const props = activity;
  return (
    <div className="mt-8 px-5">
      <p className=" text-3xl font-bold mb-2">{props.title}</p>
      <div className="">
        <p className="text-right text-sm text-gray-400">
          작성자 : {props.name}
        </p>
        <p className="text-right text-sm text-gray-400">
          작성일자 : {props.date}
        </p>
      </div>
      <hr className="mb-2 mt-4"></hr>

      <p className="mt-7 leading-7 ">{props.text}</p>
    </div>
  );
};
export default BoardDetail;
