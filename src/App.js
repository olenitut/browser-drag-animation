import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

const screenWidth = window.screen.width;
const screenHeight = window.screen.height;

function App() {
  const [x, setX] = useState(window.screenX);
  const [y, setY] = useState(window.screenY);

  useEffect(() => {
    const interval = setInterval(() => {
      if (x !== window.screenX || y !== window.screenY) {
        setX(window.screenX);
        setY(window.screenY);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [x, y]);

  return (
    <>
      <div
        className="wrapper"
        style={{
          top: (window.screenY / screenHeight) * 150 + "%",
          left: (window.screenX / screenWidth) * 150 + "%",
        }}
      >
        <ul className="ball">
          <li className="ring"></li>
          <li className="ring"></li>
          <li className="ring"></li>
          <li className="ring"></li>
          <li className="ring"></li>
          <li className="ring"></li>
          <li className="ring"></li>
          <li className="ring"></li>
          <li className="ring"></li>
          <li className="ring"></li>
          <li className="ring"></li>
          <li className="ring"></li>
          <li className="ring"></li>
          <li className="ring"></li>
          <li className="ring"></li>
          <li className="ring"></li>
          <li className="ring"></li>
          <li className="ring"></li>
          <li className="ring"></li>
          <li className="ring"></li>
          <li className="ring"></li>
          <li className="ring"></li>
          <li className="ring"></li>
        </ul>
      </div>
    </>
  );
}

export default App;
