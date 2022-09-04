import React, { useEffect, useState } from 'react'
import Modal from '../components/form/Modal'
import UseLettersData from "../hooks/UseLettersData"
import moment from "moment"
import { useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'

function Boys() {
  const [toggleModal, setToggleModal] = useState(false)
  const {data, loading} = UseLettersData()
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
        <button className='bg-black text-2xl ml-10 text-white px-3 rounded-lg hover:text-black hover:bg-white hover:border-black hover:border-2 border-2 border-transparent transition-all'
        onClick={() => setToggleModal(true)}>Add</button>
        <div className='flex justify-center'>
        {toggleModal && <Modal setToggleModal={setToggleModal}/>}
        </div>
        <div className='w-full px-10 mt-5'>
          <p className='text-center text-3xl mb-6'>Progress</p>
          <div className='bg-black text-white p-3 rounded-lg'>
            {data && data.map((letter, id)=><p key={id}>{moment(letter.createdAt.toDate()).calendar()}, {letter.sender} has sent {letter.recipient} a letter </p>)}
          </div>
        </div>
    </div>
  )
}

export default Boys