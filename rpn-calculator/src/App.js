import "./App.css";
import { useState } from "react";

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");
  const [stack, setStack] = useState("");

  const ops = ["/", "*", "+", "-", "."];

  const updateCalc = (value) => {
    if ((ops.includes(value) && calc === "") || (ops.includes(value) && ops.includes(calc.slice(-1)))) {
      return;
    }
    setCalc(calc + value);

    if (!ops.includes(value)) {
      setResult(eval(calc + value));
    }
  };

  const updateStack = (value) => {
    if (ops.includes(value)) {
      return;
    }
    setStack(calc);
  };

  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>
          {i}
        </button>,
      );
    }
    return digits;
  };

  // const unstack = () => {
  //   if (stack.length === 0) return;
  //   const newStack = [...stack];
  //   const unstacked = newStack.splice(newStack.length - 1, 1)[0];
  //   setStack(newStack);
  //   return unstacked;
  // };
  // console.log(unstack);

  const calculate = () => {
    if (stack.length < 0) {
      return setStack(parseFloat(calc).toString());
    }

    setCalc(calc);
  };

  const enter = () => {
    updateStack();
    clear();
  };
  console.log(stack);

  const del = () => {
    if (calc === "") {
      return;
    }
    const value = calc.slice(0, -1);

    setCalc(value);
  };

  const clear = () => {
    setCalc("");
    setResult("");
  };

  const stackedItems = () => {
    const stackItem = [];
    for (let i = 0; i < stack.length; i++) {
      const element = stack[i];
      stackItem.push(<li key={i}>{element.value}</li>);
    }
    console.log(stackItem);
  };
  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          <ul className="stackItem">{stack}</ul>({result ? <span>{result}</span> : ""}){calc || "0"}
        </div>

        <div className="operators">
          <button onClick={clear}>C</button>
          <button onClick={() => updateCalc("/")}>/</button>
          <button onClick={() => updateCalc("*")}>*</button>
          <button onClick={calculate}>+</button>
          <button onClick={() => updateCalc("-")}>-</button>

          <button onClick={del}>DEL</button>
        </div>

        <div className="digits">
          {createDigits()}
          <button onClick={() => updateCalc("0")}>0</button>
          <button onClick={() => updateCalc(".")}>.</button>
          <button onClick={calculate}>=</button>
          <button onClick={enter}>ENTER</button>
        </div>
      </div>
    </div>
  );
}

export default App;
