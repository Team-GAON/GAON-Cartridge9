import { Cookies } from "react-cookie";

const cookie = new Cookies();

const setCookie = (name:string, value:string, options:{}) => {
  return cookie.set(name, value, {...options})
}
const getCookie = (name:string) => {
  return cookie.get(name)
}
const removeCookie = (name:string) => {
  return cookie.remove(name)
}

export {
  setCookie,
  getCookie,
  removeCookie
}