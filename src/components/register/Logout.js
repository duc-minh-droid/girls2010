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
      <button className='bg-red-500 my-2 px-3 text-white rounded-3xl border border-transparent hover:border-red-500 hover:bg-transparent hover:text-red-500'
       onClick={handleLogOut}>Log out</button>
    </>
  )
}

export default Logout