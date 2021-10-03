import React, { Component } from "react";
import "./keypad.css";
import "./display.css";

class Keypads extends Component {
  constructor(props) {
    super(props);
    this.state = { cal: "", result: "", operator: "" };
  }

  update = (value) => {
    this.setState({ cal: this.cal + value });
    console.log(this.state.cal);
  };

  clickedButton = (e) => {
    if (e === "+" || e === "-" || e === "/" || e === "*") {
      this.setState({ operator: e });
      console.log(e);
    } else {
      this.setState({ cal: e });
      console.log(this.state.cal);
    }
  };

  clear = (e) => {
    this.setState({ cal: "" });
    this.setState({ result: "" });
    this.setState({ operator: "" });
  };

  addNumtoInput = (e) => {
    if (this.cal !== "") {
      this.setState({ cal: this.state.cal + e });
      console.log(this.state.cal);
    }
  };

  decimalInput = (e) => {
    if (this.state.cal.indexOf(".") === -1) {
      this.setState({ cal: this.state.cal + e });
      console.log(this.state.cal);
    }
  };

  math = (e, x, y) => {
    if (e === "+") {
      return x + y;
    }
    if (e === "-") {
      return x - y;
    }
    if (e === "*") {
      return x * y;
    }
    if (e === "/") {
      return x / y;
    }
    console.log(e);
  };

  render() {
    return (
      <div className="keypad">
        <div name="displays">
          <span>0</span>
          {this.update}
        </div>
        <div className="top__row">
          <button name="clear" onClick={(e) => this.clear}>
            C
          </button>
          <button name="clear__all" onClick={(e) => this.clear}>
            CE
          </button>
          <button name="" onClick={(e) => this.clickedButton}></button>
          <button name="" onClick={(e) => this.clickedButton}></button>
        </div>

        <div className="second__row">
          <button name="1" onClick={(e) => this.clickedButton}>
            1
          </button>
          <button name="2" onClick={(e) => this.clickedButton}>
            2
          </button>
          <button name="3" onClick={(e) => this.clickedButton}>
            3
          </button>
          <button name="+" onClick={(e) => this.clickedButton}>
            +
          </button>
        </div>

        <div className="third__row">
          <button name="4" onClick={(e) => this.clickedButton}>
            4
          </button>
          <button name="5" onClick={(e) => this.clickedButton}>
            5
          </button>
          <button name="6" onClick={(e) => this.clickedButton}>
            6
          </button>
          <button name="-" onClick={(e) => this.calculate}>
            -
          </button>
        </div>

        <div className="fourth__row">
          <button name="7" onClick={(e) => this.clickedButton}>
            7
          </button>
          <button name="8" onClick={(e) => this.clickedButton}>
            8
          </button>
          <button name="9" onClick={(e) => this.clickedButton}>
            9
          </button>
          <button name="*" onClick={(e) => this.calculate}>
            *
          </button>
        </div>

        <div className="bottom__row">
          <button name="." onClick={(e) => this.clickedButton}>
            .
          </button>
          <button name="0" onClick={(e) => this.clickedButton}>
            0
          </button>
          <button name="equal" onClick={(e) => this.math}>
            =
          </button>
          <button name="/" onClick={(e) => this.calculate}>
            /
          </button>
        </div>
      </div>
    );
  }
}

export default Keypads;
