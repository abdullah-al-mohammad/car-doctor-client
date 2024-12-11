import { createContext } from 'react'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "./../Firebase/firebase.config";
import { useState } from 'react'

export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)


  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const logInUser = (email, password) => {
    return signInWithEmailAndPassword(auth.email, password)
  }

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