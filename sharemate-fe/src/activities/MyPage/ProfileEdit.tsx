import React, { useState, useRef, useCallback, useEffect } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import request from "../../stores/Request";
import { useUser } from "../../stores/user";
import { useFlow } from "../../stackflow";
import imageCompression from "browser-image-compression";

interface Profile {
  name: string;
  major: string;
  grade: number;
  kakao_link: string;
  age: number;
}

const ProfileEdit = () => {
  const { replace } = useFlow();
  const {
    age,
    email,
    gender,
    grade,
    kakao_link,
    major,
    name,
    profile_photo,
    setEditUser,
  } = useUser();

  const [editData, setEditData] = useState<Profile>({
    name: name,
    major: major,
    grade: grade,
    age: age,
    kakao_link: kakao_link,
  });

  const [editPhoto, setEditPhoto] = useState({
    profile_photo: profile_photo,
  });

  let formData = new FormData();

  const inputRef = useRef<HTMLInputElement | null>(null);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;
    return setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const uploadPhoto = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files) return;
      const newFile = compressImage(e.target.files[0]);
      //console.log(newFile);
      formData.append("file", await newFile);

      request
        .post("/user/profile", formData)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => console.log(error));
      setEditPhoto((prev) => ({
        ...prev,
        profile_photo: URL.createObjectURL(e.target.files[0]),
      }));
    },
    []
  );

  const onUploadPhoto = useCallback(() => {
    if (!inputRef.current) return;
    inputRef.current.click();
  }, []);

  const editSubmit = () =>
    request
      .patch("/user", editData)
      .then((response) => {
        console.log(response.status);
        return true;
      })
      .catch((error) => {
        console.log(error);
        return false;
      });

  const compressImage = async (image: File) => {
    const options = {
      maxSizeMb: 1,
      maxWidthOrHeight: 300,
    };
    try {
      const compressedFile = await imageCompression(image, options);
      const resultFile = new File([compressedFile], compressedFile.name, {
        type: compressedFile.type,
      });
      return resultFile;
    } catch (error) {
      console.log(error);
    }
  };

  const submitHandler = async () => {
    //const nicknameRegEx = /^([a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]).{1,10}$/;

    //if (!nicknameRegEx.test(editData.name)) {
    //alert("닉네임 형식에 맞춰주세요");
    //} else {
    const result = await editSubmit();
    if (result) {
      alert("회원정보 수정이 완료되었습니다.");
      replace("MyPageActivity", {});
    } else {
      alert("회원정보 수정에 실패하였습니다.");
    }
  };

  return (
    <div className="h-[93%] overflow-y-scroll scrollbar-hide">
      <div className="h-52 flex flex-col pt-[30px] mb-4">
        <div className=" text-2xl font-bold mb-[25px] ml-[20px]">
          회원정보 수정
        </div>
        <div className="flex w-full pl-[20px]">
          <div className="flex flex-row items-center mr-5">
            <input
              type="file"
              name="profile_photo"
              className="hidden"
              onChange={uploadPhoto}
              accept="image/*"
              ref={inputRef}
            />
            <img
              className="rounded-full w-[120px] h-[120px] "
              src={editPhoto.profile_photo}
              onClick={onUploadPhoto}
            />
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col mb-3">
              <div className="text-[#db9cda] text-base font-medium">이메일</div>
              <div className="text-[#AFADF5] text-base font-semibold border-b-2">
                {email}
              </div>
            </div>
            <div className="flex flex-col mb-3">
              <div className="text-[#db9cda] text-base font-medium">성별</div>
              <div className="text-[#AFADF5] text-base font-semibold border-b-2">
                {gender ? "남성" : "여성"}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-48 pl-[24px] pr-[24px]">
        <div className="flex flex-row mb-3">
          <div className="text-base text-[#db9cda] font-medium w-[29%]">
            닉네임
          </div>
          <div className="flex w-[71%] border-b-2 items-center">
            <input
              name="name"
              value={editData.name}
              className="w-full text-[#AFADF5] text-base font-semibold  outline-0"
              onChange={changeHandler}
            />
            {editData.name ? (
              <AiFillCloseCircle
                className="opacity-60"
                onClick={() => setEditData((prev) => ({ ...prev, name: "" }))}
              />
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="flex flex-row mb-3">
          <div className="text-[#db9cda] text-base font-medium w-[29%]">
            학과
          </div>
          <div className="flex w-[71%] border-b-2 items-center">
            <input
              name="major"
              value={editData.major}
              className="w-full text-[#AFADF5] text-base font-semibold outline-0"
              onChange={changeHandler}
            />
            {editData.major ? (
              <AiFillCloseCircle
                className="opacity-60"
                onClick={() => setEditData((prev) => ({ ...prev, major: "" }))}
              />
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="flex flex-row mb-3">
          <div className="text-[#db9cda] text-base font-medium w-[29%]">
            학년
          </div>
          <div className="flex w-[71%] border-b-2 items-center">
            <input
              name="grade"
              value={editData.grade}
              className="w-full text-[#AFADF5] text-base font-semibold  outline-0"
              onChange={changeHandler}
            />
            {editData.grade ? (
              <AiFillCloseCircle
                className="opacity-60"
                onClick={() => setEditData((prev) => ({ ...prev, grade: 0 }))}
              />
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="flex flex-row mb-3">
          <div className="text-[#db9cda] text-base font-medium w-[29%]">
            나이
          </div>
          <div className="flex w-[71%] border-b-2 items-center">
            <input
              type="text"
              name="age"
              value={editData.age}
              className="w-full text-[#AFADF5] text-base font-semibold  outline-0"
              onChange={changeHandler}
            />
            {editData.age ? (
              <AiFillCloseCircle
                className="opacity-60"
                onClick={() => setEditData((prev) => ({ ...prev, age: 0 }))}
              />
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="flex flex-row">
          <div className="text-[#db9cda] text-base font-medium w-[29%]">
            오픈채팅 링크
          </div>
          <div className="flex w-[71%] border-b-2 items-center">
            <input
              name="kakao_link"
              value={editData.kakao_link}
              className="w-full text-[#AFADF5] text-base font-semibold outline-0"
              onChange={changeHandler}
            />
            {editData.kakao_link ? (
              <AiFillCloseCircle
                className="opacity-60"
                onClick={() =>
                  setEditData((prev) => ({ ...prev, kakao_link: "" }))
                }
              />
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      <div className="h-60"></div>
      <div className="flex w-full h-[9%] justify-center">
        <button
          className="text-center w-[80%] h-[50%] ring-2 ring-[#9d6ddd] text-[#9d6ddd] bg-white bg-opacity-60 font-extrabold text-sm rounded-md shadow-button"
          onClick={submitHandler}
        >
          회원정보 수정
        </button>
      </div>
    </div>
  );
};

export default ProfileEdit;
