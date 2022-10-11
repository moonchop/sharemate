import React from "react";
import { FaBell } from "react-icons/fa";
import { ImSearch } from "react-icons/im";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useFlow } from "../stackflow";

const Topnav = (Back) => {
  const { pop } = useFlow();
  const onClick = () => {
    pop();
  };

  return (
    <header className="flex justify-between margin-0 p-4 pr-3 h-[8%] items-center bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-300">
      {Back.Back === true ? (
        <IoMdArrowRoundBack className="w-5 h-5" onClick={onClick}></IoMdArrowRoundBack>
      ) : (
        <div className="font-bold text-xl text-white">Share Mate</div>
      )}
      <div className="flex h-[100%] items-center justify-center">
        <ImSearch className="mr-3 w-5 h-5" />
        <FaBell className="w-5 h-5" />
      </div>
    </header>
  );
};

export default Topnav;
