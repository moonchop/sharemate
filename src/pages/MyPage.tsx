import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/basic-ui";
import BottomNav from "../components/BottomNav"

const MyPage: ActivityComponentType = () => {
    return (
        <AppScreen
        theme="android"
        appBar={{
          title: "MyPage",
        }}
      >
      <BottomNav />
      </AppScreen>
    )
}


export default MyPage;