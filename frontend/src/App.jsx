import {Route, Routes} from 'react-router-dom'
import HomePage from './Pages/Home/HomePage'
import SignUpPage from './Pages/auth/Signup/SignUpPage'
import LoginPage from './Pages/auth/Login/LoginPage'
import Sidebar from './components/common/SideBar'
import RightPanel from './components/common/RightPanel'

function App() {

  return (
    <div className="flex max-w-6xl mx-auto">
      <Sidebar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
      </Routes>
      <RightPanel/>

    </div>
  )
}

export default App
