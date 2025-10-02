import {Route, Routes} from 'react-router-dom'
import HomePage from './Pages/Home/HomePage'
import SignUpPage from './Pages/auth/Signup/SignUpPage'
import NotificationPage from './Pages/Notification/NotificationPage'
import ProfilePage from './Pages/Profile/ProfilePage'
import LoginPage from './Pages/auth/Login/LoginPage'
import Sidebar from './components/common/SideBar'
import RightPanel from './components/common/RightPanel'
import {Toaster} from 'react-hot-toast'

function App() {

  return (
    <div className="flex max-w-6xl mx-auto">
      <Sidebar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/notifications" element={<NotificationPage/>}/>
        <Route path="/profile/:username" element={<ProfilePage/>}/>
      </Routes>
      <RightPanel/>
      <Toaster/>

    </div>
  )
}

export default App
