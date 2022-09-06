import React from 'react'
import { NavLink } from 'react-router-dom'
import BodyContainer from '../container/BodyContainer'

function BoyHome() {
  return (
    <BodyContainer>
      <p>Con trai thì bấm vào đây</p>
      <div className='bg-black text-white inline-block py-1 px-3 rounded-3xl border-transparent border-2 hover:border-black hover:bg-transparent hover:text-black transition-all'>
        <NavLink to='/boys'>Viết thư</NavLink>
      </div>
    </BodyContainer>
  )
}

export default BoyHome