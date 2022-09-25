import "@stackflow/basic-ui/index.css";
import { stackflow } from "@stackflow/react";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import MyActivity from "./pages/MyActivity";
import Community from "./pages/Community";
import Group from "./pages/Group";
import MyPage from "./pages/MyPage";

const activities = {
    MyActivity,
    Community,
    Group,
    MyPage,
};

export const { Stack, useFlow } = stackflow({
  transitionDuration: 350,
  activities,
  plugins: [basicRendererPlugin()],
  initialActivity: () => "MyActivity",
});