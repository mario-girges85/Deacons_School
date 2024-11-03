import { React, useEffect, useState } from "react";
import { Input, Radio, Button, Checkbox } from "@material-tailwind/react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const apiurl = import.meta.env.VITE_API_URL;
const Signup2 = () => {
  const navigate = useNavigate();
  const [newuser, setnewuser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    password: "",
    gender: "",
    birthday: "",
    role: "",
    cart: [],
  });
  const [confirmpassword, setconfirmpassword] = useState("");
  const [error, seterror] = useState("");
  const [agreeterms, setagreeterms] = useState(false);

  //post to api function
  const postuser = () => {
    axios
      .post(`${apiurl}users`, newuser)
      .then(() => {
        location.reload();
      })
      .then(() => {
        console.log("data posted");
      });
  };
  //reset error
  let reset = () => {
    seterror("");
  };
  //validation and post
  function submit(e) {
    //to disable reloading
    e.preventDefault();

    //validation
    {
      if (newuser.firstname == "") {
        reset();
        seterror("* Please Enter your first name ");
      } else if (newuser.lastname == "") {
        reset();
        seterror("* Please Enter your Last name");
      } else if (
        newuser.email == "" ||
        newuser.email.trim().includes(" ") ||
        !newuser.email.trim().includes("@")
      ) {
        reset();
        seterror("* please enter valid email with '@-------.com'");
      } else if (
        newuser.phonenumber == "" ||
        !newuser.phonenumber.startsWith("01")
      ) {
        reset();
        seterror("* please enter phone number strats with '01-------'");
      } else if (newuser.password == "") {
        reset();
        seterror("* please enter your passsword");
      } else if (newuser.password != confirmpassword) {
        reset();
        seterror("* passwords does Not match");
      } else if (newuser.gender == "") {
        reset();
        seterror("* please choose your gender");
      } else if (newuser.birthday == "") {
        reset();
        seterror("* please enter your birthday");
      } else if (!agreeterms) {
        reset();
        seterror("You should agree the terms and conditions");
      } else {
        reset();
        postuser();
        navigate("/login");
      }
    }
  }

  return (
    <div className="flex  flex-col justify-center items-center">
      <h1 className="text-center text-4xl font-bold m-6">Sign Up</h1>
      <form
        onSubmit={(e) => {
          submit(e);
        }}
        className="  w-[85%] md:w-[75%] flex justify-evenly items-center md:flex-row md:flex-wrap flex-col md:gap-5 gap-2 "
      >
        {/*first name*/}
        <div className=" md:w-[40%] w-[85%] flex flex-row justify-between items-center">
          <label className="w-[40%] m-3">First Name</label>
          <Input
            value={newuser.firstname}
            onChange={(e) => {
              setnewuser({ ...newuser, firstname: e.target.value });
            }}
            className=""
            label="First Name"
          />
        </div>
        {/*Last name*/}
        <div className="md:w-[40%] w-[85%] flex flex-row justify-between items-center">
          <label className="w-[40%] m-3">Last Name</label>
          <Input
            onChange={(e) => {
              setnewuser({ ...newuser, lastname: e.target.value });
            }}
            value={newuser.lastname}
            className="w-[40%]"
            label="Last Name"
          />
        </div>
        {/*Email*/}
        <div className=" md:w-[40%] w-[85%] flex flex-row justify-between items-center">
          <label className="w-[40%] m-3">Email</label>
          <Input
            onChange={(e) => {
              setnewuser({ ...newuser, email: e.target.value });
            }}
            value={newuser.email}
            className="w-[40%]"
            label="Email"
          />
        </div>
        {/*Phone Number*/}
        <div className=" md:w-[40%] w-[85%] flex flex-row justify-between items-center">
          <label className=" w-[40%]  m-3">Phone Num</label>
          <Input
            onChange={(e) => {
              setnewuser({ ...newuser, phonenumber: e.target.value });
            }}
            className="w-[40%]"
            value={newuser.phonenumber}
            label="Phone Number"
          />
        </div>
        {/*Password*/}
        <div className=" md:w-[40%] w-[85%] flex flex-row justify-between items-center">
          <label className=" w-[40%] text-nowrap m-3">Password</label>
          <Input
            value={newuser.password}
            onChange={(e) => {
              setnewuser({ ...newuser, password: e.target.value });
            }}
            type="password"
            className="w-[40%]"
            label="Password"
          />
        </div>
        {/*Confirm Password*/}
        <div className=" md:w-[40%] w-[85%] flex flex-row justify-between items-center">
          <label className=" w-[40%]  m-3">Confirm Password</label>
          <Input
            onChange={(e) => {
              setconfirmpassword(e.target.value);
            }}
            value={confirmpassword}
            type="password"
            className="w-[40%]"
            label="Password"
          />
        </div>
        {/*Gender*/}
        <div className=" md:w-[40%] w-[85%] flex flex-row justify-between items-center">
          <label className="w-[40%] m-3">Gender</label>
          <div className="w-full flex flex-row flex-nowrap">
            <Radio
              onChange={(e) => {
                setnewuser({ ...newuser, gender: e.target.value });
              }}
              value="Male"
              name="type"
              label="Male"
            />
            <Radio
              onChange={(e) => {
                setnewuser({ ...newuser, gender: e.target.value });
              }}
              value="Female"
              name="type"
              label="Female"
            />
          </div>
        </div>
        {/*Birthday*/}
        <div className=" md:w-[40%] w-[85%] flex flex-row justify-between items-center">
          <label className=" w-[40%]  m-3">Birthday</label>
          <Input
            onChange={(e) => {
              setnewuser({ ...newuser, birthday: e.target.value });
            }}
            value={newuser.birthday}
            type="date"
            className="w-[40%]"
            label="Birthday"
          />
        </div>
        {/*agree the terms*/}
        <div className="m-[-2%] w-full text-center">
          <Checkbox
            onClick={() => {
              setagreeterms(!agreeterms);
            }}
            label="i agree to the terms and conditions"
          />
        </div>
        {/* error */}
        <div>
          <h1 className="text-red-900">{error}</h1>
        </div>
        {/*button*/}
        <div className="w-full flex justify-center items-center">
          <Button type="submit">Sign Up</Button>
        </div>
      </form>
    </div>
  );
};

export default Signup2;
