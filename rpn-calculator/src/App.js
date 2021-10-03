import "./App.css";
import Display from "./components/display";
import Keypads from "./components/keypad";

function App() {
  return (
    <div className="Calculator">
      <div name="cal__display">
        <Display props="0" />
      </div>
      <div name="cal__keypad">
        <Keypads />
      </div>
    </div>
  );
}

export default App;
