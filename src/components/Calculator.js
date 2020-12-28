import React, { useState } from "react";

const Calculator = (props) => {
  // Declare state variables
  const [result, calcResult] = useState(0);
  const [fixedInput, setFixedInput] = useState("");
  const [operator, setOperator] = useState("");
  const [currentNum, setCurrentNum] = useState("");
  const [error, setErrorMessage] = useState("");
  // do I need an error state...? let's avoid if possible

  // Declare Functions //
  //////////////////////
  // ClearCalculator - done
  // HandleNumbers - done
  // HandleOperators - done
  // CalcResult - done
  // dont accept multiple leading 0s...
  // Handle +/- button - done
  // Handle % - extra bonus?

  // ErrorMessage (for hitting operator twice) - done

  // Required Bonus options:
  // enable negative numbers with the - operator (or subtracting into negatives)
  // Implement the floating point . button in order to support decimals.
  // Don't allow more than one decimal per number!
  // this also might make the 0 issue easier - currently accepting 0 as the first number multiple times

  const clearCalc = (e) => {
    calcResult(0);
    setFixedInput("");
    setCurrentNum("");
    setOperator("");
    setErrorMessage("");
    console.log("All Cleared");
  };

  const handleNumbers = (e) => {
    if (e.target.value === "0" && currentNum === "0") {
    // setErrorMessage('Multiple zeros, clear');
    setCurrentNum('0')
    } else if (
      e.target.value !== "+" ||
      e.target.value !== "-" ||
      e.target.value !== "*" ||
      e.target.value !== "/"
    ) {
      let number = e.target.value;
      setCurrentNum(currentNum + number);
    } else {
      setErrorMessage("number input error, clear and try again");
    }
  };

  // operators are allowing multiple inputs and erasing state if a second is put in...
  const handleOperators = (e) => {
    if (operator) {
      setErrorMessage("Error, clear & try again");
    } else if (
      e.target.value === "+" ||
      e.target.value === "-" ||
      e.target.value === "*" ||
      e.target.value === "/"
    ) {
      let operator = e.target.value;
      setFixedInput(currentNum);
      setOperator(operator);
      setCurrentNum("");
    } else {
      setErrorMessage("Operator error, clear and try again");
    }
  };

  const calculateResult = (e) => {
    console.log("calcResult happening", e.target.value);
    if (currentNum === "" || fixedInput === "") {
      setErrorMessage("calculate input error, clear and try again");
    } else if (operator === "+") {
      let result = (Number(currentNum) + Number(fixedInput)).toString();
      calcResult(result);
    } else if (operator === "-") {
      let result = (Number(fixedInput) - Number(currentNum)).toString();
      calcResult(result);
    } else if (operator === "*") {
      let result = (Number(currentNum) * Number(fixedInput)).toString();
      calcResult(result);
    } else if (operator === "/") {
      let result = (Number(fixedInput) / Number(currentNum)).toString();
      calcResult(result);
    } else {
      setErrorMessage("Calculating...");
    }
  };

  // bonus requirement!
  const handlePlusMinus = (e) => {
    if (currentNum !== "-" + currentNum) {
      setCurrentNum(Number(currentNum) * -1);
    } else if (currentNum === "-" + currentNum) {
      setCurrentNum(Number(currentNum) * -1);
    } else {
      console.log("neg/pos error, clear and try again");
    }
  };

  // Handle % - done - just divides by 100
  const handlePercent = (e) => {
      setCurrentNum(Number(currentNum) / 100)
  }

  //handle Decimal - thanks Andre : )
  const handleDecimal = (e) => {
      if (currentNum === '') {
          setCurrentNum('0.')
      }
      else if (currentNum.indexOf('.') === -1) {
          setCurrentNum(currentNum + '.')
      }
  }

  ////////////////////////////////////////////////

  return (
    <div className="container">
      <h1>React Calculator</h1>
      <div className="calc-container">
        <p>
          {fixedInput}
          {operator}
          {currentNum}
        </p>
        <div className="answer-box">{result || error}</div>
        <div className="calc-row">
          <button
            className="calc-button calc-button-top"
            onClick={() => clearCalc()}
          >
            AC
          </button>
          <button
            className="calc-button calc-button-top"
            value={"pm"}
            onClick={(e) => handlePlusMinus(e)}
          >
            +/-
          </button>
          <button className="calc-button calc-button-top" value={'%'} onClick={(e)=> handlePercent(e)}>%</button>
          <button
            className="calc-button calc-button-op"
            value={"/"}
            onClick={(e) => handleOperators(e)}
          >
            /
          </button>
        </div>
        <div className="calc-row">
          <button
            className="calc-button"
            value={"7"}
            onClick={(e) => handleNumbers(e)}
          >
            7
          </button>
          <button
            className="calc-button"
            value={"8"}
            onClick={(e) => handleNumbers(e)}
          >
            8
          </button>
          <button
            className="calc-button"
            value={"9"}
            onClick={(e) => handleNumbers(e)}
          >
            9
          </button>
          <button
            className="calc-button calc-button-op"
            value={"*"}
            onClick={(e) => handleOperators(e)}
          >
            x
          </button>
        </div>
        <div className="calc-row">
          <button
            className="calc-button"
            value={"4"}
            onClick={(e) => handleNumbers(e)}
          >
            4
          </button>
          <button
            className="calc-button"
            value={"5"}
            onClick={(e) => handleNumbers(e)}
          >
            5
          </button>
          <button
            className="calc-button"
            value={"6"}
            onClick={(e) => handleNumbers(e)}
          >
            6
          </button>
          <button
            className="calc-button calc-button-op"
            value={"-"}
            onClick={(e) => handleOperators(e)}
          >
            -
          </button>
        </div>
        <div className="calc-row">
          <button
            className="calc-button"
            value={"1"}
            onClick={(e) => handleNumbers(e)}
          >
            1
          </button>
          <button
            className="calc-button"
            value={"2"}
            onClick={(e) => handleNumbers(e)}
          >
            2
          </button>
          <button
            className="calc-button"
            value={"3"}
            onClick={(e) => handleNumbers(e)}
          >
            3
          </button>
          <button
            className="calc-button calc-button-op"
            value={"+"}
            onClick={(e) => handleOperators(e)}
          >
            +
          </button>
        </div>
        <div className="calc-row">
          <button
            className="calc-button width-2"
            value={"0"}
            onClick={(e) => handleNumbers(e)}
          >
            0
          </button>
          <button className="calc-button" value={"."} onClick={(e)=> handleDecimal(e)}>
            .
          </button>
          <button
            className="calc-button calc-button-op"
            value={"="}
            onClick={(e) => calculateResult(e)}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
