import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import instance from '../../libs/axios/instance';
import { Board, User } from "../../types/auth/auth.type";

const BoardDetail = () => {

  const params = useParams();

  const [board, setBoard] = useState<Board>();
  const [isLike, setIsLike] = useState<Boolean>(); 
  const [user, setUser] = useState<User>();

  const navigate = useNavigate();

  const getMe = async () => {
    try {
      const res = await instance.get(`/auth/me`);
      if (res) {
        setUser(res.data);
      }
    } catch (err) {
      navigate("/login");
      console.log(err, "네트워크에러");
    }
  };

  const boardReq = async () => {
    try{
      const res = await instance.get(`/boards/${params.id}/`)
      if(res){
        setBoard(res.data)
      }
    }catch(err){
      alert(`err : ${err}`)
    }
  }

  const getLike = async () => {
    try{
      const res = await instance.get(`/likes/${params.id}`)
      if(res){
        setIsLike(res.data)
      }
    }catch(err){
      alert(`err : ${err}`)
    }
  }

  const like = async () => {
    try{
        const res = await instance.post(`/likes/${params.id}`)
        if(res){
          getLike()
          boardReq()
        }
      }catch(err){
      alert(`err : ${err}`)
      navigate('/login')
    }
  }

  const unLike = async () => {
    try{
      const res = await instance.delete(`/likes/${params.id}`)
      if(res){
        getLike()
        boardReq()
      }
    }catch(err){
      alert(`err : ${err}`)
      navigate('/login')
    }
  }

  useEffect(()=>{
    if(params.id){
      boardReq()
      getMe()
    }
  }, [params.id])
  
  return (
    <div>
      <h1>{board?.title}</h1>
      <br />
      <p>{board?.detail}</p>
      <br />
      <p>{board?.author.username}</p>
      <br />
      <p>{board?.createAt}</p>
      <br />
      {board?.author != user?.username ? (
        isLike === true ? (<div onClick={()=>unLike()}>좋아요 됨</div>) : (<div onClick={()=>like()}>좋아요 안됨</div>)
        ) : (
          <div>이거 님 글임.</div>
        )}
      <br/>
      <p>{board?.likesCount}</p>
      
    </div>
  )
}

export default BoardDetail