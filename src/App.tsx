import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import JoditCustomPlugin from "./components/Plugin";
import Editor from "./components/Plugin";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Editor />
    </>
  );
}

export default App;
