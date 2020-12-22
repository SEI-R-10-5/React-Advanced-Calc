import React, { useState } from 'react'

const Calculator = props => {
  // Declare state variables
  const [num, setNum] = useState('')
  const [currentNum, setCurrentNum] = useState('')
  const [op, setOp] = useState('')
  const [result, setResult] = useState('0')

  const handleNumber = e => {
    e.preventDefault()
    setCurrentNum(currentNum + e.target.value)
    console.log(e.target.value)
  }

  const handleOperator = e => {
    e.preventDefault()
    if (op) {
      return setResult('ERROR')
    } else {
      setNum(currentNum)
      setOp(e.target.value)
      setCurrentNum('')
    }
  }

  const handleDecimal = e => {
    e.preventDefault()
    if (!currentNum) { // if there is no currentNumber
      setCurrentNum('0.') // then it needs a 0 before decimal
    } else if (currentNum.indexOf('.') === -1) { // else, currentNumber and the indexOf the array 
      setCurrentNum(currentNum + '.') // then set currentNumber with a decimal
    }
  }

  const calculate = () => {
    let operate = op
    switch (operate) {
      case ('+'):
        setResult(Number(num) + Number(currentNum))
        break
      case ('-'):
        setResult(Number(num) - Number(currentNum))
        break
      case ('x'):
        setResult(Number(num) * Number(currentNum))
        break
      case ('/'):
        setResult(Number(num) / Number(currentNum))
        break
      case ('%'):
        setResult(Number(num) % Number(currentNum))
        break
      default:
        return
    }
  }

  const handleClear = () => {
    setNum('')
    setCurrentNum('')
    setOp('')
    setResult(0)
  }

  return (
    <div className="container">
      <h1>React Calculator</h1>
      <div className="calc-container">
        <p> {num} {op} {currentNum} </p>
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