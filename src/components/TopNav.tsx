import React from "react";
import { HiBell } from "react-icons/hi";

const Topnav = () => {
  return (
    <header className="flex justify-between margin-0 p-4 h-14 items-center bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-300">
      <div className="font-bold text-xl text-white">Share Mate</div>
      <div>
        <HiBell className="w-5 h-5" />
      </div>
    </header>
  );
};

//<img src="../../스포츠서울.png" />
//<span className="px-2">1</span>;

export default Topnav;
