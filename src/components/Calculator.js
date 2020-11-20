import React, { useState } from 'react'

const Calculator = props => {
    // Declare state variables
    const [result, showResult] = useState(0)
    const [num1, setNum1] = useState('')
    const [num2, setNum2] = useState('')
    const [operator, setOperator] = useState ('')

    


    const clear = () => {
        showResult(0)
        setNum1('')
        setNum2('')
        setOperator('')
    }

    const numClick = (e) => {
        setNum1(num1 + e.target.value)
        console.log(e.target.value)
        let showNumber = result
        showNumber += e.target.value
        showResult(parseInt(showNumber))
    }

    const useOperator = (e) => {
        setOperator(e.target.value)
        console.log(operator)
    }

    const answer = () => {
        if (operator === '/') {
            showResult(num1 / num2)
        } else if (operator === '*') {
            showResult(num1 * num2)
        } else if (operator === '-') {
            showResult (num1 - num2)
        } else if (operator === '+') {
            showResult (num1 + num2)
        } else if (operator === '=') {
            return
        }
    }




    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">{result}</div>
                <div className="calc-row">
                    <button onClick={clear} className="calc-button calc-button-top">AC</button>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top">%</button>
                    <button onClick={useOperator} value = '/' className="calc-button calc-button-op">/</button>
                </div>
                <div className="calc-row">
                    <button onClick={numClick} value='7' className="calc-button">7</button>
                    <button onClick={numClick} value='8'className="calc-button">8</button>
                    <button onClick={numClick} value='9'className="calc-button">9</button>
                    <button onClick={useOperator} value = '*' className="calc-button calc-button-op">x</button>
                </div>
                <div className="calc-row">
                    <button onClick={numClick} value='4'className="calc-button">4</button>
                    <button onClick={numClick} value='5'className="calc-button">5</button>
                    <button onClick={numClick} value='6'className="calc-button">6</button>
                    <button onClick={useOperator} value = '-' className="calc-button calc-button-op">-</button>
                </div>
                <div className="calc-row">
                    <button onClick={numClick} value='1'className="calc-button">1</button>
                    <button onClick={numClick} value='2'className="calc-button">2</button>
                    <button onClick={numClick} value='3'className="calc-button">3</button>
                    <button onClick={useOperator} value = '+' className="calc-button calc-button-op">+</button>
                </div>
                <div className="calc-row">
                    <button onClick={numClick} value='0' className="calc-button width-2">0</button>
                    <button className="calc-button">.</button>
                    <button onClick={answer} value = '='className="calc-button calc-button-op">=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator