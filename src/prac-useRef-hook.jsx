import { useEffect, useState, useRef } from "react";
import "./App.css";

function App() {
  const input = useRef();
  // useRef is as same as document.querySelector
  setTimeout(() => input.current.focus(), 5000);
  return (
    <div className="App">
      <div>Hi</div>
      <input ref={input} placeholder="la" />
    </div>
  );
}
// add input ref "input"

export default App;
