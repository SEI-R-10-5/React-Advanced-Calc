import React, { useState } from "react";

const Calculator = (props) => {
  // Declare state variables
  const [numbers, setNumbers] = useState("0");
  const [number, setNumber] = useState("0");
  const [preValue, setPreVal] = useState("0");
  const [nextValue, setNextValue] = useState("0");
  const [op, setOp] = useState("");

  // Set clear
  const handleClear = () => {
    setNumbers("0");
    setPreVal("0");
    setNextValue("0");
    console.log("Cleared");
  };

  // Establish numbers being clicked
  // const handleNumbers = (e) => {
  //   e.preventDefault();
  //   let nums = { ...numbers, number };
  //   setNumbers("");
  //   // setPreVal(e.target.value);
  //   console.log("first number:", e.target.value);
  // };
  const handleNumbers = () => {
    let nums = [...numbers, number];
    setNumbers(nums);
  };

  const addNumber = () => {
    return number + number;
  };

  const handleSubmit = (event) => {
    setNumber(event.target.value);
    console.log(event.target.value);
  };

  const handleNumber = (e) => {
    e.preventDefault();
    setNumber(e.target.value);
    console.log(e.target.value);
    handleNumbers();
  };

  return (
    <div className="container">
      <h1>React Calculator</h1>
      <div className="calc-container">
        <p
          type="text"
          placeholder="enter an amount"
          value={number}
          onChange={(e) => setNumbers(e.target.value)}
        >
          {number}
        </p>
        <div className="answer-box">Answer</div>
        <div className="calc-row">
          <button
            className="calc-button calc-button-top"
            onClick={handleClear}
            onSubmit={handleClear}
          >
            AC
          </button>
          <button className="calc-button calc-button-top">+/-</button>
          <button className="calc-button calc-button-top">%</button>
          <button className="calc-button calc-button-op">/</button>
        </div>
        <div className="calc-row">
          <button
            className="calc-button"
            value="7"
            onChange={(e) => setNumbers(e.target.value)}
            onClick={handleNumber}
          >
            7
          </button>
          <button
            className="calc-button"
            value="8"
            onChange={(e) => setNumbers(e.target.value)}
            onClick={handleNumber}
          >
            8
          </button>
          <button
            className="calc-button"
            value="9"
            onChange={(e) => setNumbers(e.target.value)}
            onClick={handleNumber}
          >
            9
          </button>
          <button className="calc-button calc-button-op">x</button>
        </div>
        <div className="calc-row">
          <button
            className="calc-button"
            value="4"
            onChange={(e) => setNumbers(e.target.value)}
            onClick={handleNumber}
          >
            4
          </button>
          <button
            className="calc-button"
            value="5"
            onChange={(e) => setNumbers(e.target.value)}
            onClick={handleNumber}
          >
            5
          </button>
          <button
            className="calc-button"
            value="6"
            onChange={(e) => setNumbers(e.target.value)}
            onClick={handleNumber}
          >
            6
          </button>
          <button className="calc-button calc-button-op">-</button>
        </div>
        <div className="calc-row">
          <button
            className="calc-button"
            value="1"
            onChange={(e) => setNumbers(e.target.value)}
            onClick={handleNumber}
          >
            1
          </button>
          <button
            className="calc-button"
            value="2"
            onChange={(e) => setNumbers(e.target.value)}
            onClick={handleNumber}
          >
            2
          </button>
          <button
            className="calc-button"
            value="3"
            onChange={(e) => setNumbers(e.target.value)}
            onClick={handleNumber}
          >
            3
          </button>
          <button
            className="calc-button calc-button-op"
            onChange={(e) => addNumber(e.target.value)}
            onClick={handleSubmit}
          >
            +
          </button>
        </div>
        <div className="calc-row">
          <button
            className="calc-button width-2"
            value="0"
            onClick={handleNumber}
          >
            0
          </button>
          <button className="calc-button">.</button>
          <button
            className="calc-button calc-button-op"
            value="return ="
            // onClick={}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
