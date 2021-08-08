import React from "react";

function Loading() {
  return (
    <div
      class="bg-white w-full md:w-1/2 
                    rounded-2xl px-10 py-8 shadow-lg
                    hover:shadow-2xl
                    flex flex-col
                    transition duration-500 space-y-3"
    >
      <p1>Uploading</p1>
      <div class="relative w-full bg-gray-200 rounded">
        <div
          style={{width: "100%"}}
          className="absolute top-0 h-2 rounded shim-red"
        ></div>
      </div>
      <p1 className="mt-6">Wooh! we are uploading it, please be patient</p1>
    </div>
  );
}

export default Loading;
