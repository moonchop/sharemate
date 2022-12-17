import { useEffect, useState } from "react";
import useModifyForm from "../../hooks/useModifyForm";
import { useFlow } from "../../stackflow";
import request from "../../stores/Request";
import { useFavor, useUser } from "../../stores/user";

const ModifyFavor = () => {
  const { pop } = useFlow();
  const { Component: ModifyForm, state } = useModifyForm();
  const [intro, setIntro] = useState("");
  const { hashtags } = useUser();
  const [hash, setHash] = useState<string[]>();
  const changeHashtag = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    return setHash((prev: any) => ({ ...prev, [name]: value }));
  };

  const submitHandler = () => {
    const result = {
      mbti: state.Mbti,
      sleepTime: state.SleepTime,
      smoking: state.Smoking,
      wakeupTime: state.WakeupTime,
      drinking: state.Drinking,
      studyTime: state.StudyTime,
      cleanness: state.Cleanness,
      snoring: state.Snoring,
      selfIntro: intro,
      hashtags: Object.values(hash),
    };
    console.log(result);
    request
      .put("/favor", result)
      .then((response) => {
        alert("취향수정이 완료되었습니다.");
        pop();
      })
      .catch((error) => {
        alert("다시 시도해 주세요");
        console.log(error);
      });
  };

  const {
    mbti,
    sleepTime,
    smoking,
    wakeupTime,
    drinking,
    studyTime,
    cleanness,
    snoring,
    selfIntro,
  } = useFavor();

  useEffect(() => {
    state.Mbti = mbti;
    state.SleepTime = sleepTime;
    state.Smoking = smoking;
    state.WakeupTime = wakeupTime;
    state.Drinking = drinking;
    state.StudyTime = studyTime;
    state.Cleanness = cleanness;
    state.Snoring = snoring;
    setIntro(selfIntro);
    setHash(hashtags);
  }, []);

  useEffect(() => {
    hash &&
      Object.entries(hash).map(([key, value]) => {
        const element = document.getElementById(key);
        if (element !== null) (element as any).value = value;
      });
  }, [hash, []]);

  return (
    <div className="px-3 pb-8 h-[93%] overflow-y-scroll scrollbar-hide">
      <ModifyForm />
      <div className="m-2 mb-14">
        <p className="text-base">자신을 표현하는 해시태그를 입력해주세요.</p>

        <div className="flex items-center justify-center rounded-xl bg-gray-100 py-3 mt-3">
          <input
            className="w-full text-center text-coolGray-900 bg-transparent placeholder-slate-300 placeholder:text-md outline-none"
            id="0"
            type="text"
            name="0"
            placeholder="성격좋음"
            onChange={changeHashtag}
          />
        </div>
        <div className="flex items-center justify-center rounded-xl bg-gray-100 py-3 mt-3">
          <input
            className="w-full text-center text-coolGray-900 bg-transparent placeholder-slate-300 placeholder:text-md outline-none"
            id="1"
            type="text"
            name="1"
            placeholder="잘 안 들어옴"
            onChange={changeHashtag}
          />
        </div>
        <div className="flex items-center justify-center rounded-xl bg-gray-100 py-3 mt-3">
          <input
            className="w-full text-center text-coolGray-900 bg-transparent placeholder-slate-300 placeholder:text-md outline-none"
            id="2"
            type="text"
            name="2"
            placeholder="조용함"
            onChange={changeHashtag}
          />
        </div>
        <p className="my-4 mt-10 ml-2 text-md">
          자기소개 글을 입력해주세요.(50자 이내)
        </p>
        <textarea
          className="w-full h-[150px] px-4 mb-8 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-[#F65B8082] border border-coolGray-200 rounded-lg shadow-input"
          id="selfIntro"
          value={intro}
          onChange={(e) => {
            setIntro(e.target.value);
          }}
        />
        <button
          onClick={submitHandler}
          className="w-[100px] h-[44px] m-2 float-right ring-2 ring-[#ab82e0] text-[#ab82e0] font-extrabold text-sm borde rounded-md shadow-button"
        >
          수정하기
        </button>
      </div>
      <div className="h-96"></div>
    </div>
  );
};

export default ModifyFavor;
