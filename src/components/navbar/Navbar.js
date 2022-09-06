import React, { useState } from 'react'
import Login from "../register/Login"
import Logout from "../register/Logout"
import { useSelector } from 'react-redux'
import NavItem from './NavItem'
import SideBar from './SideBar'

function Navbar({ setIsLoggedIn, isLoggedIn }) {
  const user = useSelector(state => state.user.currentUser)

  return (
    <>
      <SideBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <nav className='md:flex justify-between px-6 shadow-xl hidden'>
        <img className='w-24 h-full mt-1'
        alt='' src='https://scontent.fhan5-3.fna.fbcdn.net/v/t1.15752-9/301767622_886169382359404_2916621903943358726_n.png?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_ohc=6J9nLnda4yAAX_t7chD&_nc_ht=scontent.fhan5-3.fna&oh=03_AVJcLqrHonDzXVfP0nRMBhbE-j8Zi-NjpnbtTtLXoqJ_qQ&oe=6339CE96' />
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
    </>
  )
}

export default Navbar