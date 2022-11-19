import { useEffect, useState } from "react";
import { useRadio } from "./useRadio";

export const useMbti = () => {
  const [mbti, setMbti] = useState<any>({
    EI: null,
    NS: null,
    TF: null,
    JP: null,
  });

  const { Component: EandISelect, state: EI } = useRadio({
    contentList: ["E", "I"],
    arrange: "row",
    defaultState: mbti.EI,
  });
  const { Component: NandSSelect, state: NS } = useRadio({
    contentList: ["N", "S"],
    arrange: "row",
    defaultState: mbti.NS,
  });
  const { Component: TandFSelect, state: TF } = useRadio({
    contentList: ["T", "F"],
    arrange: "row",
    defaultState: mbti.TF,
  });
  const { Component: JandPSelect, state: JP } = useRadio({
    contentList: ["J", "P"],
    arrange: "row",
    defaultState: mbti.JP,
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
        <p className="mt-2 ml-2 text-xl">MBTI를 선택해주세요.</p>
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
  const { Component: MbtiSelect, state: mbtiState } = useMbti();
  const { Component: GenderSelect, state: genderState } = useRadio({
    contentList: ["남", "여"],
    title: "성별을 선택해주세요.",
  });
  const { Component: GradeSelect, state: gradeState } = useRadio({
    contentList: ["1", "2", "3", "4"],
    title: "학년을 선택해주세요.",
  });
  const { Component: ForeignSelect, state: foreignState } = useRadio({
    contentList: ["내국인", "외국인"],
    title: "국적을 선택해주세요.",
  });

  const { Component: SleepTimeSelect, state: SleepTimeState } = useRadio({
    contentList: ["5시간 미만", "5시간 이상"],
    title: "수면 시간을 선택해주세요.",
  });
  const { Component: SmokingSelect, state: smokingState } = useRadio({
    contentList: ["흡연", "비흡연"],
    title: "흡연 유무를 선택해주세요.",
  });
  const { Component: LivingPatternSelect, state: livingPatternState } =
    useRadio({
      contentList: ["올빼미형", "아침형"],
      title: "생활 패턴을 선택해주세요.",
    });
  const { Component: DrinkSelect, state: drinkState } = useRadio({
    contentList: ["잦은 편", "드문 편"],
    title: "음주 빈도를 선택해주세요.",
  });
  const { Component: CleannessSelect, state: cleannessState } = useRadio({
    contentList: ["청결에 예민", "청결에 둔감"],
    title: "청결도를 선택해주세요.",
  });
  const { Component: SnoringSelect, state: snoringState } = useRadio({
    contentList: ["유", "무"],
    title: "코골이 유무를 선택해주세요.",
  });

  useEffect(() => {
    console.log(
      "진짜",
      mbtiState,
      genderState,
      gradeState,
      foreignState,
      SleepTimeState,
      smokingState,
      livingPatternState,
      drinkState,
      cleannessState,
      snoringState
    );
  }, [
    mbtiState,
    genderState,
    gradeState,
    foreignState,
    SleepTimeState,
    smokingState,
    livingPatternState,
    drinkState,
    cleannessState,
    snoringState,
  ]);

  return {
    state: {
      mbtiState,
      genderState,
      gradeState,
      foreignState,
      SleepTimeState,
      smokingState,
      livingPatternState,
      drinkState,
      cleannessState,
      snoringState,
    },
    Component: () => (
      <>
        <h1 className="text-[33px] py-[30px] p-3 text-bold text-left text-black mb-14 ml-2">
          나의 <br />
          룸메이트 취향은?
        </h1>
        <div className="my-10">
          <GenderSelect />

          <MbtiSelect />
          <GradeSelect />
          <ForeignSelect />
        </div>
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
