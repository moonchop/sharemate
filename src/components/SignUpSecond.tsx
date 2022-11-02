import { useRadio } from "../hooks/useRadio";

const SignUpSecond = ({ handleGoPrev, handleGoNext }: any) => {
  const { Component: GenderSelectComponent } = useRadio(
    "gender",
    ["남", "여"],
    "col"
  );
  const { Component: GradeSelectComponent } = useRadio(
    "grade",
    ["1", "2", "3", "4"],
    "col"
  );
  const { Component: ForeignSelectComponent } = useRadio(
    "foreign",
    ["내국인", "외국인"],
    "col"
  );
  const { Component: EandISelectComponent } = useRadio(
    "e_i",
    ["E", "I"],
    "row"
  );
  const { Component: NandSSelectComponent } = useRadio(
    "n_s",
    ["N", "S"],
    "row"
  );
  const { Component: TandFSelectComponent } = useRadio(
    "t_f",
    ["T", "F"],
    "row"
  );
  const { Component: JandPSelectComponent } = useRadio(
    "j_p",
    ["J", "P"],
    "row"
  );
  const { Component: SleepTimeSelectComponent } = useRadio(
    "sleep_time",
    ["5시간 미만", "5시간 이상"],
    "col"
  );
  const { Component: SmokingSelectComponent } = useRadio(
    "smoke",
    ["흡연", "비흡연"],
    "col"
  );
  const { Component: LivingPatternSelectComponent } = useRadio(
    "living",
    ["올빼미형", "아침형"],
    "col"
  );
  const { Component: DrinkSelectComponent } = useRadio(
    "drink",
    ["잦은 편", "드문 편"],
    "col"
  );
  const { Component: CleannessSelectComponent } = useRadio(
    "clean",
    ["청결에 예민", "청결에 둔감"],
    "col"
  );
  const { Component: SnoringSelectComponent } = useRadio(
    "snore",
    ["유", "무"],
    "col"
  );

  return (
    <div className="h-[100%] overflow-y-scroll">
      <div className="my-10 ">
        <p className="mt-2 ml-2">성별을 선택해주세요.</p>
        <GenderSelectComponent />

        <p className="mt-2 ml-2">출생년도를 입력해주세요.</p>
        <div className="flex items-center justify-center mb-[60px]">
          <input
            className="w-[70px] underline text-base text-coolGray-900 placeholder-slate-300"
            id="code"
            type="number"
            name="code"
            placeholder="2000"
          />
          <p>년도</p>
        </div>

        <p className="mt-2 ml-2">학년을 선택해주세요.</p>
        <GradeSelectComponent />
        <p className="mt-2 ml-2">외국인 여부</p>
        <ForeignSelectComponent />
      </div>
      <p className="mt-2 ml-2">MBTI를 선택해주세요.</p>
      <div className="flex">
        <EandISelectComponent />
        <NandSSelectComponent />
        <TandFSelectComponent />
        <JandPSelectComponent />
      </div>
      <p className="mt-2 ml-2">수면시간을 선택해주세요.</p>
      <SleepTimeSelectComponent />
      <p className="mt-2 ml-2">흡연 유무를 선택해주세요.</p>
      <SmokingSelectComponent />
      <p className="mt-2 ml-2">생활 패턴을 선택해주세요.</p>
      <LivingPatternSelectComponent />
      <p className="mt-2 ml-2">음주 빈도를 선택해주세요.</p>
      <DrinkSelectComponent />
      <p className="mt-2 ml-2">청결도를 선택해주세요.</p>
      <CleannessSelectComponent />
      <p className="mt-2 ml-2">코골이 유무를 선택해주세요.</p>
      <SnoringSelectComponent />

      <button
        onClick={handleGoPrev}
        className="w-[100px] h-[44px] m-2 float-left  bg-[#FCABBE] hover:bg-[#F65B8082] font-medium text-sm text-black rounded-md shadow-button"
      >
        이전
      </button>
      <button
        onClick={handleGoNext}
        className=" w-[100px] h-[44px] m-2 float-right bg-[#FCABBE] hover:bg-[#F65B8082] font-medium text-sm text-black rounded-md shadow-button"
      >
        다음
      </button>
    </div>
  );
};

export default SignUpSecond;
