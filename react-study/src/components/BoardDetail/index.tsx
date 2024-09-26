import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import instance from '../../libs/axios/instance';
import { Board, User } from "../../types/auth/auth.type";

const BoardDetail = () => {

  const params = useParams();

  const [board, setBoard] = useState<Board>();

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

  useEffect(()=>{
    if(params.id){
      boardReq()
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
    </div>
  )
}

export default BoardDetail