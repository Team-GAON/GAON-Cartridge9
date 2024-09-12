import React, { useState } from 'react'
import { AuthData } from '../../types/auth/auth.type'
import axios from 'axios'
import { setCookie } from '../../libs/cookie/cookie'
import { useNavigate } from 'react-router-dom'
import { API_URL } from '../../constants'

const useAuth = () => {
  const [loginData, setLoginData] = useState<AuthData>({username:'', password:''})
  const [signUpData, setSignUpData] = useState<AuthData>({username:'', password:''})

  const [loading, setLoading] = useState<boolean>(false)

  const navigate = useNavigate()

  const handleLogin = (e:React.ChangeEvent<HTMLInputElement>) =>{
    const {name, value} = e.target
    setLoginData((prev)=>({...prev, [name]:value}))
  }
  const handleSignup = (e:React.ChangeEvent<HTMLInputElement>) =>{
    const {name, value} = e.target
    setSignUpData((prev)=>({...prev, [name]:value}))
  }

  const login = async () =>{
    setLoading(true)
    try {
      const res = await axios.post(`${API_URL}/auth/login`, loginData)
      if (res){
        setCookie('ACCESS_TOKEN', res.data.data.accessToken, {path:'/'})
        setCookie('REFRESH_TOKEN', res.data.data.refreshToken, {path:'/'})
      }
      
    } catch {
      alert('네트워크에러')
    }
    setLoading(false)
  }

  const signup = async () =>{
    setLoading(true)
    try {
      const res = await axios.post(`${API_URL}/auth/signup`, signUpData)
      if (res){
        navigate('/login')
      }
    } catch {
      alert('네트워크에러')
    }
    setLoading(false)
  }
  return{
    loginData,
    signUpData,
    handleLogin,
    handleSignup,
    login,
    signup,
    loading
  }
}

export default useAuth