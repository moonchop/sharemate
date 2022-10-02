import { ActivityComponentType } from '@stackflow/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FeedTest from '../components/FeedTest'
import Main from './MainActivity'

const MainActivity: ActivityComponentType = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/test" element={<FeedTest />} />
      </Routes>
    </BrowserRouter>
  )
}

export default MainActivity
