import "./App.css";
import Dictionary from "./Dictionary";
import Name from "./Name";

export default function App() {
  return (
    <div className="App-container">
      <div className="container">
        <Dictionary />
        <Name />
      </div>
    </div>
  );
}
