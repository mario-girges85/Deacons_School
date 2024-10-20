import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo_png.png";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Avatar from "./Avatar";
import { Link } from "react-router-dom";

function NavList({ cn }) {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as={Link}
        to={"./"}
        variant="small"
        color="blue-gray"
        className="p-1 font-medium flex items-center hover:text-cdarkred-100 transition-colors"
      >
        Home
      </Typography>
      <Typography
        as={Link}
        to={"/admin/dashboard"}
        variant="small"
        color="blue-gray"
        className="p-1 font-medium flex items-center hover:text-cdarkred-100 transition-colors"
      >
        Dashboard
      </Typography>
      <Typography
        as={Link}
        to={"/admin/students"}
        variant="small"
        color="blue-gray"
        className="p-1 font-medium flex items-center hover:text-cdarkred-100 transition-colors"
      >
        Students
      </Typography>
      {cn ? (
        <Avatar />
      ) : (
        <Typography
          as={Link}
          to={"/login"}
          variant="small"
          color="blue-gray"
          className="p-1 font-medium flex items-center hover:text-cdarkred-100 transition-colors"
        >
          Login
        </Typography>
      )}
    </ul>
  );
}

function NavbarSimple({ cn }) {
  const [openNav, setOpenNav] = useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return (
    <Navbar className="mx-auto max-w-screen-xl px-6 py-3">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as={Link}
          to={"/"}
          variant="h6"
          className="mr-4 w-16 cursor-pointer py-1.5"
        >
          <img src={logo} alt="logo" />
        </Typography>
        <div className="hidden lg:block">
          <NavList cn={cn} />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList cn={cn} />
      </Collapse>
    </Navbar>
  );
}
export default NavbarSimple;
