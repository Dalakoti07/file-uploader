import React, { useState } from "react";

// Import React FilePond
import { FilePond, File, registerPlugin } from "react-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";
import bgImage from '../icons/image.svg'
// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

function MainUploadComponent(props) {
  let files = props.files
  const {setIsUploading} = props
  return (
    <div
      className="bg-white w-full md:w-1/2 
                rounded-2xl px-10 py-8 shadow-lg
                hover:shadow-2xl
                flex flex-col items-center
                transition duration-500 space-y-3"
    >
      <p>Upload your image</p>
      <p>File should be Jpeg, Png, etc</p>

      <div className="w-full relative">
        <FilePond
          className= "fp-elem"
          files={files}
          onupdatefiles={props.setFiles}
          allowMultiple={false}
          maxFiles={1}
          name="file"
          labelIdle='Drag n Drop your files or <span className="filepond--label-action">Browse</span>'
        />
        {/* <div className="border-dashed border-4 border-blue-500 p-4 bg-blue-200 rounded">
          <img className="w-1/3 object-fit h-1/3 m-auto mb-8 mt-8" src ={bgImage} />
        </div> */}
      </div>

      <button 
        onClick ={()=> setIsUploading(true)}
        className = {`text-white font-bold py-2 px-4 rounded-xl ${ (files.length===0) ? 'bg-gray-500 ' :'bg-blue-500 hover:bg-blue-700 motion-safe:hover:scale-110' }`} disabled={files.length===0}>
        Upload
      </button>
    </div>
  );
}

export default MainUploadComponent;
