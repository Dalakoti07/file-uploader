import React from "react";
import checked from "../icons/check.png";
import placeHolder from "../icons/picture.png";

function ResultComponent(props) {
  return (
    <div
      className="bg-white w-full md:w-1/2 
                rounded-2xl px-10 py-8 shadow-lg
                hover:shadow-2xl
                flex flex-col items-center
                transition duration-500 space-y-3"
    >
      <img src={checked} className="w-8 h-8" />
      <h3>Uploaded Successfully</h3>
      <img src={props.imageUrl || placeHolder} className="object-contain w-100" alt="Results are ....."/>
      <form className="w-full flex items-center justify-center">
        <input value={props.imageUrl} className="w-full md:w-1/2 border border-transparent focus:outline-none 
                    focus:ring-2 focus:ring-purple-600 focus:border-transparent p-1
                    rounded" disabled/>
        <button className="bg-blue-600 hover:bg-blue-800 my-0 md:my-2
                    focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50
                    ml-1 rounded text-white px-2 py-1">
          Copy
        </button>
      </form>
    </div>
  );
}

export default ResultComponent;
