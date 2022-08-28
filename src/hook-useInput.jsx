import { useState } from "react";
import "./App.css";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useInput(initialValue);
  const onChange = (event) => {
    const value = event.target.value;

    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

function App() {
  const maxLen = (value) => !value.includes("@");
  const name = useInput("Ms. ", maxLen);

  return (
    <div>
      <h1>Hello</h1>
      <input placeholder="Name" value={name.value} onChange={name.onChange} />
    </div>
  );
}

// class component use 'this'

export default App;
