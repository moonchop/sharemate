import React, { useEffect, useState } from "react";
import { useActivityParams } from "@stackflow/react";
import Ajou from "../../assets/Ajou.gif";
import Kakao from "../../assets/kakao.png";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import request from "../../stores/Request";

interface ParamsValue {
  id: number;
  name: string;
  age: number;
  grade: string;
  major: string;
  hashtag: string[];
  mbti: string;
  profile_photo: string;
  self_intro: string;
  kakao_link: string;
}

const DetailProfile = () => {
  const kakao_link = "https://open.kakao.com/o/s2qDCFOe";
  const Params: { id: string } = useActivityParams();
  const [like, setLike] = useState<boolean>(false);
  const [user, setUser] = useState({
    userID: 0,
    name: "",
    major: "",
    grade: 0,
    age: 0,
    profile_photo: "",
    gender: 0,
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
    sutdyTime: "",
    cleanness: "",
    snoring: "",
    selfIntro: "",
  });

  useEffect(() => {
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
  }, []);

  const likeHandler = () => {
    console.log(user);
    request
      .post(`user/like/${user.userID}`)
      .then((response) => {
        console.log(response.status);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex-col h-[92%]">
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
            <div className="flex pro:text-xl text-lg flex-row pro:mb-[30px] mb-[22px] w-full justify-between ">
              <div className="flex "> 아침형 </div>
              <div className="flex "> 비흡연 </div>
              <div className="flex "> 음주 잦음 </div>
            </div>
            <div className="flex pro:text-xl text-lg flex-row pro:mb-[12%] mb-[5%] w-full justify-between">
              <div className="flex">청결 예민</div>
              <div className="flex">코골이</div>
              <div className="flex">수면 5시간 ↓ </div>
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

          <img
            src={Kakao}
            className="flex pro:h-[70%] h-[70%]"
            onClick={() => {
              window.open(kakao_link);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default DetailProfile;
