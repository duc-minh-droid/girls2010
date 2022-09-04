import React, { useEffect } from 'react'
import { auth, usersDB } from "../fbconfig"
import { doc, getDoc, setDoc, onSnapshot } from 'firebase/firestore'
import { useDispatch } from 'react-redux'
import { setCurrentUser } from "../redux/user/actions"

function UseHandleUser(setLoggedIn) {
    const dispatch = useDispatch()

    const handleProfile = async (user) => {
        if (!user) return
        const userRef = doc(usersDB, user.uid)
        let gender = 'girl'
        const snapshot = await getDoc(userRef)
        const boys = ['Duc Minh Ng']

        if (!snapshot.exists()) {
            try {
                const { displayName, email, photoURL, uid } = user
                if (boys.includes(displayName)) {
                    gender = 'boy'
                }
                await setDoc(userRef, {
                    displayName,
                    email,
                    photoURL,
                    uid,
                    gender,
                })
            } catch (e) {
                console.log(e)
            }
        }

        return userRef
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async user => {
            if (user) {
                setLoggedIn(true)
                localStorage.setItem('isLoggedIn', true)
                const userRef = await handleProfile(user)
                onSnapshot(userRef, (doc) => {
                    const { displayName, email, photoURL, uid, gender } = doc.data()
                    dispatch(setCurrentUser({
                        displayName,
                        email,
                        photoURL,
                        uid,
                        gender,
                    }))
                })
            } else {
                setLoggedIn(false)
                localStorage.setItem('isLoggedIn', false)
                dispatch(setCurrentUser(null))
            }
        })

        return () => unsubscribe()
    }, [])

    return null
}

export default UseHandleUser