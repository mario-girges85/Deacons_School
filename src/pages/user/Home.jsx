import { Spinner } from "@material-tailwind/react";
import sd from "../../assets/images/saintdaemiana2.jpg.crdownload.jpg";
const Home = ({ userdata }) => {
  console.log(userdata);

  if (!userdata) {
    return (
      <div className="flex flex-col gap-3 justify-center items-center h-[80vh] ">
        <Spinner className="h-12 w-12" />
        <h1>Loading....</h1>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-row  justify-center items-center">
        <h1 className="text-center text-3xl">
          {`Welcome ${userdata?.firstname} ${userdata?.lastname}  `}
        </h1>
        {/* Add more details as needed */}
      </div>
    </div>
  );
};

export default Home;
