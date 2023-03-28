import React from "react";
import { Routes, Route } from "react-router-dom";

import UserLayout from "../components/UserLayout";
import Blog from "../pages/Blog";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

function UserRoutes() {
  return (
    <Routes>
      <Route element={<UserLayout />} >
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/blogs' element={<Blog/>} />
      </Route>
    </Routes>
  );
}

export default UserRoutes;
