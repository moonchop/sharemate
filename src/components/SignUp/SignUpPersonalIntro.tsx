import { useEffect } from "react";
import { BiBulb } from "react-icons/bi";

const SignUpPersonalIntro = ({ handleGoPrev, handleGoNext }: any) => {
  useEffect(() => {
    const data = sessionStorage.getItem("intro");
    if (data === null) return;
    (document.getElementById("intro") as any).value = data;
  });

  return (
    <div>
      <div className="m-2 mb-14">
        <p className="my-4 mt-10 ml-2">
          자기소개 글을 입력해주세요.(50자 이내)
        </p>
        <input
          className=" w-full h-[150px] px-4 mb-8 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-[#F65B8082] border border-coolGray-200 rounded-lg shadow-input"
          id="intro"
          type="text"
          onChange={(e) => sessionStorage.setItem("intro", e.target.value)}
        />
        <div className="flex items-center ">
          <p className="my-4 mt-10 ml-2">
            카카오톡 1:1 오픈채팅 링크를 입력해주세요.
          </p>
          <BiBulb
            className="float-right ml-[85px] mt-7 opacity-50"
            onClick={() => console.log("도움말")}
          />
        </div>
        <input
          className="w-full px-4 mb-8 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-[#F65B8082] border border-coolGray-200 rounded-lg shadow-input"
          id="chatLink"
          type="text"
          onChange={(e) => sessionStorage.setItem("chatLink", e.target.value)}
        />
      </div>
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
        시작하기
      </button>
    </div>
  );
};
export default SignUpPersonalIntro;
