import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

import error from "../assets/images/error.json";
import { Button, Typography } from "@material-tailwind/react";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
const Notfound = () => {
  return (
    <div className="flex justify-center lg:flex-row flex-col gap-16  items-center p-7 ">
      <Lottie
        animationData={error}
        loop
        autoplay
        className="w-[90%] md:w-[70%] lg:w-[45%]"
      />
      <div className="flex justify-center items-center flex-col gap-16">
        <Typography
          as="title"
          className="text-5xl text-center font-bold text-cdarkred-100"
        >
          Something went wrong
        </Typography>
        <Typography as={Link} to="/">
          <Button>Go Home</Button>
        </Typography>
      </div>
    </div>
  );
};

export default Notfound;
