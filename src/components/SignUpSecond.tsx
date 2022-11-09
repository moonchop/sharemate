import { useRadio } from "../hooks/useRadio";
import SignUpFirst from "./SignUpFirst";

const SignUpSecond = ({ handleGoPrev, handleGoNext }: any) => {
  const { Component: GenderSelectComponent } = useRadio(
    "성별을 선택해주세요.",
    "gender",
    ["남", "여"],
    "col"
  );
  const { Component: GradeSelectComponent } = useRadio(
    "학년을 선택해주세요.",
    "grade",
    ["1", "2", "3", "4"],
    "col"
  );
  const { Component: ForeignSelectComponent } = useRadio(
    "국적을 선택해주세요.",
    "foreign",
    ["내국인", "외국인"],
    "col"
  );
  const { Component: EandISelectComponent } = useRadio(
    "",
    "e_i",
    ["E", "I"],
    "row"
  );
  const { Component: NandSSelectComponent } = useRadio(
    "",
    "n_s",
    ["N", "S"],
    "row"
  );
  const { Component: TandFSelectComponent } = useRadio(
    "",
    "t_f",
    ["T", "F"],
    "row"
  );
  const { Component: JandPSelectComponent } = useRadio(
    "",
    "j_p",
    ["J", "P"],
    "row"
  );
  const { Component: SleepTimeSelectComponent } = useRadio(
    "수면 시간을 선택해주세요.",
    "sleep_time",
    ["5시간 미만", "5시간 이상"],
    "col"
  );
  const { Component: SmokingSelectComponent } = useRadio(
    "흡연 유무를 선택해주세요.",
    "smoke",
    ["흡연", "비흡연"],
    "col"
  );
  const { Component: LivingPatternSelectComponent } = useRadio(
    "생활 패턴을 선택해주세요.",
    "living",
    ["올빼미형", "아침형"],
    "col"
  );
  const { Component: DrinkSelectComponent } = useRadio(
    "음주 빈도를 선택해주세요.",
    "drink",
    ["잦은 편", "드문 편"],
    "col"
  );
  const { Component: CleannessSelectComponent } = useRadio(
    "청결도를 선택해주세요.",
    "clean",
    ["청결에 예민", "청결에 둔감"],
    "col"
  );
  const { Component: SnoringSelectComponent } = useRadio(
    "코골이 유무를 선택해주세요.",
    "snore",
    ["유", "무"],
    "col"
  );

  return (
    <div className="h-[100%] overflow-y-scroll">
      <h1 className="text-[33px] py-[30px] p-3 text-bold text-left text-black mb-14 ml-2">
        나의 <br />
        룸메이트 취향은?
      </h1>
      <div className="my-10">
        <GenderSelectComponent />
        <p className="mt-2 ml-2 text-xl">출생년도를 입력해주세요.</p>
        <div className="flex items-center justify-center mb-[100px] rounded-xl bg-gray-100 mx-2 py-4 mt-1">
          <input
            className="w-[70px] underline text-base text-coolGray-900 bg-transparent"
            id="code"
            type="number"
            name="code"
            placeholder="2000"
            onChange={(e) => sessionStorage.setItem("birth", e.target.value)}
          />
          <p>년도</p>
        </div>

        <GradeSelectComponent />
        <ForeignSelectComponent />
      </div>
      <p className="mt-2 ml-2 text-xl">MBTI를 선택해주세요.</p>
      <div className="flex items-center justify-center">
        <EandISelectComponent />
        <NandSSelectComponent />
        <TandFSelectComponent />
        <JandPSelectComponent />
      </div>
      <SleepTimeSelectComponent />
      <SmokingSelectComponent />
      <LivingPatternSelectComponent />
      <DrinkSelectComponent />
      <CleannessSelectComponent />
      <SnoringSelectComponent />

      <button
        onClick={handleGoPrev}
        className="w-[100px] h-[44px] m-2 float-left ring-2 ring-[#ab82e0] text-[#ab82e0] font-extrabold text-sm borde rounded-md shadow-button"
      >
        이전
      </button>
      <button
        onClick={handleGoNext}
        className="w-[100px] h-[44px] m-2 float-right ring-2 ring-[#ab82e0] text-[#ab82e0] font-extrabold text-sm borde rounded-md shadow-button"
      >
        다음
      </button>
    </div>
  );
};

export default SignUpSecond;
