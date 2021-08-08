import React, { useState } from "react";

// Import React FilePond
import { FilePond, File, registerPlugin } from "react-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

function MainUploadComponent() {
  const [files, setFiles] = useState([]);
  console.log(files)
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

      <div className="w-full">
        <FilePond        
          files={files}
          onupdatefiles={setFiles}
          allowMultiple={false}
          maxFiles={1}
          name="file"
          labelIdle='Drag n Drop your files or <span class="filepond--label-action">Browse</span>'
        />
      </div>

      <button 
        onClick ={()=> console.log('clicked')}
        className = {`text-white font-bold py-2 px-4 rounded-xl ${ (files.length===0) ? 'bg-gray-500 ' :'bg-blue-500 hover:bg-blue-700 motion-safe:hover:scale-110' }`} disabled={files.length===0}>
        Upload
      </button>
    </div>
  );
}

export default MainUploadComponent;
