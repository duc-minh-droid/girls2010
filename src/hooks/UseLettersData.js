import React, { useEffect, useState } from 'react'
import {getDocs, orderBy, query} from 'firebase/firestore'
import { lettersDB } from '../fbconfig'

function UseLettersData() {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        const fetchData = async () => {
            const lettersQuery = query(lettersDB, orderBy('createdAt', 'desc'))
            const lettersFetch = await getDocs(lettersQuery)
            const letters = lettersFetch.docs.map(doc => ({id: doc.id, ...doc.data()}))
            setData(letters)
            setLoading(false)
        }
        fetchData()
    }, [])

  return {data, loading}
}

export default UseLettersData