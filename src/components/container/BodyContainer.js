import React from 'react'

function BodyContainer({children}) {
  return (
    <div
     className='pl-32 pt-10 pr-6 md:px-0 transition-all bg-gradient-to-r from-[#ee9ca7] to-[#ffdde1] min-h-screen'>
        {children}
    </div>
  )
}

export default BodyContainer