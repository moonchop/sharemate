import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/basic-ui";
import BottomNav from "../components/BottomNav"

const Group: ActivityComponentType = () => {
    return (
        <AppScreen
        theme="android"
        appBar={{
          title: "Group",
        }}
      >
      <BottomNav />
      </AppScreen>
    )
}

export default Group;