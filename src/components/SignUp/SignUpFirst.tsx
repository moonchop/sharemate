import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { checkEmail, RegisterApi } from "../../utils/api/auth";
import { SignUpFormInterface } from "./SignUp.type";
import defaultProfile from "../../assets/defaultProfile.png";

const SignUpFirst = ({ handleGoNext }: { handleGoNext: () => void }) => {
  const [emailValidNum, setEmailValidNum] = useState("false");
  const [isValid, setIsValid] = useState(false);
  const checkEmailRef = useRef<HTMLInputElement>(null);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { isSubmitting, isDirty, errors },
  } = useForm<SignUpFormInterface>();

  const getEmailValidNum = async () => {
    const email = getValues("email");
    return await checkEmail(email)
      .then((response) => {
        setEmailValidNum(response.data);
        console.log(response.data);
      })
      .catch(() => alert("중복된 이메일입니다."));
  };

  const handleCheckEmailValid = () => {
    if (checkEmailRef.current === null) return;
    if (checkEmailRef.current?.value !== emailValidNum) {
      alert("인증코드가 잘못되었습니다.");
      setIsValid(false);
    } else {
      setIsValid(true);
      alert("인증되었습니다.");
    }
  };

  const onSubmit = async (data: SignUpFormInterface) => {
    console.log(data);
    if (!isValid) {
      console.log(data);
      return;
    }
    data.profile_photo = defaultProfile;
    data.age = parseInt(data.age);
    data.grade = parseInt(data.grade);
    data.gender === "남" ? (data.gender = 1) : (data.gender = 0);
    console.log("POST data", data);
    RegisterApi(data).catch((err) => console.error(err));
    console.log("타입:", typeof data.age, typeof data.grade);
    handleGoNext();
  };

  return (
    <div className="px-5 py-8 overflow-y-scroll">
      <h1 className="text-3xl font-semibold text-black mb-7">회원가입</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex">
          <div className="mr-1 text-red-500">* </div>
          <label className="text-base text-left text-black mb-2" htmlFor="name">
            닉네임
          </label>
        </div>
        <input
          className="w-full px-4 mb-5 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-[#ab82e0] border border-coolGray-200 rounded-lg shadow-input"
          id="name"
          type="text"
          placeholder="nickname"
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
            className="text-slate-300 w-full flex -mt-5  ml-2"
            role="alert"
          >
            {errors.name.message as string}
          </small>
        )}

        <div className="flex flex-row mt-6 mb-2">
          <div className="mr-1 text-red-500">*</div>
          <label className=" text-base text-left text-black" htmlFor="name">
            성별
          </label>
        </div>
        <div className="flex flex-row items-center">
          <label className=" flex items-center">
            <input
              {...register("gender", { required: true })}
              type="radio"
              value="남"
              id="남"
              name="radio"
              // checked
              className="mr-2 h-5 w-5 accent-fuchsia-500 border-gray-400"
            />
            <span>남</span>
            <input
              {...register("gender", { required: true })}
              type="radio"
              value="여"
              id="여"
              name="radio"
              className="accent-fuchsia-500 mr-2 ml-5 h-5 w-5  border-gray-400"
            />
            <span>여</span>
          </label>
        </div>
        {/* </div> */}
        <div className="flex mt-6">
          <div className="mr-1 text-red-500">* </div>
          <label className="text-base text-left mb-2 text-black" htmlFor="name">
            학년
          </label>
        </div>
        <label className="flex flex-row items-center">
          <input
            {...register("grade", { required: true })}
            type="radio"
            value={1}
            id="1"
            className="mr-2 h-5 w-5 accent-purple-500 border-gray-400"
          />
          1
          <input
            {...register("grade", { required: true })}
            type="radio"
            value={2}
            id="2"
            className="mr-2 ml-5 h-5 w-5 accent-purple-500 border-gray-400"
          />
          2
          <input
            {...register("grade", { required: true })}
            type="radio"
            value={3}
            id="3"
            className="mr-2 ml-5 h-5 w-5 4)] accent-purple-500 border-gray-400"
          />
          3
          <input
            {...register("grade", { required: true })}
            type="radio"
            value={4}
            id="4"
            className="mr-2 ml-5 h-5 w-5 accent-purple-500 border-gray-400"
          />
          4
        </label>

        <div className="flex mt-6">
          <div className="mr-1 text-red-500">* </div>
          <label className="text-base text-left mb-2 text-black" htmlFor="pwd">
            비밀번호
          </label>
        </div>
        <input
          className="flex w-full px-4 py-2.5 mb-5 text-coolGray-900 font-normal outline-none focus:border-[#ab82e0] border border-coolGray-200 rounded-lg shadow-input"
          id="pwd"
          type="password"
          placeholder="******"
          {...register("pwd", {
            required: "비밀번호는 필수 입력입니다. ",
            pattern: {
              value: /^[A-Za-z0-9]{6,12}$/,
              message:
                "비밀번호 형식에 맞지 않습니다. (한글,영문,숫자 6~12 자리)",
            },
          })}
        />
        {errors.pwd && (
          <small
            className="text-slate-300 w-full flex -mt-5  ml-2"
            role="alert"
          >
            {errors.pwd.message as string}
          </small>
        )}
        <div className="flex mt-4">
          <div className="mr-1 text-red-500">* </div>
          <label
            className="text-base text-left text-black mb-2"
            htmlFor="major"
          >
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
          <small className="text-slate-300 w-full flex -mt-5 ml-2" role="alert">
            {errors.major.message as string}
          </small>
        )}
        <div className="flex mt-4">
          <div className="mr-1 text-red-500">* </div>
          <label
            className="text-base text-left text-black mb-2"
            htmlFor="birth"
          >
            나이
          </label>
        </div>
        <input
          className="w-full px-4 mb-5 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-[#ab82e0] border border-coolGray-200 rounded-lg shadow-input"
          id="age"
          type="number"
          placeholder="22"
          {...register("age", {
            required: "필수 입력입니다.",
          })}
        />
        {errors.age && (
          <small className="text-slate-300 w-full flex -mt-5 ml-2" role="alert">
            {errors.age.message as string}
          </small>
        )}
        <div className="flex mt-4">
          <div className="mr-1 text-red-500">* </div>
          <label
            className="text-base text-left text-black mb-2"
            htmlFor="email"
          >
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

          <button
            className="flex text-xs justify-center w-[60px] text-center py-3 m-1 float-right ring-1 ring-[#ab82e0] text-[rgb(171,130,224)] font-extrabold borde rounded-md shadow-button"
            onClick={getEmailValidNum}
          >
            인증요청
          </button>
          {errors.email && (
            <small
              className="text-slate-300 w-full flex -mt-5 ml-2"
              role="alert"
            >
              {errors.email.message as string}
            </small>
          )}
        </div>
        <div className="w-full">
          <div className="flex mt-4">
            <label
              className="text-base text-left ml-1 mb-2 text-black"
              htmlFor="code"
            >
              인증번호
            </label>
          </div>
          <input
            className="w-[260px] px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-[#ab82e0] border border-coolGray-200 rounded-lg shadow-input"
            id="code"
            type="text"
            placeholder="example"
            ref={checkEmailRef}
          />
          <div
            className="flex text-xs justify-center w-[60px] text-center py-3 m-1 float-right ring-1 ring-[rgb(171,130,224)] text-[rgb(171,130,224)] font-extrabold borde rounded-md shadow-button"
            onClick={handleCheckEmailValid}
          >
            {isValid ? "인증완료" : "확인"}
          </div>
        </div>
        <button
          disabled={isSubmitting}
          className="flex justify-center w-[100px] h-[44px] pt-3 float-right my-10 -mr-[65px] ring-1 ring-[#ab82e0] text-[#ab82e0] font-extrabold text-sm borde rounded-md shadow-button"
        >
          시작하기
        </button>
      </form>
    </div>
  );
};

export default SignUpFirst;
