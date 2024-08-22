import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../Login'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </BrowserRouter>

  )
}

export default Router