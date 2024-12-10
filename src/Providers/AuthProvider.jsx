import { createContext } from 'react-router-dom'
import { getAuth } from "firebase/auth";
import app from "./../Firebase/firebase.config";
import { useState } from 'react'

export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const authInf = {
    auth,
    user,
    loading

  }
  return (
    <AuthContext.Provider>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;