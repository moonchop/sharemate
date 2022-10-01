import "@stackflow/basic-ui/index.css";
import { stackflow } from "@stackflow/react";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import Main from "./activity/MainActivity";
import Community from "./activity/CommunityActivity";
import Group from "./activity/GroupActivity";
import MyPage from "./activity/MyPageActivity";

const activities = {
  Main,
  Community,
  Group,
  MyPage,
};

export const { Stack, useFlow } = stackflow({
  transitionDuration: 350,
  activities,
  plugins: [basicRendererPlugin()],
  initialActivity: () => "Main",
});
