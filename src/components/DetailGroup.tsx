import { useActivityParams } from "@stackflow/react";
import { HashTagColor } from "../utils/HashTagColor";
import React, { useEffect, useState } from "react";
import HashTag from "./HashTag";
import Ajou from "../assets/Ajou.gif";
import { IoIosCheckmark } from "react-icons/io";
import { GetGroupApi, JoinGroupApi } from "../utils/api/group";
import PersonCard from "./group/PersonCard";

// interface ParamsValue {
//   groupID: number;
//   building: string;
//   hashtags: string[];
//   text: string;
//   wishLists: string[];
//   maxNum: number;
//   curNum: number;
//   userID: number;
//   kakaoLink: string;
// }

interface IGroupDetail {
  building: string;
  created_at: string;
  curNum: number;
  groupID: number;
  hashtags: string[];
  kakaoLink: string;
  maxNum: number;
  text: string;
  title: string;
  userID: number;
  wishLists: string[];
}
export interface IGroupJoined {
  age: number;
  gender: boolean;
  hashtags: string[];
  major: string;
  name: string;
  profile_photo: string;
  userID: number;
}

interface IGroups {
  groupDetailInfo: IGroupDetail;
  joinedUserList: IGroupJoined[];
}

const DetailGroup = () => {
  const Params: { num: string } = useActivityParams();

  const [participation, setParticipation] = useState(false);
  const [group, setGroup] = useState<IGroups | null>(null);
  useEffect(() => {
    GetGroupApi(Params.num)
      .then((response) => {
        console.log("@@", response.data);
        setGroup(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleParticiation = async (group_id?: number) => {
    // setParticipation((prev) => !prev);
    if (!group_id) return;
    try {
      const res = await JoinGroupApi(group_id);
    } catch (e) {
      console.log(e);
    }
    console.log("leave");
  };

  return (
    <div className="items-center">
      <img src={Ajou} className="absolute z-5 h-[20%] opacity-50 w-full" />
      {/* 하얀색 카드 Form */}
      <div className="absolute h-[70%] bg-white rounded-3xl top-[20%] w-[90%] right-1/2 left-1/2 -translate-x-1/2 shadow-[0px_2px_2px_rgba(0,0,0,0.25)] overflow-auto">
        <div className=" p-5 z-10 ">
          {/* 카드 내용 */}
          <p className="text-2xl font-bold">
            {group?.groupDetailInfo.building}
          </p>
          <p className="text-md mt-2">{group?.groupDetailInfo.text}</p>
          {/* 해시태그(화면 width 꽉차게 스크롤로 구현) */}
          <div className="pl-3 overflow-auto scrollbar-hide -mx-5 mt-2 ">
            <div className="p-2">
              <HashTag
                text={group?.groupDetailInfo.hashtags}
                color={HashTagColor as ("red" | "blue" | "green")[]}
              />
            </div>
          </div>
          <hr className="w-full mt-5 mb-5" />
          <p className="text-lg font-medium mt-3 mb-1">
            이런 룸메이트를 원해요.
          </p>
          <div>
            {group?.groupDetailInfo.wishLists.map((elem, index) => (
              <div key={index} className="flex items-center mb-2 -ml-1.5">
                <IoIosCheckmark className="w-7 h-7 text-green-700 opacity-50" />
                <p className={"text-md"}>{elem}</p>
              </div>
            ))}
          </div>
          <hr className="w-full mt-5 mb-5" />
          <p className="text-lg font-medium mb-5">모집된 룸메이트 정보</p>
          <div>
            {group?.joinedUserList.map((elem) => (
              <div className="mb-5">
                <PersonCard {...elem} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {participation ? (
        <button
          onClick={() => {
            handleParticiation(group?.groupDetailInfo.groupID);
          }}
          className="absolute bottom-[2%] left-[5%] w-[90%] h-[40px] ring-2 ring-[#a984da] text-white bg-[#a984da] font-semibold text-base rounded-md shadow-button"
        >
          참 여 중
        </button>
      ) : (
        <button
          onClick={() => {
            handleParticiation(group?.groupDetailInfo.groupID);
          }}
          className="absolute bottom-[2%] left-[5%] w-[90%] h-[40px] ring-2 ring-[#a984da] text-[#a984da] bg-white bg-opacity-60 font-semibold text-base rounded-md shadow-button"
        >
          그룹 참여
        </button>
      )}
    </div>
  );
};

export default DetailGroup;
