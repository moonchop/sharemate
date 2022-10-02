import { ActivityComponentType } from '@stackflow/react'
import { AppScreen } from '@stackflow/basic-ui'
import TopNav from '../components/TopNav'
import BottomNav from '../components/BottomNav'
import Feed from '../components/Feed'
import { useState } from 'react'
import Group from './GroupActivity'
import MyPage from './MyPageActivity'
import Community from './CommunityActivity'

type Navigate_Type = 'Main' | 'Group' | 'Community' | 'MyPage'

const NavigateMapper: any = {
  Main: <Feed />,
  Group: <Group />,
  MyPage: <MyPage />,
  Community: <Community />
}

const Main = () => {
  const [navigatePath, setNavigatePath] = useState<Navigate_Type>('Main')

  const navigate = (action: Navigate_Type) => setNavigatePath(action)

  return (
    <AppScreen theme="cupertino">
      <TopNav />
      {NavigateMapper[navigatePath]}
      <BottomNav navigate={navigate} navigatePath={navigatePath} />
    </AppScreen>
  )
}

export default Main
