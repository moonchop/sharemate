import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/basic-ui";
import BottomNav from "../components/BottomNav";
import TopNav from "../components/TopNav";
import GroupFeed from "../components/GroupFeed";

const Group: ActivityComponentType = () => {
  return (
    <AppScreen theme="cupertino">
      <TopNav />
      <GroupFeed />
      <BottomNav />
    </AppScreen>
  );
};

export default Group;
