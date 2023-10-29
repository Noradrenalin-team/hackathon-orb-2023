import { Navigate } from "react-router-dom"
import {UpdateContext} from 'app/contexts'
import { useContext, useEffect } from "react"

const Exit = () => {
  const {setUser} = useContext(UpdateContext)
  
  useEffect(() => {
    setUser({
      isLogin: false
    })
    localStorage.removeItem('user')
    localStorage.setItem('isLogin', 'false')
    
    fetch('api/auth/logout')
  })
  
  return <Navigate to={'/'}/>
}

export default Exit