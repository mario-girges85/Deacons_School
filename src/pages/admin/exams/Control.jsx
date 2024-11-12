import React, { useEffect } from "react";
import { Select, Option, Button } from "@material-tailwind/react";
import { useState } from "react";
import Addhall from "./Addhall";
import axios from "axios";
const Control = () => {
  const [hallsdata, sethallsdata] = useState([]);
  const get_data = () => {
    axios
      .get(`${import.meta.env.VITE_API_URL}halls`)
      .then(({ data }) => {
        sethallsdata(data);
        console.log("data is done");
      })
      .catch(() => {
        console.log("erroe catching data");
      });
  };

  useEffect(() => {
    if (hallsdata.length === 0) {
      get_data();
    }
  }, [hallsdata]);
  return (
    <div className="lg:mx-32 my-9">
      <div className="header flex flex-row gap-4">
        <div className="w-72">
          <Select label="Select Hall">
            {hallsdata.length > 0 ? (
              hallsdata.map((hall) => (
                <Option key={hall.id} value={hall.name}>
                  {hall.name}
                </Option>
              ))
            ) : (
              <Option disabled>No halls available</Option> // Option if no halls fetched
            )}
          </Select>
        </div>

        <Addhall />
      </div>
    </div>
  );
};

export default Control;
