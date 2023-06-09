import React from "react";
import { Routes, Route } from "react-router-dom";

import UserLayout from "../components/UserLayout";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

function UserRoutes() {
  return (
    <Routes>
      <Route element={<UserLayout />} >
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path='signup' element={<Signup/>} />
        <Route path='blogs' element={<Blog/>} />
        <Route path='contact' element={<Contact/>} /> 
        <Route path='about' element={<About/>} />
      </Route>
    </Routes>
  );
}

export default UserRoutes;
