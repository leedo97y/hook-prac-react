import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [email, setEmail] = useState("");

  const onIncrease = () => {
    setCount(count + 1);
  };

  const onDecrease = () => {
    setCount(count - 1);
  };

  const updateEmail = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={onIncrease}>Increasing</button>
      <button onClick={onDecrease}>Decreasing</button>
      <hr />
      <div>
        <input onChange={updateEmail} placeholder="Email" value={email} />
      </div>
    </div>
  );
}

export default App;
// practice for Hook as named "useState"
