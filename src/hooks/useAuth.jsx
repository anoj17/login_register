import React, { useContext } from 'react'
import { Authcontext } from '../context/auth'

const useAuth = () => {
  return useContext(Authcontext)
}

export default useAuth