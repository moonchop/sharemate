import React, { useEffect, useState } from "react";
import { useActivityParams } from "@stackflow/react";
import Ajou from "../../assets/Ajou.gif";
import Kakao from "../../assets/kakao.png";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import request from "../../stores/Request";
import jwt_decode from "jwt-decode";
import { useAuth } from "../../stores/auth";
import { useFlow } from "../../stackflow";

interface LikeProps {
  age: number;
  gender: boolean;
  hashtags: string[];
  major: string;
  name: string;
  profile_photo: string;
  userID: number;
}

const DetailProfile = () => {
  const kakao_link = "https://open.kakao.com/o/s2qDCFOe";
  const { push } = useFlow();
  const Params: { id: string } = useActivityParams();
  const { accessToken } = useAuth();
  const [likeId, setLikeId] = useState<number[] | null>(null);
  const [like, setLike] = useState<boolean | undefined>(false);
  const [user, setUser] = useState({
    userID: 0,
    name: "",
    major: "",
    grade: 0,
    age: 0,
    gender: 0,
    profile_photo: "",
    kakao_link: "",
    created_at: 0,
    updated_at: 0,
    email: "",
  });

  const [favor, setFavor] = useState({
    mbti: "",
    sleepTime: "",
    smoking: "",
    wakeupTime: "",
    drinking: "",
    studyTime: "",
    cleanness: "",
    snoring: "",
    selfIntro: "",
  });

  useEffect(() => {
    const decoded = jwt_decode<Record<"sub", string>>(accessToken);
    console.log(decoded);
    request
      .get("user/detail", { params: { id: Params.id } })
      .then((response) => {
        console.log(response.status);
        console.log(response.data);
        console.log(response.data.user);
        setUser(response.data.user);
        setFavor(response.data.favor);
      })
      .catch((error) => {
        console.log(error);
      });

    request
      .get("user/likelist", { params: { id: decoded.sub } })
      .then((response) => {
        setLikeId(response.data.map((elem: LikeProps) => elem.userID));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const state = likeId?.some((e: number) => e === Number(Params.id));
    setLike(state);
  }, [likeId]);

  const likeHandler = () => {
    console.log(user);
    if (!like) {
      request
        .post(`user/like/${user.userID}`)
        .then((response) => {
          console.log(response.status);
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      request
        .post(`user/unlike/${user.userID}`)
        .then((response) => {
          console.log(response.status);
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="flex-col h-[92%] overflow-y-scroll scrollbar-hide">
      <div className="w-full h-[38%]">
        <div className="h-full relative">
          <img src={Ajou} className="absolute h-[87%] z-1 opacity-25" />
          <div className="absolute h-[87%] w-full z-2 bg-[rgba(86,64,221,0.2)] justify-center items-center" />
          <div className="flex items-center justify-center h-[57%]">
            <img
              src={user.profile_photo}
              className="flex z-20 rounded-full shadow-xl w-[85px] pro:w-[109px] pro:h-[109px] h-[85px] "
            />
          </div>
          <div className="absolute h-[70%] bg-white rounded-3xl top-[29%] left-[41px] right-[41px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
            <div className="h-full w-full z-10">
              <div className="flex mb-[3%] flex-row items-center justify-center">
                <div className="items-center w-[28%] h-[42px] pro:h-[55px] " />
              </div>
              <div className="font-bold pro:text-2xl text-xl text-center mb-[3%]">
                {user.name}
              </div>
              <div className="pro:text-xl text-lg pro:mb-[5%] mb-[5px] font-medium text-[rgb(133,129,129)] text-center">
                {user.major} &nbsp;{user.grade}학년 &nbsp;{user.age}살
              </div>
              <div className=" mb-[24px] pro:text-xl text-lg font-medium text-center">
                <strong className="text-[#AFADF5] font-semibold">MBTI</strong>
                &nbsp; {favor.mbti}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col  h-[62%] justify-center ">
        <div className="h-[80%] pro:mt-[9%] mt-[5%] ml-[38px] mr-[38px] item-center ">
          <div className=" text-left w-full ">
            <div className="font-bold pro:text-xl text-lg pro:mb-[30px] mb-[18px] text-[#AFADF5] underline underline-offset-8">
              나의 생활
            </div>
            <div className="flex pro:text-lg text-base flex-row pro:mb-[7%] mb-[5%] w-full justify-between ">
              <div className="flex">기상 시간 : {favor.wakeupTime}</div>
              <div className="flex">수면 시간 : {favor.sleepTime}</div>
            </div>
            <div className="flex pro:text-lg text-base flex-row pro:mb-[7%] mb-[5%] w-full justify-between">
              <div className="flex">생활 패턴 : {favor.studyTime}</div>
              <div className="flex">코골이 유무 : {favor.snoring}</div>
            </div>
            <div className="flex pro:text-lg text-base flex-row pro:mb-[7%] mb-[5%] w-full justify-between">
              <div className="flex">주 음주 : {favor.drinking}회</div>
              <div className="flex">{favor.cleanness}</div>
              <div className="flex ">{favor.smoking}</div>
            </div>
            <div className="font-bold pro:text-xl text-lg pro:mb-[27px] mb-[15px] text-[#AFADF5] underline underline-offset-8">
              자기 소개
            </div>
            <div className="pro:text-xl pro:leading-9 text-lg font-medium w-full	">
              {favor.selfIntro}
            </div>
          </div>
        </div>
        <div className="flex justify-between px-[38px] h-[13%] items-center">
          {!like ? (
            <AiOutlineHeart
              color="#AAAAAA"
              className="h-full w-[10%]"
              onClick={() => {
                setLike(true);
                likeHandler();
              }}
            />
          ) : (
            <AiFillHeart
              color="red"
              className="h-full w-[10%] "
              onClick={() => {
                setLike(false);
                likeHandler();
              }}
            />
          )}
          <span className="w-[50%]"></span>
          <img
            src={Kakao}
            className="flex pro:h-[70%] h-[70%]"
            onClick={() => {
              window.open(user.kakao_link);
            }}
          />
        </div>
        <span
          className="text-xs text-red-300 ml-[33px]"
          onClick={() => push("ReportActivity", { userToID: user.userID })}
        >
          신고하기
        </span>
      </div>
    </div>
  );
};

export default DetailProfile;
