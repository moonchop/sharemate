import { useRadio } from "../hooks/useRadio";

const SignUpSecond = ({ handleGoPrev, handleGoNext }: any) => {
  const { Component: GenderSelectComponent } = useRadio(["남", "여"], "col");
  const { Component: GradeSelectComponent } = useRadio(
    ["1", "2", "3", "4"],
    "col"
  );
  const { Component: ForeignSelectComponent } = useRadio(
    ["내국인", "외국인"],
    "col"
  );
  const { Component: EandISelectComponent } = useRadio(["E", "I"], "row");
  const { Component: NandSSelectComponent } = useRadio(["N", "S"], "row");
  const { Component: TandFSelectComponent } = useRadio(["T", "F"], "row");
  const { Component: JandPSelectComponent } = useRadio(["J", "P"], "row");

  return (
    <div className="h-[85%] overflow-y-scroll">
      <div className="my-10 ">
        <p className="mt-2 ml-2">성별을 선택해주세요.</p>
        <GenderSelectComponent />

        <p className="mt-2 ml-2">출생년도를 입력해주세요.</p>
        <div className="flex items-center justify-center mb-3">
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
      <p>MBTI를 선택해주세요.</p>
      <div className="flex">
        <EandISelectComponent />
        <NandSSelectComponent />
        <TandFSelectComponent />
        <JandPSelectComponent />
      </div>
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
