import { useState } from "react";
import "./App.css";
import Home from "./components/Home";

function App() {
  const [colorMode, setColorMode] = useState(true);

  const handleToggle = () => {
    setColorMode(!colorMode);
  };

  const style1 = {
    background: "black",
    color: "white",
  };

  const style2 = {
    background: "aliceblue",
    color: "black",
  };

  return (
    <div className="App" style={colorMode ? style2 : style1}>
      <h1>WeatherNow</h1>
      <button className="toggle_btn" onClick={() => handleToggle()}>
        <span style={colorMode ? { left: "0" } : { left: " 25px" }}></span>
      </button>
      <Home />
    </div>
  );
}

export default App;
