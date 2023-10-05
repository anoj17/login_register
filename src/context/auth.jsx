import React, { Children, useEffect, useState } from 'react'
import { apiClient } from '../api/Index'

export const Authcontext = React.createContext(null)

const AuthProvider = ({ children }) => {
  const isTokenPresent = sessionStorage.getItem("token") || localStorage.getItem("token")
  const [isAuthenticated, setIsAuthenticated] = useState(Boolean(isTokenPresent))

  const [accesstoken, setAccesstoken] = useState(isTokenPresent)
  const [user, setUser] = useState({
    id: '', email: ''
  })


  useEffect(() => {

    if (isTokenPresent) {
      // console.log('token presetn', accesstoken)
      apiClient.defaults.headers.common["Authorization"] = `Bearer ${accesstoken}`;
    }
  }, [])

  const signIn = ({ email, token, name }, callback) => {
    if (token) {
      apiClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      (token);
      setUser({ email, name });
      callback();
    }
  }

  const signOut = (callback) => {
    sessionStorage.removeItem("token");
    localStorage.removeItem("token");
    sessionStorage.clear();
    localStorage.clear();
    setIsAuthenticated(false);
    callback() //last ma signout function call garako thau ma na=vigate hunxa
  }

  const value = {
    isAuthenticated, user, setUser, accesstoken, setAccesstoken, setIsAuthenticated, signIn, signOut
  }


  return <>

    <Authcontext.Provider value={value}>
      {children}
    </Authcontext.Provider>

  </>
}

export default AuthProvider