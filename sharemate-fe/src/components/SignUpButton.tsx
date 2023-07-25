const SignUpButton = (
  { handleGoNext }: { handleGoNext: () => void },
  text: string,
  option: string
) => {
  return (
    <button
      onClick={handleGoNext}
      className={`${option}flex justify-center w-[100px] h-[44px] pt-3 float-right my-10 -mr-[65px] ring-2 ring-[#ab82e0] text-[#ab82e0] font-extrabold text-sm borde rounded-md shadow-button`}
    >
      {text}
    </button>
  );
};
export default SignUpButton;
