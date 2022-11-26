import React, { useMemo } from "react";
import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/basic-ui";
import TopNav from "../components/TopNav";
import BottomNav from "../components/BottomNav";
import PersonalFeed from "../activities/Main/PersonalFeed";
import GroupFeed from "../activities/Group/GroupFeed";
import MyPage from "../activities/MyPage/MyPage";
import ProfileEdit from "../activities/MyPage/ProfileEdit";
import CommunityFeed from "../activities/Community/CommunityFeed";
import DetailProfile from "../activities/Main/DetailProfile";
import DetailGroup from "../activities/Group/DetailGroup";
import CreateGroup from "../activities/Group/CreateGroup";
import BoardDetail from "../activities/Community/DetailBoard";
import CreateBoard from "../activities/Community/CreateBoard";
import Login from "../activities/Sign/Login";
import Password from "../activities/MyPage/PasswordEdit";
import LikeProfile from "../activities/MyPage/LikeProfile";
import ModifyFavor from "../activities/MyPage/ModifyFavor";
import FindPassword_Email from "../activities/Sign/FindPassword/AuthEmail";
import FindPassword_Password from "../activities/Sign/FindPassword/NewPassword";
import ServiceTerm from "../activities/MyPage/ServiceTerm";
import UserPolicyTerm from "../activities/MyPage/UserPolicyTerm";
import UserTerm from "../activities/MyPage/UserTerm";
import Term from "../activities/MyPage/Term";

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
  | "LikeProfile"
  | "FindPassword_Email"
  | "FindPassword_Password"
  | "ServiceTerm"
  | "UserPolicyTerm"
  | "UserTerm"
  | "Term";

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
  FindPassword_Email: <FindPassword_Email />,
  FindPassword_Password: <FindPassword_Password />,
  ServiceTerm: <ServiceTerm />,
  UserPolicyTerm: <UserPolicyTerm />,
  UserTerm: <UserTerm />,
  Term: <Term />,
};

type MakeActivityType = (navigate: Navigate_Type) => ActivityComponentType;

const MakeActivity: MakeActivityType = (navigate: Navigate_Type) => () => {
  const isHideBottomNav = useMemo(() => {
    return [
      "Profile",
      "DetailGroup",
      "Login",
      "CreateGroup",
      "Password",
      "LikeProfile",
      "ModifyFavor",
      "ProfileEdit",
      "BoardDetail",
      "FindPassword_Email",
      "FindPassword_Password",
      "ServiceTerm",
      "UserPolicyTerm",
      "UserTerm",
      "Term",
    ].includes(navigate);
  }, [navigate]);

  return (
    <AppScreen theme="cupertino">
      {navigate === "MyPage" ||
      navigate === "Profile" ||
      navigate === "DetailGroup" ||
      navigate === "CreateGroup" ||
      navigate === "CreateBoard" ||
      navigate === "BoardDetail" ||
      navigate === "ProfileEdit" ||
      navigate === "Password" ||
      navigate === "LikeProfile" ? (
        <TopNav status={true} />
      ) : navigate === "Login" ? (
        <></>
      ) : (
        <TopNav />
      )}
      {NavigateMapper[navigate]}
      {isHideBottomNav ? <></> : <BottomNav />}
    </AppScreen>
  );
};

export default MakeActivity;
