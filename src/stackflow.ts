import "@stackflow/basic-ui/index.css";
import { stackflow } from "@stackflow/react";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import { historySyncPlugin } from "@stackflow/plugin-history-sync";
import { createLink } from "@stackflow/link";
import MakeActivity from "./utils/MakeActivity";

const MainActivity = MakeActivity("Main");
const GroupActivity = MakeActivity("Group");
const CommunityActivity = MakeActivity("Community");
const MyPageActivity = MakeActivity("MyPage");
const SignUpActivity = MakeActivity("SignUp");

export type SafeActivityType = typeof activities;
export const { Link } = createLink<SafeActivityType>();

const activities = {
  GroupActivity,
  CommunityActivity,
  MainActivity,
  MyPageActivity,
  SignUpActivity,
  // DetailProfile,
};

export const { Stack, useFlow } = stackflow({
  transitionDuration: 350,
  activities,
  plugins: [
    basicRendererPlugin(),
    historySyncPlugin({
      routes: {
        MainActivity: "/",
        GroupActivity: "/group",
        CommunityActivity: "/community",
        MyPageActivity: "/mypage",
        SignUpActivity: "/signup",
        // DetailProfile: "/profiles/:id",
      },
      fallbackActivity: () => "MainActivity", // 오류 발생시 Home으로 이동 (404페이지 처리 할때 사용)
    }),
  ],
});
