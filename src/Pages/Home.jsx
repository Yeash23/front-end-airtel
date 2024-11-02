import React from "react";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div
        className="w-full h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmN3LkQ31NgE0EXwVMuhxLsA8g47SXpCfBqg&s")', // Replace with your banner image URL
        }}
      >
        <h1 className="text-white text-4xl font-bold">Welcome to Our Site!</h1>
      </div>
    </>
  );
};

export default Home;
