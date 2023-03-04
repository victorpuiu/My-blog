import './App.css';
import Navbar from "./Navbar";
import Home from "./HomePage";

function App() {

  return (
    <div className="App">
        <Navbar/>
        <div className="content">
          <Home/>
        </div>
    </div>
  );
}

export default App;
