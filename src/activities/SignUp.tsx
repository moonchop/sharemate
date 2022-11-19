import React, { useState } from "react";
import SignUpFirst from "../components/SignUp/SignUpFirst";
import SignUpSecond from "../components/SignUp/SignUpSecond";
import SignUpPersonalIntro from "../components/SignUp/SignUpPersonalIntro";
import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/basic-ui";
import SignUpCoverPage from "../components/SignUp/SignUpCoverPage";
import TopNav from "../components/TopNav";

const MAX_STAGE = 3;
const Stage_Map = [
  <SignUpFirst handleGoNext={() => {}} />,
  <SignUpSecond />,
  <SignUpCoverPage />,
  <SignUpPersonalIntro />,
];

const SignUp: ActivityComponentType = () => {
  const [stage, setStage] = useState(2);

  const handleGoPrev = () => {
    console.log(stage);
    setStage((v) => Math.max(0, v - 1));
  };
  const handleGoNext = () => {
    console.log(stage);
    setStage((v) => Math.min(MAX_STAGE, v + 1));
  };

  return (
    <AppScreen theme="cupertino">
      {stage == 2 ? "" : <TopNav />}
      {React.cloneElement(Stage_Map[stage], {
        handleGoNext,
        handleGoPrev,
      })}
    </AppScreen>
  );
};

export default SignUp;
