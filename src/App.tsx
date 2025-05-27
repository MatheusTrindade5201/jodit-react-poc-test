import "./App.css";
import JoditEditorFree from "./components/Plugin";
import Editor from "./components/PluginPro";

function App() {
  return (
    <>
      <p>------------------ Pro ------------------</p>
      <Editor />
      <p>------------------ Free ------------------</p>
      <JoditEditorFree />
    </>
  );
}

export default App;
