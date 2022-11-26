import React from "react";
import { IoIosCheckmark } from "react-icons/io";

export default function CheckText({ children }: { children: JSX.Element }) {
  return (
    <div className="flex flex-row">
      <IoIosCheckmark className=" w-7 h-7 text-green-700 opacity-50 -ml-2" />
      <div>{children}</div>
    </div>
  );
}
