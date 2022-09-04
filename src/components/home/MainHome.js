import React from 'react'
import {useSelector} from 'react-redux'
import BoyHome from "./BoyHome"
import GirlHome from "./GirlHome"  

function MainHome() {
  const user = useSelector(state=>state.user.currentUser)

  return (
    <>
    {
      user.gender === 'boy' ?
      <BoyHome /> : <GirlHome />
    }
    </>
  )
}

export default MainHome