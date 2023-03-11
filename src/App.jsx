import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Createuser from './Components/Createuser'
import Edituser from './Components/Edituser'
import Homecrud from './Components/Homecrud'
import User from './Components/User'

const App = () => {
  return (
    <div>
        <BrowserRouter>
            <Homecrud/>
            <Routes>
                <Route element={<Createuser/>} path="/cu" />
                <Route element={<User/>} path="/u"/>
                <Route element={<Edituser/>} path="/eu/:data"/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App