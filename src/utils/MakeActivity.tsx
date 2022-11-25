import React from "react";
import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/basic-ui";
import TopNav from "../components/TopNav";
import BottomNav from "../components/BottomNav";
import PersonalFeed from "../components/PersonalFeed";
import GroupFeed from "../components/GroupFeed";
import MyPage from "../components/MyPage";
import ProfileEdit from "../components/ProfileEdit";
import CommunityFeed from "../components/CommunityFeed";
import DetailProfile from "../components/DetailProfile";
import DetailGroup from "../components/DetailGroup";
import CreateGroup from "../components/CreateGroup";
import BoardDetail from "../components/DetailBoard";
import CreateBoard from "../components/CreateBoard";
import Login from "../activities/Login";
import Password from "../components/PasswordEdit";
import LikeProfile from "../components/LikeProfile";
import ModifyFavor from "../components/ModifyFavor";

type Navigate_Type =
  | "Main"
  | "Group"
  | "Community"
  | "MyPage"
  | "Profile"
  | "DetailGroup"
  | "CreateGroup"
  | "BoardDetail"
  | "CreateBoard"
  | "Login"
  | "ProfileEdit"
  | "Password"
  | "ModifyFavor"
  | "LikeProfile";

const NavigateMapper: Record<Navigate_Type, React.ReactNode> = {
  Main: <PersonalFeed />,
  Group: <GroupFeed />,
  Community: <CommunityFeed />,
  MyPage: <MyPage />,
  Profile: <DetailProfile />,
  DetailGroup: <DetailGroup />,
  CreateGroup: <CreateGroup />,
  BoardDetail: <BoardDetail />,
  CreateBoard: <CreateBoard />,
  Login: <Login />,
  ProfileEdit: <ProfileEdit />,
  ModifyFavor: <ModifyFavor />,
  Password: <Password />,
  LikeProfile: <LikeProfile />,
};

type MakeActivityType = (navigate: Navigate_Type) => ActivityComponentType;
const MakeActivity: MakeActivityType = (navigate: Navigate_Type) => () => {
  return (
    <AppScreen theme="cupertino">
      {navigate === "Login" ? <></> : <TopNav />}
      {NavigateMapper[navigate]}
      {navigate === "Profile" ||
      navigate === "DetailGroup" ||
      navigate === "Login" ||
      navigate === "CreateGroup" ||
      navigate === "Password" ||
      navigate === "LikeProfile" ||
      navigate === "ModifyFavor" ||
      navigate === "ProfileEdit" ||
      navigate === "BoardDetail" ? (
        <></>
      ) : (
        <BottomNav />
      )}
    </AppScreen>
  );
};

export default MakeActivity;
