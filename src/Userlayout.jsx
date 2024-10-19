import React from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/user/Home";
import Login from "./pages/user/Login";
import Signup from "./pages/user/Signup";
const Userlayout = ({ users }) => {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login users={users} />}></Route>
        <Route path="/signup" element={<Signup users={users} />}></Route>
      </Routes>
    </div>
  );
};

export default Userlayout;
