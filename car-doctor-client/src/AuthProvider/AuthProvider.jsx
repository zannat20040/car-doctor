import React, { createContext, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firebase/Firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser ]  = useState(null)
    const provider = new GoogleAuthProvider();
    const createUserWithPassword = ( email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

   const  signInWithGoogle=()=>{
    return signInWithPopup(auth, provider)
   }

   const signInWithPass = (email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
   }
  
   const signOutProfile=()=>{
    return signOut(auth)
   }
  
   


    const authInfo={
        createUserWithPassword,
        user,
        setUser,
        signInWithGoogle,
        signInWithPass,
        signOutProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;