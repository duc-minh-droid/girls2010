import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import UseFetchLetter from '../../hooks/UseFetchLetter'

function ModalLetter({ setToggleModal, toggleModal }) {
    const recipient = useSelector(state => state.user.currentUser)
    const { data, loading } = UseFetchLetter(recipient.displayName)

    return (
        <div className='w-screen h-screen flex justify-center'>
            <div className='bg-[rgba(0,0,0,0.3)] fixed inset-0 w-screen h-screen'
                onClick={() => setToggleModal(false)}></div>
            <div className='fixed z-10 w-11/12 shadow-xl rounded-lg overflow-y-auto bg-white'>
                {data.recipient}
                <img alt='' src={recipient.photoURL} className='rounded-full'/>
                <span dangerouslySetInnerHTML={{ __html: data.content }}></span>
                <div className='flex'>
                {[1,2,3,4].map(e=><img className='rounded-full w-20 h-20'
                 key={e} alt='' src={`/${data.slug}/${e}.jpeg`} />)}
                </div>
            </div>
        </div>
    )
}

export default ModalLetter