import React, { useState } from 'react'

const Calculator = props => {
  // Declare state variables
  const [number, setNumber] = useState('')
  const [currentNumber, setCurrentNumber] = useState('')
  const [operator, setOperator] = useState('')
  const [result, setResult] = useState('0')

  const handleNumber = e => {
    e.preventDefault()
    setCurrentNumber(currentNumber + e.target.value)
    console.log(e.target.value)
  }

  const handleOperator = e => {
    e.preventDefault()
    if (operator) {
      return setResult('ERROR')
    } else {
      setNumber(currentNumber)
      setOperator(e.target.value)
      setCurrentNumber('')
    }
  }

  const handleDecimal = e => {
    e.preventDefault()
    if (!currentNumber) { // if there is no currentNumber
      setCurrentNumber('0.') // then it needs a 0 before decimal
    } else if (currentNumber.indexOf('.') === -1) { // else, currentNumber and the indexOf the array 
      setCurrentNumber(currentNumber + '.') // then set currentNumber with a decimal
    }
  }

  const calculate = () => {
    let op = operator
    switch (op) {
      case ('+'):
        setResult(Number(number) + Number(currentNumber))
        break
      case ('-'):
        setResult(Number(number) - Number(currentNumber))
        break
      case ('x'):
        setResult(Number(number) * Number(currentNumber))
        break
      case ('/'):
        setResult(Number(number) / Number(currentNumber))
        break
      case ('%'):
        setResult(Number(number) % Number(currentNumber))
        break
      default:
        return
    }
  }

  const handleClear = () => {
    setNumber('')
    setCurrentNumber('')
    setOperator('')
    setResult(0)
  }

  return (
    <div className="container">
      <h1>React Calculator</h1>
      <div className="calc-container">
        <p> {number} {operator} {currentNumber} </p>
      <div className="answer-box">{result}</div>
      <div className="calc-row">
        <button className="calc-button calc-button-top" value="AC" onClick={handleClear}>AC</button>
        <button className="calc-button calc-button-top" onClick={(e) => handleOperator(e)}>+/-</button>
        <button className="calc-button calc-button-top" value="%" onClick={(e) => handleOperator(e)}>%</button>
        <button className="calc-button calc-button-op" value="/" onClick={(e) => handleOperator(e)}>/</button>
      </div>
      <div className="calc-row">
        <button className="calc-button" value="7" onClick={(e) => handleNumber(e)}>7</button>
        <button className="calc-button" value="8" onClick={(e) => handleNumber(e)}>8</button>
        <button className="calc-button" value="9" onClick={(e) => handleNumber(e)}>9</button>
        <button className="calc-button calc-button-op" value="x" onClick={(e) => handleOperator(e)}>x</button>
      </div>
      <div className="calc-row">
        <button className="calc-button" value="4" onClick={(e) => handleNumber(e)}>4</button>
        <button className="calc-button" value="5" onClick={(e) => handleNumber(e)}>5</button>
        <button className="calc-button" value="6" onClick={(e) => handleNumber(e)}>6</button>
        <button className="calc-button calc-button-op" value="-" onClick={(e) => handleOperator(e)}>-</button>
      </div>
      <div className="calc-row">
        <button className="calc-button" value="1" onClick={(e) => handleNumber(e)}>1</button>
        <button className="calc-button" value="2" onClick={(e) => handleNumber(e)}>2</button>
        <button className="calc-button" value="3" onClick={(e) => handleNumber(e)}>3</button>
        <button className="calc-button calc-button-op" value="+" onClick={handleOperator}>+</button>
      </div>
      <div className="calc-row">
        <button className="calc-button width-2" value="0" onClick={(e) => handleNumber(e)}>0</button>
        <button className="calc-button" onClick={handleDecimal}>.</button>
        <button className="calc-button calc-button-op" value="=" onClick={calculate}>=</button>
      </div>
      </div>
    </div>
  )
}

export default Calculator