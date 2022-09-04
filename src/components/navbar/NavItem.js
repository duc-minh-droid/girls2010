import React from 'react'
import { NavLink } from 'react-router-dom'

function NavItem({children, to}) {
  return (
    <div className='px-4 py-2 text-xl hover:bg-black hover:text-white'>
        <NavLink to={to}>
            {children}
        </NavLink>
    </div>
  )
}

export default NavItem