import './App.css'
import Login from './components/Login'
import SignUp from './components/SignUp'
import NavBar from './components/NavBar'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Profile from './components/Profile'
import Home from './components/Home'
import Error from './components/Error'
import Logout from './components/Logout'

function App() {


  return (
    <>
      <BrowserRouter>
      <div>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/error' element={<Error />}></Route>
          <Route path='/logout' element={<Logout/>}></Route>
        </Routes>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
