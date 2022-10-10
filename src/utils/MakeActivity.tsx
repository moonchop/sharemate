import React from "react";
import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/basic-ui";
import TopNav from "../components/TopNav";
import BottomNav from "../components/BottomNav";
import PersonalFeed from "../components/PersonalFeed";
import GroupFeed from "../components/GroupFeed";
import MyPage from "../activities/MyPage";
import Community from "../activities/Community";
import SignUp from "../components/SignUpFirst";

type Navigate_Type = "Main" | "Group" | "Community" | "MyPage" | "SignUp";

const NavigateMapper: Record<Navigate_Type, React.ReactNode> = {
  Main: <PersonalFeed />,
  Group: <GroupFeed />,
  MyPage: <MyPage />,
  Community: <Community />,
  SignUp: <SignUp />,
};

type MakeActivityType = (navigate: Navigate_Type) => ActivityComponentType;
const MakeActivity: MakeActivityType = (navigate: Navigate_Type) => () => {
  return (
    <AppScreen theme="cupertino">
      <TopNav />
      {NavigateMapper[navigate]}
      <BottomNav />
    </AppScreen>
  );
};

export default MakeActivity;
