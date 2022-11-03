import React, { useState } from "react";
import SignUpFirst from "../components/SignUpFirst";
import SignUpSecond from "../components/SignUpSecond";
import SignUpThird from "../components/SignUpThird";
import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/basic-ui";

const MAX_STAGE = 2;
const Stage_Map = [
  <SignUpFirst handleGoNext={() => {}} />,
  <SignUpSecond />,
  <SignUpThird />,
];

const SignUp: ActivityComponentType = () => {
  const [stage, setStage] = useState(0);

  const handleGoPrev = () => {
    console.log("Prev");
    setStage((v) => Math.max(0, v - 1));
  };
  const handleGoNext = () => {
    console.log("Next");
    setStage((v) => Math.min(MAX_STAGE, v + 1));
  };

  return (
    <AppScreen theme="android">
      <header className="flex justify-between margin-0 p-4 pr-3 h-[8%] items-center bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-300">
        <div className="font-bold text-xl text-white">Share Mate</div>
      </header>
      {React.cloneElement(Stage_Map[stage], {
        handleGoNext,
        handleGoPrev,
      })}
    </AppScreen>
  );
};

export default SignUp;
