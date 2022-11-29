import { useEffect, useState } from "react";
import useModifyForm from "../../hooks/useModifyForm";
import { useFlow } from "../../stackflow";
import request from "../../stores/Request";
import { useFavor, useUser } from "../../stores/user";
import InputComponent from "../../components/InputComponent";

const ModifyFavor = () => {
  const { pop } = useFlow();
  const { Component: ModifyForm, state } = useModifyForm();
  const [intro, setIntro] = useState("");
  const [hash, setHash] = useState({ hashtags: ["", ""] });
  const { hashtags } = useUser();

  const changeHashtag = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setHash((prev: any) => ({ ...prev, [hashtags[Number(name)]]: value }));
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
    setHash({ hashtags: hashtags });
  }, []);

  return (
    <div className="px-3 py-8 h-[93%] overflow-y-scroll scrollbar-hide">
      <ModifyForm />
      <div className="m-2 mb-14">
        <p className="text-base">자신을 표현하는 해시태그를 입력해주세요.</p>
        <InputComponent
          placeholder="성격좋음"
          onChange={changeHashtag}
          id="0"
          //value={hash.hashtags[0]}
        />
        <InputComponent
          placeholder="잘 안 들어옴"
          onChange={changeHashtag}
          id="1"
          //value={hash.hashtags[1]}
        />
        <InputComponent
          placeholder="조용함"
          id="2"
          onChange={changeHashtag}
          //value={hash.hashtags[2]}
        />
        <p className="my-4 mt-10 ml-2 text-md">
          자기소개 글을 입력해주세요.(50자 이내)
        </p>
        <input
          className=" w-full h-[150px] px-4 mb-8 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-[#F65B8082] border border-coolGray-200 rounded-lg shadow-input"
          id="selfIntro"
          value={intro}
          type="text"
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
    </div>
  );
};

export default ModifyFavor;
