import {Route, Routes} from 'react-router-dom'
import HomePage from './Pages/Home/HomePage'
import SignUpPage from './Pages/auth/Signup/SignUpPage'
import LoginPage from './Pages/auth/Login/LoginPage'

function App() {

  return (
    <div className="flex max-w-6xl mx-auto">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
      </Routes>

    </div>
  )
}

export default App
