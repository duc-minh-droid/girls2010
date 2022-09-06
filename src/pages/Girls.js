import React, { useEffect, useState } from 'react'
import { CgMail } from 'react-icons/cg'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import JumpButton from '../components/buttons/JumpButton'
import ImageSlider from '../components/letter/ImageSlider'
import ModalMail from '../components/letter/ModalMail'
import UseFetchLetter from '../hooks/UseFetchLetter'
import { motion, AnimatePresence } from 'framer-motion'

function Girls() {
  const [toggleModal, setToggleModal] = useState(false)
  const user = useSelector(state => state.user.currentUser)
  const navigate = useNavigate()
  const recipient = useSelector(state => state.user.currentUser)
  const { data, loading } = UseFetchLetter(recipient.displayName)
  const [isOpened, setIsOpened] = useState(false)
  const [Y, setY] = useState(0)

  useEffect(() => {
    if (!user) {
      navigate('/')
    }
    if (user && user.gender !== 'girl') {
      navigate('/')
    }
  }, [user])

  return (
    <div className='pt-10 pr-6 md:px-0 transition-all bg-gradient-to-r from-[#ee9ca7] to-[#ffdde1] min-h-screen flex flex-col justify-between'>
      <div className='pl-32 text-3xl w-full text-center'>
        <p>Á đù, cái gì thế này?</p>
      </div>
      <div className='pl-32 flex justify-center'>
        <AnimatePresence>
          {!isOpened && 
          <motion.button onClick={() => {
            setY('100vh')
            setTimeout(()=>{
              setIsOpened(true)
            }, 500)
            }} 
            className='w-44 flex flex-col items-center'>
            <motion.div animate={{y: '-'+Y, transition: {type: 'fade'}}}
            className='lid w-44 h-6  bg-[url("https://cdn3.vectorstock.com/i/1000x1000/15/07/seamless-texture-with-gift-boxes-for-celebrate-vector-4521507.jpg")] bg-hero bg-no-repeat bg-cover bg-center bg-fixed'></motion.div>
            <motion.div animate={{y: Y, transition: {type: 'fade'}}}
            className='box flex justify-center items-center w-40 h-40 bg-[url("https://img.freepik.com/premium-vector/vector-flat-seamless-texture-pattern-gift-box_51635-1311.jpg")] bg-hero bg-no-repeat bg-cover bg-center bg-fixed'>
            </motion.div>
          </motion.button>}
        </AnimatePresence>

        {isOpened && <motion.div animate={{opacity: 1, transition: {type: 'fade'}}} initial={{opacity: 0}}
        className='p-2 bg-white rounded-2xl flex flex-col items-center'>
          <CgMail size={100} />
          Bạn nhận được một phần quà! Bạn có muốn mở không?
          <div className='flex gap-3'>
            <button onClick={() => setToggleModal(true)}
              className='border px-3 py-1 rounded-full'>Có</button>
            <JumpButton />
          </div>
          <ModalMail toggleModal={toggleModal} setToggleModal={setToggleModal} />
        </motion.div>}
      </div>
      <div className='w-full h-48'>
        <ImageSlider slug={data.slug} />
      </div>
    </div>
  )
}

export default Girls