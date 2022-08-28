import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const onClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={onClick}>Click here for increasing Count!</button>
    </div>
  );
}

export default App;
// practice for Hook as named "useState"
