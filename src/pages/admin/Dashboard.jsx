import React from "react";
import { Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
const Dashboard = () => {
  return (
    <div className="flex justify-center items-center ">
      <Typography as={Link} to="/admin/exams">
        <Button>Exams</Button>
      </Typography>
    </div>
  );
};

export default Dashboard;
