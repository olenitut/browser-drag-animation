import logo from "./logo.svg";
import "./App.css";
import { useEffect, useRef, useState } from "react";

const screenWidth = window.screen.width;
const screenHeight = window.screen.height;

function App() {
  const [x, setX] = useState(window.screenX);
  const [y, setY] = useState(window.screenY);
  const [showLine, setShowLine] = useState(true); // chaneg on mount + delete local storage on mount
  const [lineY, setLineY] = useState();
  const id = useRef(Date.now());
  useEffect(() => {
    const interval = setInterval(() => {
      const prev = JSON.parse(localStorage.getItem("y")) || {};
      prev[id.current] = window.screenY;
      const prevCopy = { ...prev };
      delete prevCopy[id.current];
      if (Object.values(prevCopy).length === 1) {
        setShowLine(true);
        setLineY(Object.values(prevCopy)[0] - window.screenY);
      }
      localStorage.setItem(`y`, JSON.stringify(prev));
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
      <div
        className="line"
        style={{
          bottom: lineY + "%",
          top: (window.screenY / screenHeight) * 150 + "%",
          left: (window.screenX / screenWidth) * 150 + "%",
          right: 0,
        }}
      />
    </>
  );
}

export default App;
