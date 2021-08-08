import React from "react";

function mainUploadComponent() {
  return (
    <div
      className="bg-white w-full md:w-1/2 
                rounded-2xl px-10 py-8 shadow-lg
                hover:shadow-2xl
                flex flex-col items-center
                transition duration-500 space-y-3"
    >
      <p1>Upload your image</p1>
      <p1>File should be Jpeg, Png, etc</p1>

      <div className="w-100 bg-green-800"></div>

      <p>Or</p>

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl">
        Choose a File
      </button>
    </div>
  );
}

export default mainUploadComponent;
