import React from 'react'
import { NavLink } from 'react-router-dom'

function NavItemIcon({children, to}) {
  return (
    <div className=''>
        <NavLink to={to}>
            {children}
        </NavLink>
    </div>
  )
}

export default NavItemIcon