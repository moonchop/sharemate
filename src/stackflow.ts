import "@stackflow/basic-ui/index.css";
import { stackflow } from "@stackflow/react";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import { historySyncPlugin } from "@stackflow/plugin-history-sync";
import { createLink } from "@stackflow/link";
import MakeActivity from "./utils/MakeActivity";
import SignUpActivity from "./activities/SignUp";
import CreateBoardActivity from "./components/CreateBoard";
import Login from "./activities/Login";

const MainActivity = MakeActivity("Main");
const GroupActivity = MakeActivity("Group");
const CommunityActivity = MakeActivity("Community");
const MyPageActivity = MakeActivity("MyPage");
const ProfileActivity = MakeActivity("Profile");
const DetailGroupActivity = MakeActivity("DetailGroup");
const CreateGroupActivity = MakeActivity("CreateGroup");
const BoardDetailActivity = MakeActivity("BoardDetail");
const LoginActivity = MakeActivity("Login");

export type SafeActivityType = typeof activities;
export const { Link } = createLink<SafeActivityType>();

const activities = {
  GroupActivity,
  CommunityActivity,
  MainActivity,
  MyPageActivity,
  SignUpActivity,
  ProfileActivity,
  DetailGroupActivity,
  CreateGroupActivity,
  BoardDetailActivity,
  CreateBoardActivity,
  LoginActivity,
};

export const { Stack, useFlow } = stackflow({
  transitionDuration: 350,
  activities,
  plugins: [
    basicRendererPlugin(),
    historySyncPlugin({
      routes: {
        LoginActivity: "/",
        MainActivity: "/home",
        GroupActivity: "/group",
        CommunityActivity: "/community",
        MyPageActivity: "/mypage",
        SignUpActivity: "/signup",
        ProfileActivity: "/profile",
        DetailGroupActivity: "/detailgroup",
        CreateGroupActivity: "/creategroup",
        BoardDetailActivity: "/board",
        CreateBoardActivity: "/createboard",
      },
      fallbackActivity: () => "LoginActivity", // 오류 발생시 Home으로 이동 (404페이지 처리 할때 사용)
    }),
  ],
});
