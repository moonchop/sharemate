import { useEffect, useState } from "react";
import { favorProps } from "../stores/user";
import { useRadio } from "./useRadio";

export const useMbti = (defaultValue?: string[]) => {
  const [mbti, setMbti] = useState<any>({
    EI: null,
    NS: null,
    TF: null,
    JP: null,
  });

  const { Component: EandISelect, state: EI } = useRadio({
    contentList: ["E", "I"],
    arrange: "row",
    defaultState: defaultValue ? defaultValue[0] : mbti.EI,
  });
  const { Component: NandSSelect, state: NS } = useRadio({
    contentList: ["N", "S"],
    arrange: "row",
    defaultState: defaultValue ? defaultValue[1] : mbti.NS,
  });
  const { Component: TandFSelect, state: TF } = useRadio({
    contentList: ["T", "F"],
    arrange: "row",
    defaultState: defaultValue ? defaultValue[2] : mbti.TF,
  });
  const { Component: JandPSelect, state: JP } = useRadio({
    contentList: ["J", "P"],
    arrange: "row",
    defaultState: defaultValue ? defaultValue[3] : mbti.JP,
  });

  useEffect(() => {
    if (EI && NS && TF && JP)
      setMbti({
        EI,
        NS,
        TF,
        JP,
      });
  }, [EI, NS, TF, JP]);

  return {
    state: mbti.EI + mbti.NS + mbti.TF + mbti.JP,
    Component: () => (
      <>
        <p className="mt-2 ml-2 text-md">MBTI를 선택해주세요.</p>
        <div className="flex items-center justify-center">
          <EandISelect />
          <NandSSelect />
          <TandFSelect />
          <JandPSelect />
        </div>
      </>
    ),
  };
};

export const useRegisterForm = () => {
  const [defaultData, setDefaultData] = useState<favorProps>(() => {
    if (typeof window !== "undefined") {
      const saved = window.sessionStorage.getItem("second");
      if (saved !== null) {
        console.log("not null");
        return JSON.parse(saved);
      } else {
        return {
          mbti: "",
          sleepTime: "",
          smoking: "",
          wakeupTime: "",
          drinking: "",
          studyTime: "",
          cleanness: "",
          snoring: "",
          selfIntro: "",
        };
      }
    }
  });

  // useEffect(() => {
  //   const data = JSON.parse(sessionStorage.getItem("second"));
  //   Object.entries(data).map(([key, value]) => {
  //     setDefaultData((cur) => {
  //       let newCondition: any = { ...cur };
  //       newCondition[key] = value;
  //       console.log("in", newCondition);
  //       return newCondition;
  //     });
  //   });
  // }, []);
  const { Component: MbtiSelect, state: mbti } = useMbti([
    defaultData.mbti.substring(0, 1),
    defaultData.mbti.substring(1, 2),
    defaultData.mbti.substring(2, 3),
    defaultData.mbti.substring(3, 4),
  ]);
  const { Component: SleepTimeSelect, state: sleepTime } = useRadio({
    contentList: ["5시간 미만", "5시간 이상"],
    title: "수면 시간을 선택해주세요.",
    defaultState: defaultData.sleepTime,
  });
  const { Component: SmokingSelect, state: smoking } = useRadio({
    contentList: ["흡연", "비흡연"],
    title: "흡연 유무를 선택해주세요.",
    defaultState: defaultData.smoking,
  });
  const { Component: LivingPatternSelect, state: studyTime } = useRadio({
    contentList: ["올빼미형", "아침형"],
    title: "생활 패턴을 선택해주세요.",
    defaultState: defaultData.studyTime,
  });
  const { Component: DrinkSelect, state: drinking } = useRadio({
    contentList: ["1", "2", "3", "4"],
    title: "일주일 내 음주 횟수를 입력해주세요.",
    defaultState: defaultData.drinking,
  });
  const { Component: CleannessSelect, state: cleanness } = useRadio({
    contentList: ["청결에 예민", "청결에 둔감"],
    title: "청결도를 선택해주세요.",
    defaultState: defaultData.cleanness,
  });
  const { Component: SnoringSelect, state: snoring } = useRadio({
    contentList: ["상", "중", "하", "무"],
    title: "코골이 유무를 선택해주세요.",
    defaultState: defaultData.snoring,
  });
  const { Component: WakeUpTime, state: wakeupTime } = useRadio({
    contentList: ["6-8시", "8-10시", "10-12시"],
    title: "기상 시간을 선택해주세요.",
    defaultState: defaultData.wakeupTime,
  });

  // useEffect(() => {
  //   console.log(
  //     mbti,
  //     sleepTime,
  //     smoking,
  //     studyTime,
  //     drinking,
  //     cleanness,
  //     snoring,
  //     wakeupTime
  //   );
  // }, [
  //   mbti,
  //   sleepTime,
  //   smoking,
  //   studyTime,
  //   drinking,
  //   cleanness,
  //   snoring,
  //   wakeupTime,
  // ]);

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
      hashtags: [],
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
