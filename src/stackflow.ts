import "@stackflow/basic-ui/index.css";
import { stackflow } from "@stackflow/react";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import Main from "./pages/MainActivity";
import Community from "./pages/CommunityActivity";
import Group from "./pages/GroupActivity";
import MyPage from "./pages/MyPageActivity";

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
