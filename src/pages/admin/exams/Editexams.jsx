import React from "react";
import { Select, Option } from "@material-tailwind/react";
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
      <div className="flex flex-wrap ">
        <div className="max-w-sm p-4 w-64 bg-white border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-lg font-semibold text-gray-800">exam.title</h3>
          <p className="text-sm text-gray-600 mt-2">exam.description</p>
          <div className="mt-4 flex justify-between">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none">
              View
            </button>
            <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none">
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editexams;
