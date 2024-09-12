import useAuth from "../../hooks/auth/useAuth";

const Login = () => {

  const {...auth} = useAuth();

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
      <h1 style={{ marginBottom: "30px" }}>로그인</h1>
      <input
        type="text"
        placeholder="아이디"
        style={{ marginBottom: "12px" }}
        name="username"
        value={auth.loginData.username}
        onChange={auth.handleLogin}
      />
      <input
        type="text"
        placeholder="비밀번호"
        style={{ marginBottom: "12px" }}
        name='password'
        value={auth.loginData.password}
        onChange={auth.handleLogin}
      />
      <button style={{ width: "100px" }} onClick={auth.login} disabled={auth.loading}>{auth.loading ? '로그인 중...' : '로그인'}</button>
    </div>
  );
};

export default Login;
