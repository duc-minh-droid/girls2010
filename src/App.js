import React, { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home'
import {onAuthStateChanged} from 'firebase/auth'
import { auth } from './fbconfig'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true'||false)

//   const unsubscribe = onAuthStateChanged(auth, user => {
//     if (user) {
//       localStorage.setItem('currentUser', JSON.stringify(user))
//     } 
//   }) 
//   unsubscribe()

  return (
    <div>
        <Router>
            <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
            <Routes>
                <Route path='/' element={<Home isLoggedIn={isLoggedIn}/>}/>
            </Routes>
        </Router>
    </div>
  )
}

export default App