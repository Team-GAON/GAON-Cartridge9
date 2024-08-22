import React, { useState } from 'react'
import axios from 'axios';
import * as S from './style'

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsername = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setUsername(e.target.value);
  }

  const handlePassword = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setPassword(e.target.value);
  }

  const submit = ()=>{
    axios.post('http://http://dgsw-local.mcv.kr:8080/auth/signup',{
      email:username,
      password:password
    }).then((res)=>{
      console.log(res);
    }).catch((err)=>{
      console.log(err)
    })
  }

  return (
    <S.Container>
      <S.Label>아이디</S.Label>
      <S.Input onChange={handleUsername}></S.Input>
      <S.Label>비밀번호</S.Label>
      <S.Input onChange={handlePassword}></S.Input>
      <S.Button onClick={submit}>로그인</S.Button>
    </S.Container>
  )
}

export default Login