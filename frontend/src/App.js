import "./App.css";
import HomePage from "./components/Upload";
import FooterComponent from "./components/Footer";
import Loading from "./components/Loading";
import ResultComponent from "./components/Result";

function App() {
  return (
    <div class="relative px-10 min-h-screen bg-gray-200 flex items-center justify-center">
      <HomePage />
      <FooterComponent />
    </div>
  );
}

export default App;
