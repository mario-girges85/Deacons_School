import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import Userlayout from "./Userlayout";
import Adminlayout from "./Adminlayout";
import Nav from "./components/Nav";
import axios from "axios";
const App = () => {
  // const apiurl = import.meta.env.VITE_API_URL;
  const [users, setusers] = useState([]);
  const [userdata, setuserdata] = useState(null);
  const [userid, setuserid] = useState(localStorage.id);
  const [cn, setcn] = useState(localStorage.cn);

  //logged user data
  const getuserdata = () => {
    axios
      .post(`${import.meta.env.VITE_API_Userdata}`, { id: localStorage.id })
      .then((data) => {
        setuserdata(data.data);
      })
      .then(() => {
        console.log(userdata);
      })
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
