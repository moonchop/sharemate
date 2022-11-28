import React, { useEffect, useState } from "react";
import BoardListItem from "../../components/BoardListItem";
import request from "../../stores/Request";
import { IBoard } from "../Community/CommunityFeed";

const MyBoard = () => {
  const [data, setData] = useState<IBoard[] | null>(null);

  useEffect(() => {
    request
      .get("/my-post")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="h-[93%] flex flex-col pro:pt-[30px] pt-[20px] mx-[20px] ">
        <div className="pro:text-2xl text-xl font-bold pro:mb-[25px] mb-[20px] ">
          내가 쓴 커뮤니티글
        </div>
        {data &&
          data?.map((elem: IBoard) => (
            <BoardListItem {...elem} key={elem.post_id} />
          ))}
      </div>
    </>
  );
};

export default MyBoard;
