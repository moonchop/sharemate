const SignUpSecond = ({ handleGoPrev, handleGoNext }: any) => {
  return (
    <>
      <button onClick={handleGoPrev}>이전</button>
      <button onClick={handleGoNext}>다음</button>
    </>
  );
};

export default SignUpSecond;
