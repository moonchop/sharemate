import InputComponent from "../../components/InputComponent";
import { AppScreen } from "@stackflow/basic-ui";
import { ActivityComponentType, useActivityParams } from "@stackflow/react";
import { useFlow } from "../../stackflow";
import { IoMdArrowRoundBack } from "react-icons/io";
import AppBar from "@stackflow/basic-ui/dist/AppBar";
import ReportRadioButton from "../../components/ReportRadioButton";
import { useState } from "react";
import request from "../../stores/Request";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Radio from "@mui/material/Radio";

const Report = () => {
  const { pop } = useFlow();
  const [reason, setReason] = useState<String>("");
  const [typingcheck, setTypingcheck] = useState<Boolean>(false);
  const [typing, setTyping] = useState<String>("");

  const Params: { userToID?: String | null; postID?: String | null } =
    useActivityParams();

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if ((e.target as HTMLInputElement).value === "직접 입력")
      setTypingcheck(true);
    else {
      setTypingcheck(false);
    }
    setReason((e.target as HTMLInputElement).value);
  };

  const submitHandler = () => {
    //console.log("reason", reason, "typing", typing);
    if (!Params.userToID) Params.userToID = null;
    if (!Params.postID) Params.postID = null;

    reason.length === 0
      ? alert("신고 사유를 선택해주세요")
      : reason == "직접 입력" && typing == ""
      ? alert("신고 사유를 작성해주세요")
      : reason == "직접 입력" && typing != ""
      ? request
          .post("/sign/report", {
            userToID: Params.userToID,
            reason: typing,
            postID: Params.postID,
          })
          .then((response) => {
            alert("신고가 접수되었습니다.");
            pop();
            pop();
          })
          .catch((error) => alert("다시 시도해주세요"))
      : request
          .post("/sign/report", {
            userToID: Params.userToID,
            reason: reason,
            postID: Params.postID,
          })
          .then((response) => {
            alert("신고가 접수되었습니다.");
            pop();
            pop();
          })
          .catch((error) => alert("다시 시도해주세요"));
  };

  return (
    <>
      <div className="overflow-y-scroll scrollbar-hide">
        <div className="flex  justify-center p-4 pr-3 h-[7%]">
          <h1 className="flex items-center justify-center text-lg font-bold ">
            신고 사유 선택
          </h1>
        </div>
        <hr />
        <div className="flex flex-col ">
          <label className="items-center justify-center ">
            <FormControl>
              <RadioGroup
                className="space-y-3"
                name="report content"
                value={reason}
                onChange={changeHandler}
              >
                <FormControlLabel
                  value="서비스와 전혀 상관없는 내용이에요."
                  control={<Radio />}
                  label="서비스와 전혀 상관없는 내용이에요."
                  className="pr-5 pl-8 pt-3 accent-fuchsia-500 border-gray-400"
                />
                <hr className="w-screen" />
                <FormControlLabel
                  value="자꾸 광고하거나 홍보글을 올려요."
                  control={<Radio />}
                  label="자꾸 광고하거나 홍보글을 올려요."
                  className="pr-5 pl-8 accent-fuchsia-500 border-gray-400"
                />
                <hr className="w-screen" />
                <FormControlLabel
                  value="사실이 아닌 거짓 정보에요."
                  control={<Radio />}
                  label="사실이 아닌 거짓 정보에요."
                  className="pr-5 pl-8 accent-fuchsia-500 border-gray-400"
                />
                <hr className="w-screen" />
                <FormControlLabel
                  value="마음에 들지 않아요."
                  control={<Radio />}
                  label="마음에 들지 않아요."
                  className="pr-5 pl-8 accent-fuchsia-500 border-gray-400"
                />
                <hr className="w-screen" />
                <FormControlLabel
                  value="이 계정이 다른 계정을 사칭하고 있어요."
                  control={<Radio />}
                  label="이 계정이 다른 계정을 사칭하고 있어요."
                  className="pr-5 pl-8  accent-fuchsia-500 border-gray-400"
                />
                <hr className="w-screen" />
                <FormControlLabel
                  value="욕설,혐오,성적 발언을 해요."
                  control={<Radio />}
                  label="욕설,혐오,성적 발언을 해요."
                  className="pr-5 pl-8 accent-fuchsia-500 border-gray-400"
                />
                <hr className="w-screen" />
                <FormControlLabel
                  value="직접 입력"
                  control={<Radio />}
                  label="직접 입력"
                  className="pr-5 pl-8 my-2 accent-fuchsia-500 border-gray-400"
                />
              </RadioGroup>
            </FormControl>
            {typingcheck ? (
              <textarea
                className="shadow h-28 appearance-none border ml-[10%] mt-[3%] rounded w-[80%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(e: any) => {
                  setTyping(e.target.value);
                }}
              />
            ) : null}
          </label>
        </div>
      </div>

      <button
        onClick={submitHandler}
        className="absolute bottom-[3%] left-[5%] w-[90%] h-[40px] ring-2 ring-[#a984da] text-[#a984da] bg-white bg-opacity-60 font-semibold text-base rounded-md shadow-button"
      >
        신고하기{" "}
      </button>
    </>
  );
};

export default Report;
