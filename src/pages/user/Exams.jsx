import React from "react";
import StudentExamCard from "./StudentExamCard";
const Exams = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-center items-center gap-5 my-5 ">
        <StudentExamCard />
        <StudentExamCard />
        <StudentExamCard />
      </div>
    </div>
  );
};

export default Exams;
