import { createContext, useEffect } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from "./../Firebase/firebase.config";
import { useState } from 'react'

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

  useEffect(() => {
    const unsubsCribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      console.log(currentUser);
      setLoading(false)

    })
    return () => {
      return unsubsCribe()
    }
  }, [])

  const authInf = {
    user,
    loading,
    createUser,
    logInUser

  }
  return (
    <AuthContext.Provider value={authInf}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;