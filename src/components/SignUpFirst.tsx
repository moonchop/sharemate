import { useForm } from "react-hook-form";

const SignInFirst = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  return (
    <div className="py-20 p-3">
      <h1 className="text-[23px] text-left text-black pb-5">회원가입</h1>
      <form
        onSubmit={handleSubmit(async (data) => {
          await new Promise((r) => setTimeout(r, 1000));
          alert(JSON.stringify(data));
        })}
      >
        <label className="text-sm text-left text-black" htmlFor="name">
          이름
        </label>
        <input
          className="w-full px-4 mb-5 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-[#F65B8082] border border-coolGray-200 rounded-lg shadow-input"
          id="name"
          type="text"
          placeholder="name"
          {...register("name")}
        />
        <label className="text-sm text-left" htmlFor="password">
          비밀번호
        </label>
        <input
          className="w-full px-4 py-2.5 mb-5 text-base text-coolGray-900 font-normal outline-none focus:border-[#F65B8082] border border-coolGray-200 rounded-lg shadow-input"
          id="password"
          type="password"
          placeholder="******"
          {...register("password")}
        />
        {/* <label htmlFor="passwordConfirm">비밀번호 확인</label>
      <input
        id="password"
        type="password"
        placeholder="******"
        {...register("password")}
      /> */}
        <label className=" text-sm text-left" htmlFor="email">
          이메일
        </label>
        <div className="w-full">
          <input
            className="w-[260px] px-4 mb-5 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-[#F65B8082] border border-coolGray-200 rounded-lg shadow-input"
            id="email"
            type="email"
            placeholder="example@email.com"
            {...register("email")}
          />
          <button className="flex flex-wrap text-xs justify-center w-[60px] text-center py-3 m-1 float-right bg-[#FCABBE] hover:bg-[#F65B8082] font-medium text-black borde rounded-md shadow-button">
            인증요청
          </button>
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

export default SignInFirst;
