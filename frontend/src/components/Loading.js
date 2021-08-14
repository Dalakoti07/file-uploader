import React, { useEffect } from "react";
const axios = require('axios').default;

function Loading(props) {
  const { setIsCompleted, setError, files, setIsUploading, setImageUrl} = props;

  useEffect(()=>{
    console.log(files[0].file);
    //post data to server
    let formData = new FormData();
    formData.append("file", files[0].file);
    axios.post('http://localhost:3000/upload/', formData)
      .then( (res) => {
        setIsCompleted(true)
        setError(null)
        setIsUploading(false)
        setImageUrl(res.data.path)
      }).catch( (err)=>{
        console.log("error ",err);
        setIsCompleted(false)
        setError("Could not upload image.. ")
        setIsUploading(false)
      })
  },[])

  return (
    <div
      className="bg-white w-full md:w-1/2 
                    rounded-2xl px-10 py-8 shadow-lg
                    hover:shadow-2xl
                    flex flex-col
                    transition duration-500 space-y-3"
    >
      <p>Uploading</p>
      <div className="relative w-full bg-gray-200 rounded">
        <div
          style={{ width: "100%" }}
          className="absolute top-0 h-2 rounded shim-red"
        ></div>
      </div>
      <p className="mt-6">Wooh! we are uploading it, please be patient</p>
    </div>
  );
}

export default Loading;
