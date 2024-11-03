import { Spinner } from "@material-tailwind/react";
const Home = ({ userdata }) => {
  if (!userdata) {
    return (
      <div className="flex justify-center items-center h-[80vh] ">
        <Spinner className="h-12 w-12" />;
      </div>
    );
  }

  return (
    <div className="flex flex-row h-[75vh] justify-center items-center">
      <h1 className="text-center text-3xl">
        {`Welcome, ${userdata.firstname} ${userdata.lastname}  `}
      </h1>
      {/* Add more details as needed */}
    </div>
  );
};

export default Home;
