import useAuth from "../../hooks/auth/useAuth";

const Signup = () => {
  const {...auth} = useAuth()

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
        name="username"
        value={auth.signUpData.username}
        onChange={auth.handleSignup}
      />
      <input
        type="text"
        placeholder="비밀번호"
        style={{ marginBottom: "12px" }}
        name='password'
        value={auth.signUpData.password}
        onChange={auth.handleSignup}
      />
      <button style={{ width: "100px" }} onClick={auth.signup} disabled={auth.loading}>{auth.loading ? '회원가입 중...' : '회원가입'}</button>
    </div>
  );
};

export default Signup;