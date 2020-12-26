import React, { useState } from "react";

const Calculator = (props) => {
  // Declare state variables
  const [result, calcResult] = useState(0);
  const [fixedInput, setFixedInput] = useState("");
  const [operator, setOperator] = useState("");
  const [currentNum, setCurrentNum] = useState("");
  const [error, setErrorMessage] = useState('')
  // do I need an error state...? let's avoid if possible


  // Declare Functions //
  //////////////////////
  // ClearCalculator - done
  // HandleNumbers - done
  // HandleOperators - done
  // CalcResult - v1 done, could need fine tuning

  // Handle +/- button
  // Handle % 
  
  // ErrorMessage (for hitting operator twice)
  // Required Bonus options:
  // enable negative numbers with the - operator (or subtracting into negatives)
  // Implement the floating point . button in order to support decimals.
  // Don't allow more than one decimal per number!

  const clearCalc = (e) => {
    calcResult(0);
    setFixedInput("");
    setCurrentNum("");
    setOperator("");
    console.log('All Cleared')
  };

  const handleNumbers = (e) => {
      if (e.target.value !== '+' || e.target.value !== '-' || e.target.value !== '*' || e.target.value !== '/') {
        let number = e.target.value
        setCurrentNum(currentNum + number)
      }
      else{
        setErrorMessage('number input error, clear and try again')
      }
  }

  const handleOperators = (e) => {
    if (e.target.value === '+' || e.target.value === '-' || e.target.value === '*' || e.target.value === '/'){
        let operator = e.target.value
        console.log('CurrentNum at time of operator:', currentNum)
        setFixedInput(currentNum)
        setOperator(operator)
        setCurrentNum('')
        console.log('CurrentNum now:',currentNum,'and FixedInput now:', fixedInput)
    }
    else {
        setErrorMessage('operator error, clear and try again')
    }
  }
  
  const calculateResult = (e) => {
      console.log('calcResult happening', e.target.value)
      if (currentNum === "" || fixedInput === "") {
        setErrorMessage("calculate input error, clear and try again");
      } else if (operator === "+") {
        let result = (Number(currentNum) + Number(fixedInput)).toString();
        calcResult(result);
      } else if (operator === "-") {
        let result = (Number(currentNum) - Number(fixedInput)).toString();
        calcResult(result);
      } else if (operator === "*") {
        let result = (Number(currentNum) * Number(fixedInput)).toString();
        calcResult(result);
      } else if (operator === "/") {
        let result = (Number(currentNum) / Number(fixedInput)).toString();
        calcResult(result);
      }
      else{
          setErrorMessage('Calculating...')
      }
  }


  ////////////////////////////////////////////////

  return (
    <div className="container">
      <h1>React Calculator</h1>
      <div className="calc-container">
        <p>{currentNum}{operator}{fixedInput}</p>
        <div className="answer-box">{result}</div>
        <div className="calc-row">
          <button
            className="calc-button calc-button-top"
            onClick={() => clearCalc()}
          >
            AC
          </button>
          <button className="calc-button calc-button-top">+/-</button>
          <button className="calc-button calc-button-top">%</button>
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
          <button className="calc-button" value={"."}>
            .
          </button>
          <button className="calc-button calc-button-op" value={'='} onClick={(e)=> calculateResult(e)}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
