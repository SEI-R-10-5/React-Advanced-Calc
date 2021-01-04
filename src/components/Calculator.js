import React, { useState } from 'react'

const Calculator = props => {
    // Declare state variables
    const [num, setNum] = useState('')
    const [currentNum, setCurrentNum] = useState('')
    const [op, setOp] = useState('')
    const [result, setResult] = useState('0')

    const clear = () => {
        setNum('')
        setCurrentNum('')
        setOp('')
        setResult(0)
      }

    
    const numClick = e => {
        e.preventDefault()
        setCurrentNum(currentNum + e.target.value)
    }

    const handleOperator = e => {
        e.preventDefault()
        if (op) {
          return setResult('Error!')
        } else {
          setNum(currentNum)
          setOp(e.target.value)
          setCurrentNum('')
        }
      }

    const useDecimal = e => {
        e.preventDefault()
        if(!currentNum) {
            setCurrentNum('0.')
        } else if (currentNum.indexOf('.') === -1) {
            setCurrentNum(currentNum + '.')
        }
    }

    const calculate = () => {
        let operation = op
        switch (operation) {
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




      return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p> {num} {op} {currentNum} </p>
            <div className="answer-box">{result}</div>
            <div className="calc-row">
                <button className="calc-button calc-button-top" value="AC" onClick={clear}>AC</button>
                <button className="calc-button calc-button-top" onClick={(e) => handleOperator(e)}>+/-</button>
                <button className="calc-button calc-button-top" value="%" onClick={(e) => handleOperator(e)}>%</button>
                <button className="calc-button calc-button-op" value="/" onClick={(e) => handleOperator(e)}>/</button>
            </div>
            <div className="calc-row">
                <button className="calc-button" value="7" onClick={(e) => numClick(e)}>7</button>
                <button className="calc-button" value="8" onClick={(e) => numClick(e)}>8</button>
                <button className="calc-button" value="9" onClick={(e) => numClick(e)}>9</button>
            <button className="calc-button calc-button-op" value="x" onClick={(e) => handleOperator(e)}>x</button>
            </div>
            <div className="calc-row">
                <button className="calc-button" value="4" onClick={(e) => numClick(e)}>4</button>
                <button className="calc-button" value="5" onClick={(e) => numClick(e)}>5</button>
                <button className="calc-button" value="6" onClick={(e) => numClick(e)}>6</button>
                <button className="calc-button calc-button-op" value="-" onClick={(e) => handleOperator(e)}>-</button>
            </div>
            <div className="calc-row">
                <button className="calc-button" value="1" onClick={(e) => numClick(e)}>1</button>
                <button className="calc-button" value="2" onClick={(e) => numClick(e)}>2</button>
                <button className="calc-button" value="3" onClick={(e) => numClick(e)}>3</button>
                <button className="calc-button calc-button-op" value="+" onClick={(e) => handleOperator(e)}>+</button>
             </div>
            <div className="calc-row">
                <button className="calc-button width-2" value="0" onClick={(e) => numClick(e)}>0</button>
                <button className="calc-button" onClick={useDecimal}>.</button>
                <button className="calc-button calc-button-op" value="=" onClick={calculate}>=</button>
            </div>
            </div>
         </div>
      )
    }

export default Calculator