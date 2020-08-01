import React from "react";
import "./App.css";
import { myFunction } from "./myFunction";
import { useAsync } from "./useAsync";
import Dialog from "./dialog";

function App() {
  const { execute, pending, value, error, display } = useAsync(
    myFunction,
    false
  );

  const dialogContent = (
    <div className="dialog">
      <div>
        This is a warning, don't over spend your money
        <button onClick={execute}>Hide Dialog</button>
      </div>
    </div>
  );

  return (
    <div className="App">
      {value && <div className="div">{value}</div>}
      {error && <div className="div">{error}</div>}
      {display && <Dialog>{dialogContent}</Dialog>}
      <button onClick={execute} className="button">
        {!pending ? "Please Click" : "Loading..."}
      </button>
    </div>
  );
}

export default App;
