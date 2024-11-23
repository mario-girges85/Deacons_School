import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import Userlayout from "./Userlayout";
import Adminlayout from "./Adminlayout";
import Nav from "./components/Nav";
import axios from "axios";
const App = () => {
  const apiurl = import.meta.env.VITE_API_URL;
  const [users, setusers] = useState([]);
  const [userdata, setuserdata] = useState(null);
  const [userid, setuserid] = useState(localStorage.id);
  const [cn, setcn] = useState(localStorage.cn);
  //all users data
  const getusersdata = () => {
    axios
      .get(`${apiurl}users/`)
      .then((data) => {
        setusers(data.data);
      })
      .then(() => {
        // console.log(userdata);
      });
  };
  useEffect(() => {
    getusersdata();
  }, [userdata]);

  //logged user data
  const getuserdata = () => {
    axios
      .get(`${apiurl}users/${userid}`)
      .then((data) => {
        setuserdata(data.data);
      })
      .then(() => {})
      .catch(() => {
        console.error("error catching logged user data");
      });
  };

  useEffect(() => {
    if (cn) {
      getuserdata();
    }
  }, [cn]);
  return (
    <div className="w-11/12 m-auto">
      <Nav cn={cn} userdata={userdata} />
      <Routes>
        <Route
          path="/*"
          element={
            <Userlayout
              userdata={userdata}
              userid={userid}
              setcn={setcn}
              setuserid={setuserid}
              users={users}
            />
          }
        ></Route>
        {userdata?.role == "admin" && (
          <Route path="/admin/*" element={<Adminlayout />}></Route>
        )}
      </Routes>
    </div>
  );
};

export default App;
