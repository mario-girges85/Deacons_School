import React from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/user/Home";
import Login from "./pages/user/Login";
import Signup from "./pages/user/Signup";
import Notfound from "./pages/Notfound";
const Userlayout = ({ users, userid, setuserid, setcn, userdata }) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home userdata={userdata} />}></Route>
        <Route
          path="/login"
          element={
            <Login
              userdata={userdata}
              setcn={setcn}
              setuserid={setuserid}
              userid={userid}
              users={users}
            />
          }
        ></Route>
        <Route path="/signup" element={<Signup users={users} />}></Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
    </div>
  );
};

export default Userlayout;
