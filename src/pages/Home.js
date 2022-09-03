import React, { useState, useEffect } from 'react'
import { auth } from '../fbconfig'

function Home({ isLoggedIn }) {
  // const [user, setUser] = useState(localStorage.getItem('currentUser'));
  // useEffect(() => {
  //   const onStorage = () => {
  //     setUser = localStorage.getItem('currentUser');
  //   };
  //   window.addEventListener('storage', onStorage);
  //   return () => {
  //     window.removeEventListener('storage', onStorage);
  //   };
  // }, [user]);
  
  if (!auth.currentUser) return 'Hello world'
  return (
    <div>
      {auth.currentUser && auth.currentUser.displayName}
      {/* {user ? "Hello user" : "Hello world"} */}
    </div>
  )
}

export default Home