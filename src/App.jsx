import React, { useEffect } from "react";
import { Route, Routes } from "react-router";
import Userlayout from "./Userlayout";
import Adminlayout from "./Adminlayout";
import Nav from "./components/Nav";

const App = () => {
  return (
    <div className="w-11/12 m-auto">
      <Nav />

      <Routes>
        <Route path="/*" element={<Userlayout />}></Route>
        <Route path="/admin/*" element={<Adminlayout />}></Route>
      </Routes>
    </div>
  );
};

export default App;
