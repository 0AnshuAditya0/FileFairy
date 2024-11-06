import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center min-h-screen p-6 sm:p-8 bg-gradient-to-r dark:from-black dark:via-gray-900 dark:to-slate-800">
      <div className="w-full max-w-3xl p-8 space-y-6 flex justify-center items-center rounded-lg ">
        <div className="flex flex-col text-4xl sm:text-4xl md:flex-row md:text-6xl md:leading-normal font-bold text-center tracking-wide text-blue-500 items-center">
          <span className="text-black md:mr-4 dark:text-gray-300">Welcome to   {" "} </span>
          <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-fuchsia-400 bg-clip-text transition-colors duration-300 ">
            File Fairy
          </span>
        </div>
      </div>
      <div className="flex justify-center items-start space-x-6 p-6">

        
        <div className="w-2/5 h-64 p-8 bg-indigo-700/20 text-white rounded-lg shadow-lg flex flex-col items-center backdrop-blur-md">
          <p className="text-lg mb-4 text-center">
            Easily upload your documents, including PDF, DOCX, and JPEG files. Make sure files are under 10MB for optimal processing.
          </p>
          <button className="mt-auto bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
            Upload File
          </button>
        </div>

        
        <div className="w-2/5 h-64 p-8 bg-violet-700/20 text-white rounded-lg shadow-lg flex flex-col items-center backdrop-blur-md">
          <p className="text-lg mb-4 text-center">
            Download documents in PDF, DOCX, and other formats. Our system ensures fast, secure access to all your important files.
          </p>
          <button className="mt-auto bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
            Download File
          </button>
        </div>

      </div>



    </div>
  );
};

export default Home;
