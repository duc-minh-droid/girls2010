import React from 'react'
import {auth} from "../../fbconfig"
import {signOut} from 'firebase/auth'
import {AiOutlineLogout} from 'react-icons/ai'

function LogoutIcon({setIsLoggedIn}) {
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
      <button className='border-red-500 border-2 text-red-500 rounded-full p-1 focus:border-transparent focus:bg-red-500 focus:text-white flex justify-center items-center'
       onClick={handleLogOut}>
        <AiOutlineLogout size={35}/>
       </button>
    </>
  )
}

export default LogoutIcon