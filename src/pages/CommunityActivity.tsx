import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/basic-ui";
import BottomNav from "../components/BottomNav";
import TopNav from "../components/TopNav";

const Comunity: ActivityComponentType = () => {
  return (
    <AppScreen theme="cupertino">
      <TopNav />
      <BottomNav />
    </AppScreen>
  );
};

export default Comunity;
