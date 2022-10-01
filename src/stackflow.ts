import "@stackflow/basic-ui/index.css";
import { stackflow } from "@stackflow/react";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import Main from "./activities/MainActivity";
import Community from "./activities/CommunityActivity";
import Group from "./activities/GroupActivity";
import MyPage from "./activities/MyPageActivity";
import Route from "./activities/RouteActivity";

const activities = {
  Main,
  Community,
  Group,
  MyPage,
  Route,
};

export const { Stack, useFlow } = stackflow({
  transitionDuration: 350,
  activities,
  plugins: [basicRendererPlugin()],
  initialActivity: () => "Route",
});
