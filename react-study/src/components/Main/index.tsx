import axios from "axios"
import { API_URL } from '../../constants'
import { getCookie } from '../../libs/cookie/cookie'
import { useEffect, useState } from "react"
import { useNavigate, Link } from "react-router-dom";

interface Board{
  title:string;
  detail:string;
  createAt:string;
  category:string;
  author:User;
  id:number;
  likesCount:number;
}
interface User{
  id:number;
  username:string;
  board:Board[];
}

const Main = () => {

  const [user, setUser] = useState<User>();
  const navigate = useNavigate();

  const getMe = async () => {
    try{
      const res = await axios.get(`${API_URL}/auth/me`, {headers:{Authorization:`Bearer ${getCookie('ACCESS_TOKEN')}`}})
      if (res){
        setUser(res.data)
      }
    }catch(err){
      navigate('/login')
      console.log(err,'네트워크에러')
    }
  }

  useEffect(()=>{
    getMe()
  }, [])

  return (
    <div>
      {user && user.username} <br />
      <Link to='/write'>글 쓰러 가기</Link>
    </div>
  )
}

export default Main