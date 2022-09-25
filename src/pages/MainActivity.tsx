import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/basic-ui";
import TopNav from "../components/TopNav";
import BottomNav from "../components/BottomNav";
import Feed from "../components/Feed";

const Main: ActivityComponentType = () => {
  return (
    <AppScreen theme="cupertino">
      <TopNav />
      <div className="h-full flex-col my-3 mx-6">
        <Feed />
      </div>
      <BottomNav />
    </AppScreen>
  );
};

export default Main;
