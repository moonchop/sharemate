import { useEffect, useState } from "react";
import { BiBulb } from "react-icons/bi";
import { useForm } from "react-hook-form";
import { useSaveFormData } from "../../../hooks/useSaveFormData";
import { FavorApi } from "../../../utils/api/auth";
import { useFlow } from "../../../stackflow";

const SignUpPersonalIntro = ({ handleGoPrev, handleGoNext }: any) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const { setData, getData: getThirdData } = useSaveFormData("third");
  const { getData: getSecondData } = useSaveFormData("second");
  const { push, replace } = useFlow();
  const onSubmit = async (data: any) => {
    await new Promise((r) => setTimeout(r, 1000));
    setData(data);

    const result = { ...getThirdData(), ...getSecondData() };

    console.log(result);

    if (Object.values(data).every((x) => x !== null && x !== "")) {
      try {
        const res = await FavorApi(result);
        console.log(res);
        replace("MainActivity", {});
      } catch (e) {
        console.log(e);
      }
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
          <textarea
            className=" w-full h-[150px] px-4 mb-8 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-[#F65B8082] border border-coolGray-200 rounded-lg shadow-input"
            id="selfIntro"
            // type="text"
            {...register("selfIntro")}
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
