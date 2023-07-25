import React from "react";
import { useActivity } from "@stackflow/react";
import { ImSearch } from "react-icons/im";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useFlow } from "../stackflow";
import { GiFemale, GiMale } from "react-icons/gi";
import { BiFemale } from "react-icons/bi";
import { useUser } from "../stores/user";

type topProps = {
  status?: boolean;
};

const Topnav: React.FC<topProps> = ({ status }) => {
  const { pop, replace } = useFlow();
  const { gender } = useUser();
  const stack_Status = useActivity();
  const onClick = () => {
    pop();
  };

  const onClickSignUp = () => {
    replace("LoginActivity", {});
  };

  return (
    <header className="flex margin-0 p-4 pr-3 h-[7%] items-center bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-300">
      {!stack_Status.isRoot ? (
        <IoMdArrowRoundBack
          className="w-5 h-5"
          onClick={onClick}
        ></IoMdArrowRoundBack>
      ) : status ? (
        <IoMdArrowRoundBack
          className="w-5 h-5"
          onClick={onClickSignUp}
        ></IoMdArrowRoundBack>
      ) : (
        <>
          <div className="font-bold text-xl text-white mr-1">Share Mate</div>
          {gender ? (
            <GiMale className="text-sky-500" size={25} />
          ) : (
            <GiFemale className="text-fuchsia-500" size={25} />
          )}
        </>
      )}
    </header>
  );
};

export default Topnav;
