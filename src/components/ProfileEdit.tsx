import React, { useState, useRef, useCallback } from "react";

interface Profile {
  name: string;
  nickname: string;
  email: string;
  major: string;
  grade: string;
  kakao_id: string;
  profile_photo: string;
  kakao_link: string;
  age: string;
}

const dumydata: Profile = {
  name: "장은학",
  nickname: "devnak",
  email: "showri0108@ajou.ac.kr",
  major: "소프트웨어학과",
  grade: "3학년",
  kakao_id: "test",
  profile_photo:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  kakao_link: "https://open.kakao.com/o/s2qDCFOe",
  age: "24",
};

const ProfileEdit = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [basicInfo, setBasicInfo] = useState({
    name: "",
    email: "",
    major: "",
  });

  const [editInfo, setEditInfo] = useState({
    grade: "3학년",
    age: "24",
    kakao_link: "https://open.kakao.com/o/s2qDCFOe",
    profile_photo:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    nickname: "devnak",
  });

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;
    return setEditInfo((prev) => ({ ...prev, [name]: value }));
  };

  const uploadPhoto = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    console.log(URL.createObjectURL(e.target.files[0]));
    setEditInfo((prev) => ({
      ...prev,
      profile_photo: URL.createObjectURL(e.target.files[0]),
    }));
  }, []);

  const onUploadPhoto = useCallback(() => {
    if (!inputRef.current) return;
    inputRef.current.click();
  }, []);

  return (
    <div className="h-[85%]">
      <div className="h-[33%] flex flex-col pro:pt-[30px] pt-[20px] ">
        <div className="pro:text-3xl text-2xl font-bold pro:mb-[25px] mb-[20px] ml-[24px]">
          회원정보 수정
        </div>
        <div className="flex w-full justify-center">
          <div className="flex flex-row items-center">
            <input
              type="file"
              name="profile_photo"
              className="hidden"
              onChange={uploadPhoto}
              accept="image/*"
              ref={inputRef}
            />
            <img
              className="rounded-full pro:w-[120px] pro:h-[120px] w-[80px] h-[80px] "
              src={editInfo.profile_photo}
              onClick={onUploadPhoto}
            />
          </div>
        </div>
      </div>
      <div className="h-[27%] pl-[24px] pr-[24px] border-b-4">
        <div className="flex flex-row pro:mb-[21px] mb-[10px]">
          <div className="text-[#AFADF5] text-base font-medium w-[98px]">
            이름
          </div>
          <div className="text-[#AFADF5] text-base font-semibold w-[244px] border-b-2">
            {dumydata.name}
          </div>
        </div>
        <div className="flex flex-row pro:mb-[21px] mb-[10px]">
          <div className="text-[#AFADF5] text-base font-medium w-[98px]">
            이메일
          </div>
          <div className="text-[#AFADF5] text-base font-semibold w-[244px] border-b-2">
            {dumydata.email}
          </div>
        </div>
        <div className="flex flex-row pro:mb-[21px] mb-[10px]">
          <div className="text-[#AFADF5] text-base font-medium w-[98px]">
            학과
          </div>
          <div className="text-[#AFADF5] text-base font-semibold w-[244px] border-b-2">
            {dumydata.major}
          </div>
        </div>
        <div className="flex flex-row pro:mb-[21px] mb-[10px]">
          <div className="text-[#AFADF5] text-base font-medium w-[98px]">
            성별
          </div>
          <div className="text-[#AFADF5] text-base font-semibold w-[244px] border-b-2">
            남성
          </div>
        </div>
      </div>
      <div className="h-[30%] pl-[24px] pr-[24px] pt-[15px]">
        <div className="flex flex-row pro:mb-[21px] mb-[10px]">
          <div className="text-[#AFADF5] text-base font-medium w-[98px]">
            닉네임
          </div>
          <input
            name="nickname"
            value={editInfo.nickname}
            className="text-[#AFADF5] text-base font-semibold w-[244px] border-b-2 outline-0"
            onChange={changeHandler}
            onFocus={(e) => e.currentTarget.select()}
          />
        </div>
        <div className="flex flex-row pro:mb-[21px] mb-[10px]">
          <div className="text-[#AFADF5] text-base font-medium w-[98px]">
            학년
          </div>
          <input
            name="grade"
            value={editInfo.grade}
            className="text-[#AFADF5] text-base font-semibold w-[244px] border-b-2 outline-0"
            onChange={changeHandler}
            onFocus={(e) => e.currentTarget.select()}
          />
        </div>
        <div className="flex flex-row pro:mb-[21px] mb-[10px]">
          <div className="text-[#AFADF5] text-base font-medium w-[98px]">
            나이
          </div>
          <input
            type="text"
            name="age"
            value={editInfo.age}
            className="text-[#AFADF5] text-base font-semibold w-[244px] border-b-2 outline-0"
            onChange={changeHandler}
          />
        </div>
        <div className="flex flex-row pro:mb-[21px] mb-[10px]">
          <div className="text-[#AFADF5] text-base font-medium w-[98px]">
            오픈채팅 링크
          </div>
          <input
            name="kakao_link"
            value={editInfo.kakao_link}
            className="text-[#AFADF5] text-base font-semibold w-[244px] border-b-2 outline-0"
            onChange={changeHandler}
            onFocus={(e) => e.currentTarget.select()}
          />
        </div>
      </div>
      <div className="flex w-full h-[9%] justify-center items-end">
        <button className="text-center w-[80%] h-[50%] ring-2 ring-[#9d6ddd] text-[#9d6ddd] bg-white bg-opacity-60 font-extrabold text-sm rounded-md shadow-button">
          회원정보 수정
        </button>
      </div>
    </div>
  );
};

export default ProfileEdit;
