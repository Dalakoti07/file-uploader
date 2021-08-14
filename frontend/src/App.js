import "./App.css";
import { useState } from "react";
import HomePage from "./components/Upload";
import FooterComponent from "./components/Footer";
import Loading from "./components/Loading";
import ResultComponent from "./components/Result";
import MessageBadge from "./components/MessageBadge";

function App() {
  const [isUploading, setIsUploading] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [error, setError] = useState("");
  const [files, setFiles] = useState([]);
  const [imageUrl, setImageUrl] = useState("");

  if (files.length > 0) {
    console.log("file is selected .......");
    console.log(files[0]);
  }

  return (
    <div className="relative px-10 min-h-screen bg-gray-200 flex items-center justify-center">
      {/* pass setIsUploading, setError and setIsCompleted to HomePage Component, and  */}
      {error ? <MessageBadge error={error} setError={setError} bgColor='bg-red-600' /> : null}
      {isUploading ? (
        <Loading
          setImageUrl={setImageUrl}
          setIsCompleted={setIsCompleted}
          setError={setError}
          files={files}
          setIsUploading={setIsUploading}
        />
      ) : isCompleted ? (
        <ResultComponent imageUrl={imageUrl} />
      ) : (
        <HomePage
          setFiles={setFiles}
          files={files}
          setIsUploading={setIsUploading}
        />
      )}
      <FooterComponent />
    </div>
  );
}

export default App;
