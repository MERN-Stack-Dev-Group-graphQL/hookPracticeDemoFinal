import React from "react";
import "./App.css";
import { myFunction } from "./myFunction";
import { useAsync } from "./useAsync";

function App() {
  const { execute, pending, value, error } = useAsync(myFunction, false);

  return (
    <div className="App">
      {value && <div className="div">{value}</div>}
      {error && <div className="div">{error}</div>}
      <button onClick={execute} className="button">
        {!pending ? "Please Click" : "Loading..."}
      </button>
    </div>
  );
}

export default App;
