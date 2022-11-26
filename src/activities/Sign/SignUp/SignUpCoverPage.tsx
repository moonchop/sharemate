import { BiBadgeCheck } from "react-icons/bi";

const SignUpCoverPage = ({ handleGoPrev, handleGoNext }: any) => {
  return (
    <div className="w-full h-full bg-purple-100 grid grid-cols-1 place-items-center">
      <div className="pt-12 -mb-28 mt-8">
        <BiBadgeCheck size="70px" className="text-[#ab82e0]" />
      </div>
      <p className="text-center text-[#ab82e0] font-semibold text-xl ">
        회원가입 완료!
        <br />
      </p>
      <p className="text-center text-[#ab82e0] -my-8 font-semibold text-2xl">
        룸메이트 매칭을 위한
        <br /> 정보 등록을 진행할까요?
      </p>
      <button
        onClick={handleGoNext}
        className="w-[240px] h-[44px] m-2 ring-2 -mt-16 ring-[#ab82e0] text-[#ab82e0] font-extrabold text-sm rounded-md shadow-button animate-pulse"
      >
        정보 등록하러 가기
      </button>
    </div>
  );
};
export default SignUpCoverPage;
