import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/basic-ui";
import BottomNav from "../components/BottomNav"

const Comunity: ActivityComponentType = () => {
    return (
        <AppScreen
        theme="android"
        appBar={{
          title: "Community",
        }}
      >
      <BottomNav />
      </AppScreen>
    )
}


export default Comunity;
