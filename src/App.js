import "./App.css";
import { Navbar } from "./components/Navbar";
import { TextForm } from "./components/TextForm";

function App() {
  return (
    <>
    <Navbar title="TextifyMe"  aboutText = "About"/>
    <div className="container my-3">
      <TextForm heading="Analyze your text in 1 Click!" />
    </div>
    </>
  );
}

export default App;
