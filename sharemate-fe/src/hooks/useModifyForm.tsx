import { useMbti } from "./useRegisterForm";
import { useEffect, useState } from "react";
import { useRadio } from "./useRadio";
import { useFavor } from "../stores/user";

const useModifyForm = () => {
  const {
    mbti,
    sleepTime,
    smoking,
    wakeupTime,
    drinking,
    studyTime,
    cleanness,
    snoring,
  } = useFavor();

  const { Component: MbtiSelect, state: Mbti } = useMbti([
    mbti.substring(0, 1),
    mbti.substring(1, 2),
    mbti.substring(2, 3),
    mbti.substring(3, 4),
  ]);
  ////useMbti(string[]) <-- string 배열에 각 MBTI 값 넣어주면 됨

  const { Component: SleepTimeSelect, state: SleepTime } = useRadio({
    contentList: ["5시간 미만", "5시간 이상"],
    title: "수면 시간을 선택해주세요.",
    defaultState: `${sleepTime}`, /// useRadio() <-- defaultState 에 string 값으로 기본 값 넣어주면 됨
  });
  const { Component: SmokingSelect, state: Smoking } = useRadio({
    contentList: ["흡연", "비흡연"],
    title: "흡연 유무를 선택해주세요.",
    defaultState: `${smoking}`, //여기
  });
  const { Component: LivingPatternSelect, state: StudyTime } = useRadio({
    contentList: ["올빼미형", "아침형"],
    title: "생활 패턴을 선택해주세요.",
    defaultState: `${studyTime}`, //여기
  });
  const { Component: DrinkSelect, state: Drinking } = useRadio({
    contentList: ["1", "2", "3", "4"],
    title: "일주일 내 음주 횟수를 입력해주세요.",
    defaultState: `${drinking}`, //여기
  });
  const { Component: CleannessSelect, state: Cleanness } = useRadio({
    contentList: ["청결에 예민", "청결에 둔감"],
    title: "청결도를 선택해주세요.",
    defaultState: `${cleanness}`, //여기
  });
  const { Component: SnoringSelect, state: Snoring } = useRadio({
    contentList: ["상", "중", "하", "무"],
    title: "코골이 유무를 선택해주세요.",
    defaultState: `${snoring}`, //여기
  });
  const { Component: WakeUpTime, state: WakeupTime } = useRadio({
    contentList: ["6-8시", "8-10시", "10-12시"],
    title: "기상 시간을 선택해주세요.",
    defaultState: `${wakeupTime}`, //여기
  });

  return {
    state: {
      Mbti,
      SleepTime,
      Smoking,
      StudyTime,
      Drinking,
      Cleanness,
      Snoring,
      WakeupTime,
    },
    Component: () => (
      <>
        <div className="text-2xl font-bold mb-[25px] pt-[30px] mx-[8px]">
          취향 정보 수정
        </div>
        <MbtiSelect />
        <WakeUpTime />
        <SleepTimeSelect />
        <SmokingSelect />
        <LivingPatternSelect />
        <DrinkSelect />
        <CleannessSelect />
        <SnoringSelect />
      </>
    ),
  };
};

export default useModifyForm;
