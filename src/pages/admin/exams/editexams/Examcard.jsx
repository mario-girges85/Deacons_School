import React from "react";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router";
const Examcard = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="max-w-sm p-4 w-64 bg-white border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <h3 className="text-lg font-semibold text-gray-800">exam.title</h3>
        <p className="text-sm text-gray-600 mt-2">exam.description</p>
        <div className="mt-4 flex justify-between">
          <Button color="green" className="px-4 py-2  focus:outline-none">
            View
          </Button>
          <Button
            onClick={() => {
              navigate("/admin/editexams/edit");
            }}
            color="red"
            className="px-4 py-2 focus:outline-none"
          >
            Edit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Examcard;
