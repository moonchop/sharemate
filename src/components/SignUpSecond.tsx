import { useRadio } from "./useRadio";

const SignUpSecond = ({ handleGoPrev, handleGoNext }: any) => {
  const { Component: GanderSelectComponent, onSubmit } = useRadio([
    "1",
    "2",
    "3",
    "4",
    "기타",
  ]);

  return (
    <>
      <GanderSelectComponent />
      <button onClick={handleGoPrev}>이전</button>
      <button onClick={handleGoNext}>다음</button>
    </>
  );
};

export default SignUpSecond;
