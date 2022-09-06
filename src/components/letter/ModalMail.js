import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ModalContent from './ModalContent'

const backdropVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
}

const modalVariants = {
    hidden: {
        y: '-100vh',
        opacity: 0
    },
    visible: {
        y: 0, // Check it out
        opacity: 1,
        transition: {
            type: 'spring',
            mass: 0.4,
            damping: 8,
            delay: 0.5
        }
    }
}

function ModalMail({ toggleModal, setToggleModal }) {
    return (
        <AnimatePresence exitBeforeEnter>
            {toggleModal && (
                <motion.div variants={backdropVariants} animate='visible' initial='hidden' exit='hidden'
                    className='fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] z-50 flex justify-center items-center'
                    onClick={(e) => { setToggleModal(false) }}>
                    <motion.div variants={modalVariants}
                        className='bg-white w-4/5 md:w-1/2 lg:w-1/3 rounded-lg'
                        onClick={e => e.stopPropagation()}>
                        <ModalContent setToggleModal={setToggleModal} />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default ModalMail