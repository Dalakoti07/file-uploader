import "./App.css";
import {useState} from 'react';
import HomePage from "./components/Upload";
import FooterComponent from "./components/Footer";
import Loading from "./components/Loading";
import ResultComponent from "./components/Result";

function App() {
  const [isUploading, setIsUploading]= useState(false);
  const [isCompleted, setIsCompleted]= useState(false);
  const [error,setError] = useState("");

  return (
    <div class="relative px-10 min-h-screen bg-gray-200 flex items-center justify-center">
      {/* pass setIsUploading, setError and setIsCompleted to HomePage Component, and  */}
      {
          isUploading? <Loading/> : (isCompleted? <isCompleted/> : <HomePage/>)
      }
      <FooterComponent />
    </div>
  );
}

export default App;
