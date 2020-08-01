import React from "react";
import "./App.css";
import { myFunction } from "./myFunction";
import { useAsync } from "./useAsync";

function App() {
  const { execute, pending, value, error } = useAsync(myFunction, false);
  return <div className="App"></div>;
}

export default App;
