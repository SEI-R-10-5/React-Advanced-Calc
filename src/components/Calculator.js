import React, { useState } from "react";

const Calculator = (props) => {
  // Declare state variables
  const [num, setNum] = useState(0);
  const [firstNum, setfristNum] = useState(0);
  const [operator, setOperator] = useState("");
  const [answer, setAnswer] = useState(0);

  const handleClear = () => {
    setNum(0);
    setfristNum(0);
    setAnswer(0);
    setOperator("");
  };

  const handleOperator = (e) => {
    if (operator) {
      return setAnswer("error");
    }
    setOperator(e.target.value);
    setfristNum(num);
    setNum(0);
  };

  const handleNums = (e) => {
    let number = e;
    if (num === 0) {
      return setNum(number);
    }
    setNum("" + num + number);
  };

  const handleDec = () => {
    let stringNum = num.toString();
    let reDot = /[.]/g;
    if (stringNum.search(reDot) < 0) {
      setNum(num + ".");
    }
  };

  const handlePercent = () => {
    let solution = num / 100;
    setAnswer(solution);
  };

  const handlePosToNeg = () => {
    if (num > 0) {
      return setNum(-Math.abs(num));
    }
    setNum(Math.abs(num));
  };

  const getAnswer = () => {
    let solution = firstNum + operator + num;
    setAnswer(eval(solution));
  };

  return (
    <div className="container">
      <h1>React Calculator</h1>
      <div className="calc-container">
        <p>
          {firstNum !== 0 ? firstNum : null}
          {operator}
          {num}
        </p>
        <div className="answer-box">{answer}</div>
        <div className="calc-row">
          <button onClick={handleClear} className="calc-button calc-button-top">
            AC
          </button>
          <button
            onClick={handlePosToNeg}
            className="calc-button calc-button-top"
          >
            +/-
          </button>
          <button
            onClick={handlePercent}
            className="calc-button calc-button-top"
          >
            %
          </button>
          <button
            onClick={handleOperator}
            className="calc-button calc-button-op"
            value="/"
          >
            /
          </button>
        </div>
        <div className="calc-row">
          <button onClick={() => handleNums(7)} className="calc-button">
            7
          </button>
          <button onClick={() => handleNums(8)} className="calc-button">
            8
          </button>
          <button onClick={() => handleNums(9)} className="calc-button">
            9
          </button>
          <button
            onClick={handleOperator}
            className="calc-button calc-button-op"
            value="*"
          >
            x
          </button>
        </div>
        <div className="calc-row">
          <button onClick={() => handleNums(4)} className="calc-button">
            4
          </button>
          <button onClick={() => handleNums(5)} className="calc-button">
            5
          </button>
          <button onClick={() => handleNums(6)} className="calc-button">
            6
          </button>
          <button
            onClick={handleOperator}
            className="calc-button calc-button-op"
            value="-"
          >
            -
          </button>
        </div>
        <div className="calc-row">
          <button onClick={() => handleNums(1)} className="calc-button">
            1
          </button>
          <button onClick={() => handleNums(2)} className="calc-button">
            2
          </button>
          <button onClick={() => handleNums(3)} className="calc-button">
            3
          </button>
          <button
            onClick={handleOperator}
            className="calc-button calc-button-op"
            value="+"
          >
            +
          </button>
        </div>
        <div className="calc-row">
          <button onClick={() => handleNums(0)} className="calc-button width-2">
            0
          </button>
          <button onClick={handleDec} className="calc-button">
            .
          </button>
          <button onClick={getAnswer} className="calc-button calc-button-op">
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
