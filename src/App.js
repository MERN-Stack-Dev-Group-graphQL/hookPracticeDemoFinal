import React from "react";
import "./App.css";
import { myFunction } from "./myFunction";
import { useAsync } from "./useAsync";

function App() {
  const { execute, pending, value, error } = useAsync(myFunction, false);
  const dataText = `fkaklfjs;dafakf;dskalfjkla;sfj;dsafksfjakfj;sdafjkas;fjs
  fkaklfjs;dafakf;dskalfjkla;sfj;dsafksfjakfj;sdafjkas;fjs
  fkaklfjs;dafakf;dskalfjkla;sfj;dsafksfjakfj;sdafjkas;fjs
  fkaklfjs;dafakf;dskalfjkla;sfj;dsafksfjakfj;sdafjkas;fjs
  fkaklfjs;dafakf;dskalfjkla;sfj;dsafksfjakfj;sdafjkas;fjs`;

  return (
    <div className="App">
      {value && <div className="div">{value}</div>}
      {error && <div className="div">{error}</div>}
      {value && <div>{dataText}</div>}
      <button onClick={execute} className="button">
        {!pending ? "Please Click" : "Loading..."}
      </button>
    </div>
  );
}

export default App;
