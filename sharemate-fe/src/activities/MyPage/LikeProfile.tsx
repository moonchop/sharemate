import React, { useEffect, useState } from "react";
import { useFlow } from "../../stackflow";
import { useUser } from "../../stores/user";
import request from "../../stores/Request";
import { HashTagColor } from "../../utils/HashTagColor";
import { IoIosArrowForward } from "react-icons/io";
import HashTag from "../../components/HashTag";

interface IUser {
  userID: number;
  name: string;
  major: string;
  age: number;
  gender: boolean;
  profile_photo: string;
  hashtags: string[];
}

const LikeProfile = () => {
  const { push } = useFlow();
  const { userID } = useUser();
  const [feedData, setFeedData] = useState([]);

  useEffect(() => {
    request
      .get("/user/likelist", { params: { id: userID } })
      .then((response) => {
        setFeedData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="h-[85%] flex flex-col pt-[30px] mx-[20px] ">
        <div className="text-2xl font-bold mb-[25px]">좋아요 누른 프로필</div>
        {feedData.map((elem: IUser) => (
          <div className="h-[17%]" key={elem.userID}>
            <div
              className="h-[100%] flex justify-between items-center"
              onClick={() => {
                push("ProfileActivity", { id: elem.userID });
              }}
            >
              <div className="flex flex-row h-[100%] w-[100%] items-center">
                <div className="flex w-[20%] items-center">
                  <img
                    src={elem.profile_photo}
                    className="mr-2 w-[58px] h-[58px] rounded-xl object-fill"
                  />
                </div>
                <div className="flex flex-col ml-2 w-[70%]">
                  <div className="flex mb-1 w-full">
                    <p className="max-w-[78px] mr-1 overflow-hidden text-ellipsis whitespace-nowrap">
                      {elem.name}
                    </p>
                    <p className="">24</p>
                    <p className="w-[50%] overflow-hidden text-ellipsis whitespace-nowrap mx-2">
                      {elem.major}
                    </p>
                  </div>
                  <div className="flex space-x-3 overflow-x-auto py-1 px-[2px] w-full scrollbar-hide">
                    <HashTag
                      text={elem.hashtags}
                      color={HashTagColor as ("red" | "blue" | "green")[]}
                    />
                  </div>
                </div>
                <IoIosArrowForward className="flex w-[10%] h-full items-center opacity-30"></IoIosArrowForward>
              </div>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </>
  );
};

export default LikeProfile;
