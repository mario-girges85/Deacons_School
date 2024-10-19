import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import Userlayout from "./Userlayout";
import Adminlayout from "./Adminlayout";
import Nav from "./components/Nav";
import axios from "axios";
const App = () => {
  const apiurl = import.meta.env.VITE_API_URL;

  const [users, setusers] = useState([]);

  const getusersdata = () => {
    axios.get(`${apiurl}users/`).then((data) => {
      setusers(data.data);
    });
  };
  useEffect(() => getusersdata(), []);
  return (
    <div className="w-11/12 m-auto">
      <Nav />
      <Routes>
        <Route path="/*" element={<Userlayout users={users} />}></Route>
        <Route users={users} path="/admin/*" element={<Adminlayout />}></Route>
      </Routes>
    </div>
  );
};

export default App;
