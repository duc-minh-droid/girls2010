import React from 'react'
import {auth} from '../../fbconfig'
import {setPersistence, inMemoryPersistence, FacebookAuthProvider, signInWithPopup} from 'firebase/auth'

function Login({setIsLoggedIn}) {
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
      <button onClick={signIn}>Log In</button>
    </div>
  )
}

export default Login