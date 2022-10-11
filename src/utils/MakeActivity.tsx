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
import DetailProfile from "../components/DetailProfile";

type Navigate_Type = "Main" | "Group" | "Community" | "MyPage" | "SignUp" | "Profile";

const NavigateMapper: Record<Navigate_Type, React.ReactNode> = {
  Main: <PersonalFeed />,
  Group: <GroupFeed />,
  MyPage: <MyPage />,
  Community: <Community />,
  SignUp: <SignUp />,
  Profile: <DetailProfile />,
};

type MakeActivityType = (navigate: Navigate_Type) => ActivityComponentType;
const MakeActivity: MakeActivityType = (navigate: Navigate_Type) => () => {
  return (
    <AppScreen theme="cupertino">
      {navigate === "Profile" ? <TopNav Back={true} /> : <TopNav Back={false} />}
      {NavigateMapper[navigate]}
      {navigate === "Profile" ? <></> : <BottomNav />}
    </AppScreen>
  );
};

export default MakeActivity;
