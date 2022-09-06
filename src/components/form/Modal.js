import React from 'react'
import ModalForm from './ModalForm'

function Modal({setToggleModal}) {
    return (
        <>
            <div className='bg-[rgba(0,0,0,0.3)] fixed inset-0 w-screen h-screen'
                onClick={() => setToggleModal(false)}></div>
            <div className='fixed z-50 lg:w-11/12 md:w-3/5 shadow-xl rounded-lg overflow-y-auto bg-white'>
                <div className='w-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-4 h-12 text-white flex items-center justify-between'>
                    Viết thư tình
                    <button className='bg-red-500 py-1 px-3 rounded-full hover:text-red-500 border-2 border-transparent hover:border-red-500 hover:bg-white'
                        onClick={() => setToggleModal(false)}
                    >X</button>
                </div>

                <div className='w-full'>
                    <ModalForm setToggleModal={setToggleModal} />
                </div>
            </div>
        </>
    )
}

export default Modal