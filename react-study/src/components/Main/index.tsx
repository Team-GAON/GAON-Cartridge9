import axios from "axios";
import { API_URL } from "../../constants";
import { getCookie } from "../../libs/cookie/cookie";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import BoardItem from "../BoardItem";
import instance from "../../libs/axios/instance";
import { Board, User } from "../../types/auth/auth.type";

const Main = () => {
  const [user, setUser] = useState<User>();
  const navigate = useNavigate();
  const [boards, setBoards] = useState<Board[]>([]);

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

  useEffect(() => {
    getMe();
    getBoard();
  }, []);

  const getBoard = async () => {
    try {
      const res = await axios.get(`${API_URL}/boards`);
      if (res) {
        setBoards(res.data);
      }
    } catch (err) {
      alert("에러 : " + err);
    }
  };
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {user ? user.username : "유저가 없습니다."} <br />
      <Link to="/write">글 쓰러 가기</Link>
      <div style={{ width: "100%" }}>
        {boards.map((item) => (
          <BoardItem
            title={item.title}
            author={item.author}
            createAt={item.createAt}
            id={item.id}
            detail={item.detail}
            category={item.category}
            likesCount={item.likesCount}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Main;
