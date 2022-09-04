import React, { useEffect, useState } from 'react'
import {doc, getDocs, query, where} from 'firebase/firestore'
import {lettersDB} from "../fbconfig"

function UseFetchLetter(recipient) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const fetchLetter = async () => {
            const letterQuery = query(lettersDB, where("recipient", "==", recipient))
            const letterDoc = await getDocs(letterQuery)
            const letter = letterDoc.docs.map(doc => ({id: doc.id, ...doc.data()}))[0]
            setData(letter)
            setLoading(false)
        }
        fetchLetter()
    },[])
  return {data,loading}
}

export default UseFetchLetter