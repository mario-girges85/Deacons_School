import React, { useEffect } from "react";
import {
  Select,
  Option,
  Button,
  Typography,
  Input,
  Card,
} from "@material-tailwind/react";
import { useState } from "react";
import Addhall from "../control/Addhall";
import axios from "axios";
const AddStudent = () => {
  //select hall
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

  //id
  const [id, setid] = useState();
  //hall value
  const [hall, sethall] = useState();

  //handle submit
  const submit = (e) => {
    e.preventDefault();

    if (id == undefined || id == "" || hall == undefined || hall == "") {
      console.log("error");
    } else {
      axios.post(`${import.meta.env.VITE_API_URL}halls/${hall}/students`, id);
    }
  };
  return (
    <div className="flex justify-center items-center md:min-h-[80vh]">
      <Card className="mt-4 " shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Add Student to Hall
        </Typography>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={(e) => submit(e)}
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Student Id :
            </Typography>
            <Input
              onChange={(e) => {
                setid(e.target.value);
              }}
              size="lg"
              placeholder="Student Id"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Hall :
            </Typography>
            <div className="w-82 flex flex-row justify-between  items-center gap-2">
              <Select
                label="Select Hall"
                onChange={(e) => {
                  sethall(e);
                }}
              >
                {hallsdata.length > 0 ? (
                  hallsdata.map((hall) => (
                    <Option key={hall.id} value={hall.id}>
                      {hall.name}
                    </Option>
                  ))
                ) : (
                  <Option disabled>No halls available</Option> // Option if no halls fetched
                )}
              </Select>
            </div>
            <Button
              type="submit"
              className="mt-6 text-white bg-cdarkred-100"
              fullWidth
            >
              Add
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default AddStudent;
