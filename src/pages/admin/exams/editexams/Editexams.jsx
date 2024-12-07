import React from "react";
import { Select, Option } from "@material-tailwind/react";
import Examcard from "./Examcard";
const Editexams = () => {
  return (
    <div>
      <div className="flex flex-row flex-wrap justify-center items-center m-5 gap-4">
        <div className="w-72">
          <Select label="select level">
            <Option>one</Option>
            <Option>two</Option>
            <Option>three</Option>
            <Option>four</Option>
            <Option>five</Option>
          </Select>
        </div>
        <div className="w-72">
          <Select label="select year">
            <Option>first</Option>
            <Option>secound</Option>
            <Option>third</Option>
            <Option>fourth</Option>
          </Select>
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-5 ">
        <Examcard />
        <Examcard />
        <Examcard />
        <Examcard />
        <Examcard />
        <Examcard />
        <Examcard />
        <Examcard />
        <Examcard />
        <Examcard />
        <Examcard />
        <Examcard />
        <Examcard />
        <Examcard />
        <Examcard />
        <Examcard />
        <Examcard />
        <Examcard />
      </div>
    </div>
  );
};

export default Editexams;
