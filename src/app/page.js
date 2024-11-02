import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center min-h-screen p-6 sm:p-8 ">
      <div className="w-full max-w-2xl p-8 space-y-6 flex justify-center items-center rounded-lg">
        <div className="flex flex-col text-4xl sm:text-4xl md:flex-row md:text-5xl md:leading-normal font-bold text-center tracking-wide text-blue-500 items-center">
          <span className="text-black md:mr-4">Welcome to   {" "} </span>
          <span className="text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 bg-clip-text transition-colors duration-300 ">
            File Fairy
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
