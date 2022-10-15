import React from "react";
import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/basic-ui";
import TopNav from "../components/TopNav";
import BottomNav from "../components/BottomNav";
import PersonalFeed from "../components/PersonalFeed";
import GroupFeed from "../components/GroupFeed";
import MyPage from "../activities/MyPage";
import Community from "../activities/Community";
import SignUp from "../activities/SignUp";
import DetailProfile from "../components/DetailProfile";
import DetailGroup from "../components/DetailGroup";

type Navigate_Type =
  | "Main"
  | "Group"
  | "Community"
  | "MyPage"
  | "SignUp"
  | "Profile"
  | "DetailGroup";

const NavigateMapper: Record<Navigate_Type, React.ReactNode> = {
  Main: <PersonalFeed />,
  Group: <GroupFeed />,
  MyPage: <MyPage />,
  Community: <Community />,
  SignUp: <SignUp />,
  Profile: <DetailProfile />,
  DetailGroup: <DetailGroup />,
};

type MakeActivityType = (navigate: Navigate_Type) => ActivityComponentType;
const MakeActivity: MakeActivityType = (navigate: Navigate_Type) => () => {
  return (
    <AppScreen theme="cupertino">
      {navigate === "Profile" || navigate === "DetailGroup" ? (
        <TopNav Back={true} />
      ) : (
        <TopNav Back={false} />
      )}
      {NavigateMapper[navigate]}
      {navigate === "Profile" || navigate === "DetailGroup" ? (
        <></>
      ) : (
        <BottomNav />
      )}
    </AppScreen>
  );
};

export default MakeActivity;
