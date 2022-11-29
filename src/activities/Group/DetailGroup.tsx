import { useActivityParams } from "@stackflow/react";
import { HashTagColor } from "../../utils/HashTagColor";
import React, { useEffect, useState } from "react";
import HashTag from "../../components/HashTag";
import Ajou from "../../assets/Ajou.gif";
import { IoIosCheckmark } from "react-icons/io";
import { RiAlarmWarningFill } from "react-icons/ri";
import {
  GetGroupApi,
  JoinGroupApi,
  LeaveGroupApi,
} from "../../utils/api/group";
import PersonCard from "../../components/group/PersonCard";
import jwt_decode from "jwt-decode";
import { useAuth } from "../../stores/auth";
import CheckText from "../../components/group/CheckText";
import { useFlow } from "../../stackflow";
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
  const { push } = useFlow();

  const [participation, setParticipation] = useState<boolean | undefined>(
    false
  );
  const [own, setOwn] = useState<boolean | undefined>(false);

  const [group, setGroup] = useState<IGroups | null>(null);
  const { accessToken } = useAuth();
  useEffect(() => {
    GetGroupApi(Params.num)
      .then((response) => {
        setGroup(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    duplicated(group?.joinedUserList.map((elem: IGroupJoined) => elem.userID));
  }, [group, setParticipation]);

  const onJoin = async (group_id: number) => {
    try {
      const res = await JoinGroupApi(group_id);
      setParticipation(true);
    } catch {
      alert("그룹 참여 실패했습니다.");
    }
  };

  const onLeave = async (group_id: number) => {
    try {
      const res = await LeaveGroupApi(group_id);
      if (confirm("그룹을 떠나시겠습니까?")) setParticipation(false);
    } catch {
      alert("그룹 떠나기에 실패했습니다.");
    }
  };

  const duplicated = (ids?: number[]) => {
    const decoded = jwt_decode<Record<"sub", string>>(accessToken);
    const state = ids?.some((id) => id === Number(decoded.sub));
    setParticipation(state);

    if (ids && ids[0] === Number(decoded.sub)) setOwn(true);
    //true : 값 찾음, false : 값 못찾음
    return state;
  };

  return (
    <div className="items-center">
      <img src={Ajou} className="absolute z-5 h-[20%] opacity-50 w-full" />
      {/* 하얀색 카드 Form */}
      <div className="absolute h-[70%] bg-white rounded-3xl top-[20%] w-[90%] right-1/2 left-1/2 -translate-x-1/2 shadow-[0px_2px_2px_rgba(0,0,0,0.25)] overflow-auto scrollbar-hide">
        <div className=" p-5 z-10 ">
          {/* 카드 내용 */}
          <div className="flex justify-between items-center">
            <p className="text-2xl font-bold">
              {group?.groupDetailInfo.building}
            </p>
            <RiAlarmWarningFill
              onClick={() => push("ReportActivity", { postID: Params.num })}
              className="h-5 w-5 text-red-400"
            >
              신고하기
            </RiAlarmWarningFill>
          </div>
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
              <div key={index} className="flex items-center mb-2 ">
                <CheckText>
                  <p className={"text-md"}>{elem}</p>
                </CheckText>
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
      {group &&
        (participation ? (
          own ? (
            <button
              // onClick={() => {
              //   onLeave(group?.groupDetailInfo.groupID);
              // }}
              disabled
              className="absolute bottom-[2%] left-[5%] w-[90%] h-[40px] text-opacity-50 text-white bg-gray-500 bg-opacity-40 font-semibold text-base rounded-md shadow-button"
            >
              참 여 중
            </button>
          ) : (
            <button
              onClick={() => {
                onLeave(group?.groupDetailInfo.groupID);
              }}
              className="absolute bottom-[2%] left-[5%] w-[90%] h-[40px] ring-2 ring-[#a984da] text-white bg-[#a984da] font-semibold text-base rounded-md shadow-button"
            >
              참 여 중
            </button>
          )
        ) : (
          <button
            onClick={() => {
              onJoin(group?.groupDetailInfo.groupID);
            }}
            className="absolute bottom-[2%] left-[5%] w-[90%] h-[40px] ring-2 ring-[#a984da] text-[#a984da] bg-white bg-opacity-60 font-semibold text-base rounded-md shadow-button"
          >
            그룹 참여
          </button>
        ))}
    </div>
  );
};

export default DetailGroup;
