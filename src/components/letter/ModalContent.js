import React from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import UseFetchLetter from '../../hooks/UseFetchLetter'

function ModalContent({ setToggleModal }) {
    const recipient = useSelector(state => state.user.currentUser)
    const { data, loading } = UseFetchLetter(recipient.displayName)

    return (
        <>
            <div className='flex justify-between px-3 py-2 items-center z-50'>
                <p>Thư dành cho cô gái A5 yêu quý!</p>
                <button onClick={() => setToggleModal(false)}
                className='bg-red-500 rounded-full text-white'>
                    <AiOutlineCloseCircle size={30} />
                </button>
            </div>
            <div className='px-3'>
                <div className='flex justify-between items-center'>
                    <p>Dear {data.recipient},</p>
                    <img alt='' src={recipient.photoURL} className='rounded-full' />
                </div>
                <div>
                    <span dangerouslySetInnerHTML={{ __html: data.content }}></span>
                </div>
            </div>
        </>
    )
}

export default ModalContent