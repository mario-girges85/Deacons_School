const Home = ({ userdata }) => {
  if (!userdata) {
    return <div>Loading user data...</div>;
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
