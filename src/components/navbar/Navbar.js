import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Login from "../register/Login"
import Logout from "../register/Logout"

function Navbar({setIsLoggedIn, isLoggedIn}) {
  
  return (
    <nav className='flex justify-between'>
        <div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/girls'>Girls</NavLink>
            <NavLink to='/boys'>Boys</NavLink>
            <NavLink to='/credit'>Credit</NavLink>
        </div>
        <div className='flex'>
            {!isLoggedIn? <Login setIsLoggedIn={setIsLoggedIn}/>: <Logout setIsLoggedIn={setIsLoggedIn}/>}
        </div>
    </nav>
  )
}

export default Navbar