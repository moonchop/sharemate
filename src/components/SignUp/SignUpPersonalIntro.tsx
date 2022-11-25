import { useEffect, useState } from "react";
import { BiBulb } from "react-icons/bi";
import { useForm } from "react-hook-form";
import { useSaveFormData } from "../../hooks/useSaveFormData";
import { FavorApi } from "../../utils/api/auth";

const SignUpPersonalIntro = ({ handleGoPrev, handleGoNext }: any) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const { setData, getData: getThirdData } = useSaveFormData("third");
  const { getData: getSecondData } = useSaveFormData("second");

  const onSubmit = async (data: any) => {
    await new Promise((r) => setTimeout(r, 1000));
    setData(data);

    const result = { ...getThirdData(), ...getSecondData() };

    console.log(result);

    if (Object.values(data).every((x) => x !== null && x !== "")) {
      FavorApi(result).catch((err) => console.error(err));
      handleGoNext();
    } else {
      alert("작성되지 않은 칸이 존재합니다.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="m-2 mb-14">
          <p className="my-4 mt-10 ml-2 text-md">
            자기소개 글을 입력해주세요.(50자 이내)
          </p>
          <input
            className=" w-full h-[150px] px-4 mb-8 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-[#F65B8082] border border-coolGray-200 rounded-lg shadow-input"
            id="selfIntro"
            type="text"
            {...register("selfIntro")}
          />
          <div className="flex items-center ">
            <p className="my-4 mt-10 ml-2 text-md">
              카카오톡 1:1 오픈채팅 링크를 입력해주세요.
            </p>
            {/* <BiBulb
              className="float-right ml-[85px] mt-7 opacity-50"
              onClick={() => console.log("도움말")}
            /> */}
          </div>
          <input
            className="placeholder:text-sm w-full px-4 mb-8 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-[#F65B8082] border border-coolGray-200 rounded-lg shadow-input"
            id="chatLink"
            type="text"
            placeholder="다른 사람들과 채팅을 하기 위해서 링크가 필요합니다."
            {...register("chatLink")}
          />
        </div>
        <button
          onClick={handleGoPrev}
          className="w-[100px] h-[44px] m-2 float-left ring-2 ring-[#ab82e0] text-[#ab82e0] font-extrabold text-sm borde rounded-md shadow-button"
        >
          이전
        </button>
        <button
          disabled={isSubmitting}
          className="w-[100px] h-[44px] m-2 float-right ring-2 ring-[#ab82e0] text-[#ab82e0] font-extrabold text-sm borde rounded-md shadow-button"
        >
          시작하기
        </button>
      </form>
    </div>
  );
};
export default SignUpPersonalIntro;
