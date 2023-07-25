import React, { useEffect, useState } from "react";
import { useActivityParams } from "@stackflow/react";
import Ajou from "../../assets/Ajou.gif";
import Kakao from "../../assets/kakao.png";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import request from "../../stores/Request";
import jwt_decode from "jwt-decode";
import { useAuth } from "../../stores/auth";
import { useFlow } from "../../stackflow";
import { RiAlarmWarningFill } from "react-icons/ri";
import { FaBeer } from "react-icons/fa";
import { GiCigarette, GiVacuumCleaner, GiNoseFront } from "react-icons/gi";
import { MdBedtime } from "react-icons/md";
import { IoMdBed } from "react-icons/io";
import { VscPerson } from "react-icons/vsc";
import { ImEyeBlocked } from "react-icons/im";
import DefaultProfile from "../../assets/DefaultProfile.png";

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
  const { push, pop } = useFlow();
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
    request
      .get("user/detail", { params: { id: Params.id } })
      .then((response) => {
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
    if (!like) {
      request
        .post(`user/like/${user.userID}`)
        .then((response) => {})
        .catch((error) => {
          console.log(error);
        });
    } else {
      request
        .post(`user/unlike/${user.userID}`)
        .then((response) => {})
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="items-center overflow-y-scroll scrollbar-hide">
      <img src={Ajou} className="absolute z-5 h-[25%] opacity-50 w-full" />

      <div className="absolute h-[20%] bg-white rounded-3xl top-[15%] w-[80%] right-1/2 left-1/2 -translate-x-1/2 shadow-[0px_2px_2px_rgba(0,0,0,0.25)] overflow-auto scrollbar-hide">
        <div className="px-4 pt-2 z-10 flex flex-col item-center justify-center h-full">
          <div className="flex felx-row items-center">
            <img
              src={user.profile_photo}
              className=" z-20 rounded-full shadow-xl w-24 h-24 mr-5"
            />
            <div className="flex flex-col justify-center">
              <div className="font-semibold  ">
                {user.name} ({user.age})
              </div>
              <div className="flex flex-row">
                <p className="text-[#AFADF5] mr-2 font-semibold">MBTI</p>
                <p className=" ">{favor.mbti}</p>
              </div>
              <div className="text-base font-medium text-[rgb(133,129,129)] ">
                {user.major}
              </div>
              <div className="text-base  font-medium text-[rgb(133,129,129)] ">
                {user.grade}학년
              </div>
            </div>
          </div>
          <div className="flex w-full justify-between text-center items-center mt-2 pb-2">
            <div className="flex flex-row items-center">
              <RiAlarmWarningFill
                className="h-6 w-6 text-red-400 mr-2"
                onClick={() =>
                  push("ReportActivity", { userToID: user.userID })
                }
              />
              <ImEyeBlocked
                className="h-5 w-6 text-gray-500"
                onClick={() => {
                  if (confirm(`${user.name}님을 차단하시겠습니까?`)) {
                    request
                      .post("user/block", { userToID: user.userID })
                      .then((response) => {
                        console.log(response);
                      })
                      .catch((error) => console.log(error));
                    alert("차단이 완료되었습니다.");
                    pop();
                  } else {
                    alert("차단이 취소되었습니다.");
                  }
                }}
              />
            </div>
            {!like ? (
              <AiOutlineHeart
                color="#AAAAAA"
                className="h-6 w-6"
                onClick={() => {
                  setLike(true);
                  likeHandler();
                }}
              />
            ) : (
              <AiFillHeart
                color="red"
                className="h-6 w-6"
                onClick={() => {
                  setLike(false);
                  likeHandler();
                }}
              />
            )}
          </div>
        </div>
      </div>
      {/* </div>
          <div className="absolute w-[80%] h-40 bg-white rounded-3xl top-[29%] left-[41px] right-[41px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
            <div className="flex mb-[3%] flex-row items-center justify-center">
              <div className="items-center w-[28%] h-[42px] pro:h-[55px] " />
            </div>
            <div className="font-bold pro:text-2xl text-lg text-center pro:mb-[3%]">
              {user.name}
            </div>
            <div className="pro:text-xl text-base mb-2 font-medium text-[rgb(133,129,129)] text-center">
              {user.major} &nbsp;{user.grade}학년 &nbsp;{user.age}살
            </div>
            <div className=" pro:text-xl text-base font-medium text-center">
              <strong className="text-[#AFADF5] font-semibold">MBTI</strong>
              &nbsp; {favor.mbti}
            </div>
            
          </div>
        </div>
      </div> */}

      <div className=" absolute top-[35%] w-full px-5 pt-5">
        <div className="item-center ">
          <div className=" text-left w-full ">
            <div className="font-bold text-xl mb-3 text-[#AFADF5] text-center">
              나의 생활
            </div>
            <div className="flex text-base flex-col mb-2 w-full space-y-3">
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center w-1/2">
                  <VscPerson className="text-orange-200 mr-1" size={30} />
                  <div className=" ">{favor.studyTime} 인간</div>
                </div>
                <div className="flex flex-row items-center w-1/2 pl-3">
                  <MdBedtime className="text-yellow-200 mr-1" size={30} />
                  <div className="">{favor.sleepTime} 자요</div>
                </div>
              </div>

              <div className="flex flex-row items-center">
                <div className="flex flex-row items-center w-1/2">
                  <IoMdBed className="text-blue-200 mr-1" size={30} />
                  <div className="flex">{favor.wakeupTime}에 일어나요</div>
                </div>
                <div className="flex flex-row items-center w-1/2 pl-3">
                  <GiNoseFront className="text-red-200 mr-1" size={30} />
                  <div className="flex">코골이 {favor.snoring}</div>
                </div>
              </div>

              <div className="flex flex-row items-center ">
                <div className="flex flex-row items-center w-1/2">
                  <GiVacuumCleaner className="text-red-500 mr-1 " size={30} />
                  <div className="flex">{favor.cleanness}해요</div>
                </div>
                <div className="flex flex-row items-center w-1/2 pl-3">
                  <GiCigarette className="text-gray-300 mr-1 " size={30} />
                  <div className="flex ">{favor.smoking}</div>
                </div>
              </div>

              <div className="flex flex-row items-center ">
                <FaBeer className="text-yellow-500 mr-1" size={30} />
                <div className="flex">주 {favor.drinking}회</div>
              </div>
            </div>
            <hr className="my-5 bg-[#8784f0]" />
            <div className="font-bold text-xl mb-2 text-[#AFADF5] text-center ">
              자기 소개
            </div>
            <div className="flex pro:leading-7 font-medium w-full	">
              {favor.selfIntro}
            </div>
          </div>
        </div>
      </div>
      <button className="absolute bottom-4 -mr-3 right-0 self-center w-[62px] h-[62px] ">
        <img
          src={Kakao}
          className="flex pro:h-[70%] h-[70%]"
          onClick={() => {
            window.open(user.kakao_link);
          }}
        />
      </button>
    </div>
  );
};

export default DetailProfile;

//{favor.selfIntro}
