import React, { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import UseHandleUser from './hooks/UseHandleUser'
import Home from './pages/Home'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true'||false)
  UseHandleUser(setIsLoggedIn)

  return (
    <div>
        <Router>
            <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
            <Routes>
                <Route path='/' element={<Home />}/>
            </Routes>
        </Router>
    </div>
  )
}

export default App