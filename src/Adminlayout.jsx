import React from "react";
import Dashboard from "./pages/admin/Dashboard";
import { Route, Routes } from "react-router";
import Notfound from "./pages/Notfound";
import Students from "./pages/admin/Students";
import Exams from "./pages/admin/Exams";

const Adminlayout = (data) => {
  return (
    <div>
      <Routes>
        <Route path="*" element={<Notfound />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/students" element={<Students />}></Route>
        <Route path="/exams" element={<Exams />}></Route>
      </Routes>
    </div>
  );
};

export default Adminlayout;
