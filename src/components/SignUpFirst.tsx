import { useForm } from "react-hook-form";

const SignUpFirst = ({
  onSubmit = async (data: any) => {
    await new Promise((r) => setTimeout(r, 1000));
    console.log(JSON.stringify(data));
  },
}) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, errors },
  } = useForm();

  return (
    <div className="py-[40px] p-3 overflow-y-scroll">
      <h1 className="text-[23px] text-left text-black pb-5">회원가입</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="text-sm text-left text-black" htmlFor="name">
          이름 *
        </label>
        <input
          className="w-full px-4 mb-5 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-[#F65B8082] border border-coolGray-200 rounded-lg shadow-input"
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
            {errors.name.message}
          </small>
        )}

        <label className="text-sm text-left" htmlFor="password">
          비밀번호 *
        </label>
        <input
          className="w-full px-4 py-2.5 mb-5 text-base text-coolGray-900 font-normal outline-none focus:border-[#F65B8082] border border-coolGray-200 rounded-lg shadow-input"
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
            {errors.password.message}
          </small>
        )}
        {/* <label htmlFor="passwordConfirm">비밀번호 확인</label>
      <input
        id="password"
        type="password"
        placeholder="******"
        {...register("password")}
      /> */}
        <label className=" text-sm text-left" htmlFor="email">
          이메일 *
        </label>
        <div className="w-full">
          <input
            className="w-[260px] px-4 mb-5 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-[#F65B8082] border border-coolGray-200 rounded-lg shadow-input"
            id="email"
            type="text"
            placeholder="example@email.com"
            aria-invalid={
              !isDirty ? undefined : errors.email ? "true" : "false"
            }
            {...register("email", {
              required: "이메일은 필수 입력입니다. ",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "이메일 형식에 맞지 않습니다.",
              },
            })}
          />

          <button className="flex flex-wrap text-xs justify-center w-[60px] text-center py-3 m-1 float-right bg-[#FCABBE] hover:bg-[#F65B8082] font-medium text-black borde rounded-md shadow-button">
            인증요청
          </button>
          {errors.email && (
            <small
              className="text-slate-300 w-full flex -mt-5 mb-3 ml-2"
              role="alert"
            >
              {errors.email.message}
            </small>
          )}
        </div>
        <div className="w-full">
          <input
            className="w-[260px] px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-[#F65B8082] border border-coolGray-200 rounded-lg shadow-input"
            id="code"
            type="number"
            name="code"
            placeholder="1234"
          />
          <button className="flex flex-wrap text-xs justify-center w-[60px] text-center py-3 m-1 float-right bg-[#FCABBE] hover:bg-[#F65B8082] font-medium text-black borde rounded-md shadow-button">
            확인
          </button>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex flex-wrap justify-center w-[100px] h-[44px] pt-3 float-right my-10 -mr-[65px] bg-[#FCABBE] hover:bg-[#F65B8082] font-medium text-sm text-black borde rounded-md shadow-button"
        >
          다음으로
        </button>
      </form>
    </div>
  );
};

export default SignUpFirst;
