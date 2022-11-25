import React, { useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useFlow } from "../stackflow";
import { useUser, useFavor } from "../stores/user";
import { useAuth } from "../stores/auth";
import request from "../stores/Request";

const MyPage = () => {
  const { push, replace } = useFlow();
  const { setToken } = useAuth();
  const { name, email, profile_photo, userID, setUser } = useUser();
  const { setFavor } = useFavor();

  useEffect(() => {
    request
      .get("/user/mypage")
      .then((response) => {
        console.log(response.status);
        console.log(response.data);
        setUser(response.data.user);
        setFavor(response.data.favor);
      })
      .catch((error) => console.log(error));
  }, []);

  const logoutHandler = () => {
    if (confirm("로그아웃 하시겠습니까?")) {
      setToken({ accessToken: "", refreshToken: "" });
      replace("LoginActivity", {});
    } else {
      alert("로그아웃이 취소되었습니다.");
    }
  };

  const confirmHandler = () => {
    if (confirm("회원탈퇴를 하시겠습니까?")) {
      replace("LoginActivity", {});
    } else {
      alert("회원탈퇴가 취소되었습니다.");
    }
  };

  return (
    <div className="h-[85%] ">
      <div className="h-[32%] flex flex-col pro:pt-[30px] pt-[20px] border-b-[6px] border-[rgba(170,170,170,0.25)]">
        <div className="h-[100%] pb-[13%] ">
          <div className="pro:text-3xl text-2xl font-bold pro:mb-[25px] mb-[20px] ml-[24px]">
            마이페이지
          </div>
          <div className="flex items-center">
            <div className="flex flex-row items-center w-[83%] ml-[24px]">
              <img
                className="flex rounded-3xl pro:w-[80px] pro:h-[80px] w-[60px] h-[60px] mr-[15px]"
                src={profile_photo}
              />
              <div className="flex flex-col">
                <div className="font-bold pro:text-xl text-lg">{name}</div>
                <div className="text-[#858181] pro:text-sm text-xs">
                  {email}
                </div>
              </div>
            </div>
            <IoIosArrowForward
              className="w-[25px] h-[25px] opacity-30"
              onClick={() => push("ProfileEditActivity", {})}
            ></IoIosArrowForward>
          </div>
        </div>
      </div>
      <div className="h-[22%] border-b-[6px] border-[rgba(170,170,170,0.25)] pro:text-lg text-base font-semibold">
        <div className="h-[50%] flex items-center border-b-2">
          <div
            className="pl-[28px] w-[90%] text-[#AFADF5]"
            onClick={() => push("LikeProfileActivity", {})}
          >
            좋아요 누른 프로필
          </div>
          <IoIosArrowForward className="opacity-30"></IoIosArrowForward>
        </div>
        <div className="h-[48%] flex items-center">
          <div className="pl-[28px] w-[90%] text-[#AFADF5] ">비밀번호 변경</div>
          <IoIosArrowForward
            className="opacity-30"
            onClick={() => push("PasswordActivity", { userID })}
          ></IoIosArrowForward>
        </div>
      </div>
      <div className="h-[22%] pro:text-lg text-base font-semibold">
        <div className="h-[48%] flex items-center border-b-2">
          <div className="pl-[28px] w-[90%] text-[#AFADF5] ">로그아웃</div>
          <IoIosArrowForward
            className="opacity-30"
            onClick={logoutHandler}
          ></IoIosArrowForward>
        </div>
        <div className="h-[48%] flex items-center ">
          <div className="pl-[28px] w-[90%] text-[#AFADF5] ">회원 탈퇴</div>
          <IoIosArrowForward
            className="opacity-30"
            onClick={confirmHandler}
          ></IoIosArrowForward>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
