import { useMbti } from "./useRegisterForm";
import { useEffect, useState } from "react";
import { useRadio } from "./useRadio";

const useModifyForm = () => {
  const { Component: MbtiSelect, state: mbti } = useMbti(["E", "N", "F", "P"]);
  ////useMbti(string[]) <-- string 배열에 각 MBTI 값 넣어주면 됨

  const { Component: SleepTimeSelect, state: sleepTime } = useRadio({
    contentList: ["5시간 미만", "5시간 이상"],
    title: "수면 시간을 선택해주세요.",
    defaultState: "5시간 미만", /// useRadio() <-- defaultState 에 string 값으로 기본 값 넣어주면 됨
  });
  const { Component: SmokingSelect, state: smoking } = useRadio({
    contentList: ["흡연", "비흡연"],
    title: "흡연 유무를 선택해주세요.",
    defaultState: "흡연", //여기
  });
  const { Component: LivingPatternSelect, state: studyTime } = useRadio({
    contentList: ["올빼미형", "아침형"],
    title: "생활 패턴을 선택해주세요.",
    defaultState: "올빼미형", //여기
  });
  const { Component: DrinkSelect, state: drinking } = useRadio({
    contentList: ["1", "2", "3", "4"],
    title: "일주일 내 음주 횟수를 입력해주세요.",
    defaultState: "1", //여기
  });
  const { Component: CleannessSelect, state: cleanness } = useRadio({
    contentList: ["청결에 예민", "청결에 둔감"],
    title: "청결도를 선택해주세요.",
    defaultState: "청결에 예민", //여기
  });
  const { Component: SnoringSelect, state: snoring } = useRadio({
    contentList: ["상", "중", "하", "무"],
    title: "코골이 유무를 선택해주세요.",
    defaultState: "상", //여기
  });
  const { Component: WakeUpTime, state: wakeupTime } = useRadio({
    contentList: ["6-8시", "8-10시", "10-12시"],
    title: "기상 시간을 선택해주세요.",
    defaultState: "6-8시", //여기
  });

  useEffect(() => {
    console.log(
      mbti,
      sleepTime,
      smoking,
      studyTime,
      drinking,
      cleanness,
      snoring,
      wakeupTime
    );
  }, [
    mbti,
    sleepTime,
    smoking,
    studyTime,
    drinking,
    cleanness,
    snoring,
    wakeupTime,
  ]);

  return {
    state: {
      mbti,
      sleepTime,
      smoking,
      studyTime,
      drinking,
      cleanness,
      snoring,
      wakeupTime,
    },
    Component: () => (
      <>
        <p className="text-2xl  text-semibold text-left text-black mb-14 ">
          당신은 <br />
          어떤 룸메이트인가요?
        </p>
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
