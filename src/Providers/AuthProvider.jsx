import { createContext, useEffect } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "./../Firebase/firebase.config";
import { useState } from 'react'
import axios from 'axios';

export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)


  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const logInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }

  useEffect(() => {
    const unsubsCribe = onAuthStateChanged(auth, currentUser => {
      const userEmail = currentUser?.email || user?.email
      const loggedInUser = { email: userEmail }
      setUser(currentUser)
      setLoading(false)
      if (currentUser) {
        axios.post('https://cardoctor-bdserver-delta.vercel.app//jwt', loggedInUser, { withCredentials: true })
          .then(res => {
            console.log('token response');

          })
      } else { // for clear cookie
        axios.post('https://cardoctor-bdserver-delta.vercel.app//logout', loggedInUser, { withCredentials: true })
          .then(res => {
            // console.log(res.data);

          })
      }

    })
    return () => {
      return unsubsCribe()
    }
  }, [])

  const authInf = {
    user,
    loading,
    createUser,
    logInUser,
    logOut

  }
  return (
    <AuthContext.Provider value={authInf}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;