import React, { useState } from 'react'
import NavItemIcon from './NavItemIcon'
import { useSelector } from 'react-redux'
import LoginIcon from '../register/LoginIcon'
import LogoutIcon from '../register/LogoutIcon'
import { IoFlowerOutline } from 'react-icons/io5'
import { BiHomeHeart } from 'react-icons/bi'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { TbGenderDemiboy, TbGenderDemigirl } from 'react-icons/tb'
import { motion, AnimatePresence } from 'framer-motion'

const sidebarVariants = {
    hidden: {
        x: '-100vw',
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            mass: 0.4,
            damping: 8,
            delay: 0.5
        }
    },
}
function SideBar({ isLoggedIn, setIsLoggedIn }) {
    const user = useSelector(state => state.user.currentUser)
    const [isClicked, setIsClicked] = useState(false)

    return (
        <motion.div variants={sidebarVariants} initial='hidden' animate='visible' drag whileDrag={{ scale: 1.2 }} dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }} dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            className='md:hidden fixed flex flex-col ml-6 mt-10 shadow-xl p-3 pt-15 gap-4 rounded-full items-center bg-white z-40'>
            <div className='flex flex-col gap-3'>
                <motion.div onClick={() => setIsClicked(prev => !prev)}>
                    <IoFlowerOutline size={50} />
                </motion.div>
                <AnimatePresence>
                    {isClicked && (
                        <motion.div
                            variants={{
                                initial: {
                                    height: 0,
                                },
                                animate: {
                                    height: "auto",
                                    transition: {
                                        when: "beforeChildren",
                                    },
                                },
                                exit: {
                                    height: 0,
                                    transition: {
                                        when: "afterChildren",
                                    },
                                },
                            }}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            key={isClicked ? "enter" : "exit"}
                            className="text-lg font-light"
                        >
                            <motion.div
                                variants={{
                                    initial: {
                                        opacity: 0,
                                    },
                                    animate: {
                                        opacity: 1,
                                    },
                                    exit: {
                                        opacity: 0,
                                    },
                                }}
                            >
                                <>
                                    <div className='flex flex-col gap-3'>
                                        <NavItemIcon to='/'>
                                            <BiHomeHeart size={50} />
                                        </NavItemIcon>
                                        {user && <>
                                            {user.gender === "girl" && <NavItemIcon to='/girls'>
                                                <TbGenderDemigirl size={50} />
                                            </NavItemIcon>}
                                            {user.gender === "boy" && <NavItemIcon to='/boys'>
                                                <TbGenderDemiboy size={50} />
                                            </NavItemIcon>}
                                        </>}
                                        <NavItemIcon to='/credit'>
                                            <AiOutlineInfoCircle size={50} />
                                        </NavItemIcon>
                                        <div className='flex'>
                                            {!isLoggedIn ? <LoginIcon setIsLoggedIn={setIsLoggedIn} /> : <LogoutIcon setIsLoggedIn={setIsLoggedIn} />}
                                        </div>
                                    </div>
                                </>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    )
}

export default SideBar