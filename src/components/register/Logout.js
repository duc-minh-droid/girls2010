import React from 'react'
import {auth} from "../../fbconfig"
import {signOut} from 'firebase/auth'

function Logout({setIsLoggedIn}) {
  const handleLogOut = () => {
    signOut(auth)
    .then((res)=>{
      setIsLoggedIn(false)
      localStorage.setItem('isLoggedIn', false)
      localStorage.removeItem('currentUser')
    })
  }

  return (
    <>
      <button onClick={handleLogOut}>Log out</button>
    </>
  )
}

export default Logout