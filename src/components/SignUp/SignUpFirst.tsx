import { useForm } from "react-hook-form";
import { useSaveFormData } from "../../hooks/useSaveFormData";
import request from "../../stores/Request";

const SignUpFirst = ({ handleGoNext }: { handleGoNext: () => void }) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, errors },
  } = useForm();

  const { setData } = useSaveFormData("first");

  const SignUpSubmit = (data: any) => {
    request.post("./register/", data).catch((error) => console.log(error));
  };

  const checkEmail = async (email: string) => {
    return await request
      .post("/register/email", email)
      .then((response) => {
        console.log(response.status);
      })
      .catch((error) => console.log(error));
  };

  const onSubmit = async (data: any) => {
    await new Promise((r) => setTimeout(r, 1000));
    setData(data);
    handleGoNext();
  };

  return (
    <div className="py-[25px] p-3 overflow-y-scroll">
      <h1 className="text-[33px] text-bold text-left text-black mb-10 py-5">
        회원가입
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex">
          <div className="my-[0.8px] mr-1">* </div>
          <label className="text-base text-left text-black" htmlFor="name">
            이름
          </label>
        </div>
        <input
          className="w-full px-4 mb-5 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-[#ab82e0] border border-coolGray-200 rounded-lg shadow-input"
          id="name"
          type="text"
          placeholder="name"
          {...register("name", {
            required: "닉네임은 필수 입력입니다.",
            pattern: {
              value: /^([a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]).{1,10}$/,
              message: "닉네임 형식에 맞지 않습니다. (한글,영문,숫자 2~10자리)",
            },
          })}
        />
        {errors.name && (
          <small
            className="text-slate-300 w-full flex -mt-5 mb-3 ml-2"
            role="alert"
          >
            {errors.name.message as string}
          </small>
        )}

        <div className="flex">
          <div className="my-[0.8px] mr-1">* </div>
          <label className="text-base text-left pb-3 text-black" htmlFor="name">
            성별
          </label>
        </div>
        <label className="m-3">
          <input
            {...register("gender", { required: true })}
            type="radio"
            value="남"
            id="남"
          />
          남
        </label>
        <label className="m-3">
          <input
            {...register("gender", { required: true })}
            type="radio"
            value="여"
            id="여"
          />
          여
        </label>

        <div className="flex pt-6">
          <div className="my-[0.8px] mr-1">* </div>
          <label
            className="text-base text-left pb-2 text-black"
            htmlFor="password"
          >
            비밀번호
          </label>
        </div>
        <input
          className="w-full px-4 py-2.5 mb-5 text-base text-coolGray-900 font-normal outline-none focus:border-[#ab82e0] border border-coolGray-200 rounded-lg shadow-input"
          id="password"
          type="password"
          placeholder="******"
          {...register("password", {
            required: "비밀번호는 필수 입력입니다. ",
            pattern: {
              value: /^[A-Za-z0-9]{6,12}$/,
              message:
                "비밀번호 형식에 맞지 않습니다. (한글,영문,숫자 6~12 자리)",
            },
          })}
        />
        {errors.password && (
          <small
            className="text-slate-300 w-full flex -mt-5 mb-3 ml-2"
            role="alert"
          >
            {errors.password.message as string}
          </small>
        )}
        <div className="flex">
          <div className="my-[0.8px] mr-1">* </div>
          <label className="text-sm text-left text-black" htmlFor="major">
            학과
          </label>
        </div>
        <input
          className="w-full px-4 mb-5 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-[#ab82e0] border border-coolGray-200 rounded-lg shadow-input"
          id="major"
          type="text"
          placeholder="소프트웨어학과"
          {...register("major", {
            required: "필수 입력입니다.",
          })}
        />
        {errors.major && (
          <small
            className="text-slate-300 w-full flex -mt-5 mb-3 ml-2"
            role="alert"
          >
            {errors.major.message as string}
          </small>
        )}
        <div className="flex">
          <div className="my-[0.8px] mr-1">* </div>
          <label className="text-sm text-left text-black" htmlFor="birth">
            출생년도
          </label>
        </div>
        <input
          className="w-full px-4 mb-5 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-[#ab82e0] border border-coolGray-200 rounded-lg shadow-input"
          id="birth"
          type="date"
          placeholder="2001-01-29"
          {...register("birth", {
            required: "필수 입력입니다.",
          })}
        />
        {errors.birth && (
          <small
            className="text-slate-300 w-full flex -mt-5 mb-3 ml-2"
            role="alert"
          >
            {errors.birth.message as string}
          </small>
        )}
        <div className="flex">
          <div className="my-[0.8px] mr-1">* </div>
          <label className="text-sm text-left text-black" htmlFor="email">
            이메일
          </label>
        </div>
        <div className="w-full">
          <input
            className="w-[260px] px-4 mb-5 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-[#ab82e0] border border-coolGray-200 rounded-lg shadow-input"
            id="email"
            type="text"
            placeholder="example@email.com"
            aria-invalid={!isDirty ? undefined : !!errors.email}
            {...register("email", {
              required: "이메일은 필수 입력입니다. ",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "이메일 형식에 맞지 않습니다.",
              },
            })}
          />

          <button className="flex text-xs justify-center w-[60px] text-center py-3 m-1 float-right ring-2 ring-[#ab82e0] text-[rgb(171,130,224)] font-extrabold borde rounded-md shadow-button">
            인증요청
          </button>
          {errors.email && (
            <small
              className="text-slate-300 w-full flex -mt-5 mb-3 ml-2"
              role="alert"
            >
              {errors.email.message as string}
            </small>
          )}
        </div>
        <div className="w-full">
          <div className="flex">
            <label
              className="text-sm text-left ml-1 mb-1 text-black"
              htmlFor="code"
            >
              인증번호
            </label>
          </div>
          <input
            className="w-[260px] px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-[#ab82e0] border border-coolGray-200 rounded-lg shadow-input"
            id="code"
            type="number"
            placeholder="1234"
          />
          <div className="flex text-xs justify-center w-[60px] text-center py-3 m-1 float-right ring-2 ring-[rgb(171,130,224)] text-[rgb(171,130,224)] font-extrabold borde rounded-md shadow-button">
            확인
          </div>
        </div>
        <button
          disabled={isSubmitting}
          className="flex justify-center w-[100px] h-[44px] pt-3 float-right my-10 -mr-[65px] ring-2 ring-[#ab82e0] text-[#ab82e0] font-extrabold text-sm borde rounded-md shadow-button"
        >
          다음
        </button>
      </form>
    </div>
  );
};

export default SignUpFirst;
