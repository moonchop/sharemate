import React, { useState } from "react";
import SignUpFirst from "../components/SignUpFirst";
import SignUpSecond from "../components/SignUpSecond";

const MAX_STAGE = 1;
const Stage_Map = [<SignUpFirst />, <SignUpSecond />];

const SignUp = () => {
  const [stage, setStage] = useState(0);

  const handleGoPrev = () => {
    console.log("Prev");
    setStage((v) => Math.max(0, v - 1));
  };
  const handleGoNext = () => {
    console.log("Next");
    setStage((v) => Math.min(MAX_STAGE, v + 1));
  };

  return React.cloneElement(Stage_Map[stage], {
    handleGoNext: handleGoNext,
    handleGoPrev: handleGoPrev,
  });
};

export default SignUp;
