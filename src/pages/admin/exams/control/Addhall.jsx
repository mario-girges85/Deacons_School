import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";
import { useState } from "react";
import axios from "axios";
function DialogDefault() {
  const [open, setOpen] = useState(false);
  //new hall name
  const [newhall, setnewhall] = useState(null);
  //button loading after submitting
  const [loading, setloading] = useState(false);
  //input error if empty
  const [error, seterror] = useState(false);
  const handleOpen = () => setOpen(!open);
  //api
  const apiurl = import.meta.env.VITE_API_URL;

  //valiadation and submitting
  const addnewhall = () => {
    if (newhall != null && newhall != "") {
      setloading(true);
      axios
        .post(`${apiurl}halls`, {
          name: newhall,
          students: [],
        })
        .then(() => {
          handleOpen();
        })
        .then(() => [setloading(false)])
        .then(setnewhall(null))
        .then(() => {
          //reload to show this new hall in the drop menu
          location.reload();
        })
        .catch(() => {
          console.log("7amra");
        });
    } else {
      seterror(true);
    }
  };
  return (
    <>
      <Button className="bg-cdarkred-100" onClick={handleOpen}>
        <span className="font-bold ">+ </span> Add New Hall
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Adding New hall</DialogHeader>
        <DialogBody className="flex flex-row justify-center items-center gap-4 ">
          <h1 className="text-black">Hall Name :</h1>
          <div className="w-72">
            <Input
              label="Hall name"
              onChange={(e) => {
                setnewhall(e.target.value);
                if (newhall != "") {
                  seterror(false);
                }
              }}
              error={error}
            />
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>

          <Button
            loading={loading}
            variant="gradient"
            color="green"
            onClick={() => {
              addnewhall();
            }}
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
export default DialogDefault;
