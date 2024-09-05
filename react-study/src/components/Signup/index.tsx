import { useState } from "react";

interface LoginData {
  username: string;
  password: string;
}

const Signup = () => {
  // const [ userId, setUserId ] = useState<string>('')
  // const [ userPassword, setUserPassword ] = useState<string>('')

  const [loginData, setLoginData] = useState<LoginData>({
    username: "",
    password: "",
  });

  const handleForm = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prev)=>({...prev, [name]:value }))
  }

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ marginBottom: "30px" }}>회원가입</h1>
      <input
        type="text"
        placeholder="아이디"
        style={{ marginBottom: "12px" }}
      />
      <input
        type="text"
        placeholder="비밀번호"
        style={{ marginBottom: "12px" }}
      />
      <button style={{ width: "100px" }}>회원가입</button>
    </div>
  );
};

export default Signup;
