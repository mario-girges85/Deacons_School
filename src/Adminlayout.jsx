import React from "react";
import Dashboard from "./pages/admin/Dashboard";
import { Route, Routes } from "react-router";
import Notfound from "./pages/Notfound";
import Students from "./pages/admin/Students";
import Exams from "./pages/admin/exams/Exams";
import AddStudent from "./pages/admin/exams/add Student/AddStudent";
import Control from "./pages/admin/exams/control/Control";
import Editexams from "./pages/admin/exams/editexams/Editexams";
import Edit from "./pages/admin/exams/editexams/Edit";

const Adminlayout = (data) => {
  return (
    <div>
      <Routes>
        <Route path="*" element={<Notfound />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/students" element={<Students />}></Route>
        <Route path="/exams" element={<Exams />}></Route>
        <Route path="/addstudent" element={<AddStudent />}></Route>
        <Route path="/editexams" element={<Editexams />}></Route>
        <Route path="/editexams/edit" element={<Edit />}></Route>
        <Route path="/control" element={<Control />}></Route>
      </Routes>
    </div>
  );
};

export default Adminlayout;
