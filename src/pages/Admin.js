import React, { useState, useEffect } from 'react';
import { Auth } from './firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import AdminPanel from './AdminPanel';
import Login from './Login';


const Admin = () => {
    const [isLoggedIn, setIsLoggedIn] = useState();
    
    useEffect(() => {
      onAuthStateChanged(Auth, (user) => {
        if (user) {
          const uid = user.uid;
          // Check if the user is logged in before setting isLoggedIn
          if (getAuth().currentUser) {
            setIsLoggedIn(true);
          }
        } else {
          setIsLoggedIn(false);
          // User is signed out
          // ...
          //alert(isLoggedIn)
        }
      });
    }, []);
  
    return (
      <>
      {
          isLoggedIn ? <AdminPanel/> : <Login/>
      }
      </>
    )
  }
  
  export default Admin