import React, { useState, useEffect } from 'react'
import {useSelector} from 'react-redux'
import MainHome from "../components/home/MainHome"
import WelcomeHome from "../components/home/WelcomeHome"

function Home() {
  const user = useSelector(state=>state.user.currentUser)
  console.log(user)

  return (
    <div>
      {user ? <MainHome /> : <WelcomeHome />}
    </div>
  )
}

export default Home