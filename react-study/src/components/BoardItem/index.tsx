import { useNavigate } from "react-router-dom";
import { Board } from "../../types/auth/auth.type";

const BoardItem = (props:Board) => {

  const navigation = useNavigate()

  return (
    <div
      style={{
        width: "100%",
        height: "100px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        padding: "16px",
        boxSizing: "border-box",
        cursor:'pointer',
      }}
      onClick={()=>{navigation(`/board/${props.id}`)}}
    >
      <h1 style={{cursor:'pointer'}}>{props.title}</h1>
      <p>{props.author.username}</p>

      <p>{props.createAt}</p>
      <p>{props.likesCount}</p>
    </div>
  );
};

export default BoardItem;
