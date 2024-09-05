import { BrowserRouter, Routes, Route } from "react-router-dom"
import Main from "../Main"
import Signup from "../Signup"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router