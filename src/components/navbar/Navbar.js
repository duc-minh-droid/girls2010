import React, { useState } from 'react'
import Login from "../register/Login"
import Logout from "../register/Logout"
import { useSelector } from 'react-redux'
import NavItem from './NavItem'

function Navbar({ setIsLoggedIn, isLoggedIn }) {
  const user = useSelector(state => state.user.currentUser)

  return (
    <nav className='flex justify-between px-6 shadow-xl mb-10'>
      <img className='w-20 h-6'
      alt='' src='/ducminhng/2.jpeg' />
      <div className='flex'>
        <NavItem to='/'>Home</NavItem>
        {user && <>
          {user.gender === "girl" && <NavItem to='/girls'>Girls</NavItem>}
          {user.gender === "boy" && <NavItem to='/boys'>Boys</NavItem>}
        </>}
        <NavItem to='/credit'>Credit</NavItem>
      </div>
      <div className='flex'>
        {!isLoggedIn ? <Login setIsLoggedIn={setIsLoggedIn} /> : <Logout setIsLoggedIn={setIsLoggedIn} />}
      </div>
    </nav>
  )
}

export default Navbar