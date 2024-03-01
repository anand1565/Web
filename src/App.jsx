import "./App.css";
import Navbar from "./Components/Navbar";
import Updates from "./Components/Updates";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <div className="mt-5 flex items-center justify-center">
        <Updates />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
