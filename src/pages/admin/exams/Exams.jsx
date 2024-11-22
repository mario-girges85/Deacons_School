import React from "react";
import Lottie from "lottie-react";
import data from "../../../assets/images/data.json";
import exam from "../../../assets/images/quiz.json";
import enterance from "../../../assets/images/people.json";
import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
const Exams = () => {
  return (
    <div className="flex flex-col flex-wrap lg:flex-row justify-center items-center text-center lg:mx-20 my-5 gap-4 ">
      <Typography
        as={Link}
        to="/admin/addstudent"
        className="flex flex-col text-4xl justify-center text-nowrap gap-5 items-center font-semibold"
      >
        <Lottie
          animationData={enterance}
          loop
          autoplay
          className=" w-[450px] lg:w-[350px]"
        />
        Add Student to the Exam
      </Typography>

      <Typography
        as={Link}
        to="/admin/editexams"
        className="flex flex-col justify-center  items-center text-center  text-4xl font-semibold"
      >
        <Lottie
          animationData={exam}
          loop
          autoplay
          className="w-[450px] lg:w-[350px]"
        />
        Edit Exams
      </Typography>

      <Typography
        as={Link}
        to="/admin/control"
        className="flex flex-col justify-center items-center text-center  text-4xl font-semibold"
      >
        <Lottie
          animationData={data}
          loop
          autoplay
          className="w-[450px] lg:w-[350px]"
        />
        halls Control
      </Typography>
    </div>
  );
};

export default Exams;
