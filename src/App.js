import "./App.css";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("blue");
  const [isCheck, setIsCheck] = useState(false);
  return (
    <>
      <label htmlFor="checkbox">Disable Button</label>
      <input
        id="checkbox"
        type="checkbox"
        onClick={() => setIsCheck((current) => !current)}
        value={isCheck}
      ></input>
      <button
        disabled={isCheck}
        onClick={() => (color === "blue" ? setColor("red") : setColor("blue"))}
        style={{ backgroundColor: color }}
      ></button>
    </>
  );
}

export default App;
