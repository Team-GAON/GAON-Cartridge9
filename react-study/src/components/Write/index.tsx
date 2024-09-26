import axios from "axios";
import { API_URL } from '../../constants'
import { useState } from "react";
import { getCookie } from "../../libs/cookie/cookie";
import { useNavigate } from "react-router-dom";

interface WriteDate{
  title:string;
  detail:string;
  category:"FREE";
}

const Write = () => {
  const [writeData, setWriteData] = useState<WriteDate>({title:'', detail:'', category:'FREE'})
  const navigate = useNavigate();

  const handleForm = (e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) =>{
    const {name, value} = e.target
    setWriteData((prev)=>({...prev, [name]:value}))
  }

  const submit = async () => {
    try{
      const res = await axios.post(`${API_URL}/boards`, writeData, {
        headers: { Authorization: `Bearer ${getCookie('ACCESS_TOKEN')}`}
      })
      if (res){
        alert('글 작성 성공')
        navigate('/')
      }
    }catch(err){
      alert('글 작성 실패')
      console.log(err)
    }
  }

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "12px",
      }}
    >
      <h1>글쓰기</h1>
      <input
        type="text"
        placeholder="제목을 입력해주세용."
        style={{
          width: "300px",
          resize: "none",
          padding: "4px 8px",
          boxSizing: "border-box",  
        }}
        name='title'
        onChange={handleForm}
        value={writeData.title}
      />
      <textarea
        placeholder="내용 입력해주세용."
        style={{
          width: "300px",
          height: "300px",
          resize: "none",
          padding: "4px 8px",
          boxSizing: "border-box",
        }}
        name='detail'
        onChange={handleForm}
        value={writeData.detail}
      ></textarea>
      <button style={{padding:'4px 8px'}} onClick={()=>submit()}>게시하기</button>
    </div>
  );
};

export default Write;
