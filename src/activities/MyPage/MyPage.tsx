import React, { useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useFlow } from "../../stackflow";
import { useUser, useFavor } from "../../stores/user";
import { useAuth } from "../../stores/auth";
import request from "../../stores/Request";
import ArrowText from "../../components/ArrowText";
import DefaultProfile from "../../assets/DefaultProfile.png";
import { useActivity } from "@stackflow/react";

const MyPage = () => {
  const activity = useActivity();

  window.onpageshow = function (event) {
    if (event.persisted) {
      document.location.reload();
    }
  };
  const { push, replace } = useFlow();
  const { setToken } = useAuth();
  const { name, email, profile_photo, userID, setUser, setHash } = useUser();
  const { setFavor } = useFavor();

  useEffect(() => {
    request
      .get("/user/mypage")
      .then((response) => {
        setUser(response.data.user);
        setHash({ hashtags: response.data.hashtag_list });
        setFavor(response.data.favor);
      })
      .catch((error) => console.log(error));
  }, [activity.isTop]);

  const logoutHandler = () => {
    if (confirm("로그아웃 하시겠습니까?")) {
      setToken({ accessToken: "", refreshToken: "" });
      setUser({
        userID: 0,
        email: "",
        gender: false,
        name: "",
        major: "",
        grade: 0,
        age: 0,
        kakao_link: "",
        profile_photo: "",
      });
      setFavor({
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
      setHash({ hashtags: [] });
      sessionStorage.clear();
      replace("LoginActivity", {});
    } else {
      alert("로그아웃이 취소되었습니다.");
    }
  };

  const confirmHandler = () => {
    if (confirm("회원탈퇴를 하시겠습니까?")) {
      request.post("/user/del");
      setToken({ accessToken: "", refreshToken: "" });
      setUser({
        userID: 0,
        email: "",
        gender: false,
        name: "",
        major: "",
        grade: 0,
        age: 0,
        kakao_link: "",
        profile_photo: "",
      });
      setFavor({
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
      setHash({ hashtags: [] });
      sessionStorage.clear();
      replace("LoginActivity", {});
    } else {
      alert("회원탈퇴가 취소되었습니다.");
    }
  };

  return (
    <div className="h-[85%] overflow-auto scrollbar-hide">
      <div className="h-48 flex flex-col pt-[30px] border-b-[6px] border-[rgba(170,170,170,0.25)] mb-1">
        <div className="h-[100%] pl-[20px] mb-7">
          <div className="text-2xl font-semibold mb-7">마이페이지</div>
          <div className="flex items-center ">
            <div className="flex flex-row items-center w-full ">
              <div className="w-[20%]">
                <img
                  className="rounded-xl object-fil w-[58px] h-[58px] "
                  src={profile_photo}
                />
              </div>
              <div
                className="flex flex-row w-full items-center ml-[15px]"
                onClick={() => push("ProfileEditActivity", {})}
              >
                <div className="flex flex-col w-[84%]">
                  <div className="font-semibold pro:text-xl text-lg">
                    {name}
                  </div>
                  <div className="text-[#858181] pro:text-sm text-xs">
                    {email}
                  </div>
                </div>
                <IoIosArrowForward className="flex w-[25px] h-[25px] opacity-30"></IoIosArrowForward>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ArrowText
          text={"좋아요 누른 프로필"}
          onClick={() => push("LikeProfileActivity", {})}
          isThin
        />
        <ArrowText
          text={"내가 쓴 커뮤니티글"}
          onClick={() => push("MyBoardActivity", {})}
          isThin
        />
        <ArrowText
          text={"취향 정보 수정"}
          onClick={() => push("ModifyFavorActivity", {})}
          isThin
        />
        <ArrowText
          text={"비밀번호 변경"}
          onClick={() => push("PasswordActivity", { userID })}
          isThin
        />
        <ArrowText
          text={"약관 및 동의 관리"}
          onClick={() => push("TermActivity", {})}
          isThick
        />
        <ArrowText text={"로그아웃"} onClick={logoutHandler} isThin />
        <ArrowText text={"회원탈퇴"} onClick={confirmHandler} />
      </div>
      {/* <div
          className="h-16 flex items-center border-b-2"
          onClick={() => push("LikeProfileActivity", {})}
        >
          <div className="pl-[28px] w-[85%] text-[#AFADF5]">
            좋아요 누른 프로필
          </div>
          <div className="w-[15%] flex h-full justify-center items-center">
            <IoIosArrowForward className="opacity-30"></IoIosArrowForward>
          </div>
        </div>
        <div
          className="h-16 flex items-center border-b-2"
          onClick={() => push("LikeProfileActivity", {})}
        >
          <div className="pl-[28px] w-[85%] text-[#AFADF5]">
            내가 쓴 커뮤니티글
          </div>
          <div className="w-[15%] flex h-full justify-center items-center">
            <IoIosArrowForward className="opacity-30"></IoIosArrowForward>
          </div>
        </div>
        <div
          className="h-16 w-full flex items-center border-b-2"
          onClick={() => push("ModifyFavorActivity", {})}
        >
          <div className="pl-[28px] w-[85%] text-[#AFADF5]">취향 정보 수정</div>
          <div className="w-[15%] flex h-full justify-center items-center">
            <IoIosArrowForward className="opacity-30"></IoIosArrowForward>
          </div>
        </div>
        <div
          className="h-16 flex items-center border-b-2"
          onClick={() => push("PasswordActivity", { userID })}
        >
          <div className="pl-[28px] w-[85%] text-[#AFADF5]">비밀번호 변경</div>
          <div className="w-[15%] flex h-full justify-center items-center">
            <IoIosArrowForward className="opacity-30"></IoIosArrowForward>
          </div>
        </div>
        <div
          className="h-16 flex items-center"
          onClick={() => push("TermActivity", {})}
        >
          <div className="pl-[28px] w-[85%] text-[#AFADF5]">
            약관 및 동의 관리
          </div>
          <div className="w-[15%] flex h-full justify-center items-center">
            <IoIosArrowForward className="opacity-30"></IoIosArrowForward>
          </div>
        </div>
      </div>
      <div className="h-16 pro:text-lg text-base font-semibold">
        <div
          className="h-16 flex items-center border-b-2"
          onClick={logoutHandler}
        >
          <div className="pl-[28px] w-[85%] text-[#AFADF5]">로그아웃</div>
          <div className="w-[15%] flex h-full justify-center items-center">
            <IoIosArrowForward className="opacity-30"></IoIosArrowForward>
          </div>
        </div>
        <div className="h-[48%] flex items-center" onClick={confirmHandler}>
          <div className="pl-[28px] w-[85%] text-[#AFADF5]">회원 탈퇴</div>
          <div className="w-[15%] flex h-full justify-center items-center">
            <IoIosArrowForward className="opacity-30"></IoIosArrowForward>
          </div>
        </div> */}
    </div>
  );
};

export default MyPage;
