import React from "react";
import { useActivity } from "@stackflow/react";
import { ImSearch } from "react-icons/im";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useFlow } from "../stackflow";

type topProps = {
  status?: boolean;
};

const Topnav: React.FC<topProps> = ({ status }) => {
  const { pop } = useFlow();
  const stack_Status = useActivity();
  const onClick = () => {
    pop();
  };

  return (
    <header className="flex justify-between margin-0 p-4 pr-3 h-[7%] items-center bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-300">
      {!stack_Status.isRoot ? (
        <IoMdArrowRoundBack
          className="w-5 h-5"
          onClick={onClick}
        ></IoMdArrowRoundBack>
      ) : (
        <div className="font-bold text-xl text-white">Share Mate</div>
      )}
    </header>
  );
};

export default Topnav;
