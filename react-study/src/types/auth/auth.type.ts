export interface AuthData {
  username: string;
  password: string;
}

export interface Board{
  title:string;
  detail:string;
  createAt:string;
  category:string;
  author:User;
  id:number;
  likesCount:number;
}

export interface User{
  id:number;
  username:string;
  board:Board[];
}