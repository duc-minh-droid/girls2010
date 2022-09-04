import React, { useEffect, useState } from 'react'
import {CgMail} from 'react-icons/cg'
import ModalLetter from '../components/letter/ModalLetter'
import { useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'

function Girls() {
  const [toggleModal, setToggleModal] = useState(false)
  const user = useSelector(state=>state.user.currentUser)
  const navigate = useNavigate()

  useEffect(()=>{
    if (!user) {
      navigate('/')
    }
    if (user && user.gender === 'girl') {
      navigate('/')
    }
  }, [user])

  return (
    <div>
        <button onClick={() => setToggleModal(true)}>
            <CgMail size={100}/>
        </button>
        {toggleModal && <ModalLetter setToggleModal={setToggleModal} toggleModal={toggleModal}/>}
    </div>
  )
}

export default Girls