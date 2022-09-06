import React from 'react'
import {auth} from '../../fbconfig'
import {setPersistence, inMemoryPersistence, FacebookAuthProvider, signInWithPopup} from 'firebase/auth'
import {AiOutlineLogin} from 'react-icons/ai'

function LoginIcon({setIsLoggedIn}) {
  const signIn = () => {
    setPersistence(auth, inMemoryPersistence)
    .then(()=>{
      const provider = new FacebookAuthProvider()
      return signInWithPopup(auth, provider).then(()=>{
        setIsLoggedIn(true)
        localStorage.setItem('isLoggedIn', true)
      })
    })
    .catch(err=>console.log(err))
  }

  return (
    <div>
      <button className='border-green-500 border-2 text-green-500 rounded-full p-1 focus:border-transparent focus:bg-green-500 focus:text-white flex justify-center items-center'
       onClick={signIn}>
        <AiOutlineLogin size={35}/>
       </button>
    </div>
  )
}

export default LoginIcon