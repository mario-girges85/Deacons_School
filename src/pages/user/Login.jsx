import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ users }) => {
  const [showpass, setshowpass] = useState(false);
  const [loguser, setloguser] = useState({ email: "", pass: "" });
  const [userid, setuserid] = useState();
  const [invaliddata, setinvaliddata] = useState("hidden");
  const navigate = useNavigate();
  //check in api data / if true store id in local storage / and navigate home
  const checklogin = () => {
    users.map((oneuser) => {
      if (oneuser.email == loguser.email && oneuser.pass == loguser.password) {
        setinvaliddata("hidden");
        setuserid(oneuser.id);
        localStorage.setItem("id", userid);
        navigate("/");
      } else {
        setinvaliddata("");
      }
    });
  };

  //stop reloading on onsubmin event
  const submit = (e) => {
    e.preventDefault();
    checklogin();
  };

  return (
    <div className="flex justify-center items-center mt-8 ">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" className="text-cdarkred-100">
          Log in
        </Typography>

        <form
          onSubmit={(e) => {
            submit(e);
          }}
          className="mt-6 mb-2 w-80 max-w-screen-lg sm:w-75"
        >
          <div className=" mb-1 flex flex-col ite  gap-6">
            <Typography
              variant="h6"
              color="blue-gray"
              className="-mb-3 text-cdarkred-100"
            >
              Email
            </Typography>
            <div className="w-72">
              <Input
                type="email"
                value={loguser.email}
                onChange={(e) => {
                  setloguser({ ...loguser, email: e.target.value });
                }}
                label="Email"
              />
            </div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="-mb-3 text-cdarkred-100"
            >
              Password
            </Typography>
            <div className="w-72">
              <Input
                type={showpass ? "text" : "password"}
                value={loguser.pass}
                onChange={(e) => {
                  setloguser({ ...loguser, pass: e.target.value });
                }}
                label="Password"
              />
              <Checkbox
                label="Show password"
                className="text-xs"
                checked={showpass}
                onChange={(e) => setshowpass(!showpass)}
              />
            </div>
          </div>
          {/* <Checkbox label="i agree to the terms and conditions" /> */}
          <Typography className={` ${invaliddata}  text-red-800 mb-[-15px]`}>
            *invalid username or password
          </Typography>
          <Button type="submit" className=" w-full bg-cdarkred-100 mt-6">
            Sign in
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Didn't have account yet{" "}
            <Link to="/signup" className="font-medium text-gray-900">
              Sign Up
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
};

export default Login;
