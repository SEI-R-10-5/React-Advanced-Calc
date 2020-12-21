import React, { useState } from 'react'

const Calculator = props => {
    const [equation, setEquation] = useState([])
    const [result, setResult] = useState('')
    const [operation, setOperation] = useState([])
    const [decimal, setDecimal] = useState([])

    const handleClick = (e) => {
        e.preventDefault()
        addValue(e.target.value)
        // once = is clicked the operations will take place
        if (e.target.value === "=") {
            calc()
        }
        else if (e.target.value === "AC") {
            clear()
        }
        // stores the state of the operation 
        else if (e.target.value === "+" || e.target.value === "-" || e.target.value === "x" || e.target.value === "/") {
            let tempOp = [...operation, e.target.value]
            if (tempOp[1]) {
                console.log('inside operation', operation)
                setResult('ONLY ONE OPERATION, CLEAR-CALC')
            }
            else {
                setOperation(tempOp)
            }
        }
        else if (e.target.value === ".") {
            let tempDec = [...decimal, e.target.value]
            if(tempDec[1]) {
                setResult('ONLY 1 DECIMAL POINT, CLEAR-CALC')
            }
            setDecimal(tempDec)
        }
    }
    // restores states to initial state
    const clear = () => {
        setEquation([])
        setResult('')
        setOperation([])
        setDecimal([])
    }
    // adds the new value input into state: equation
    const addValue = (val) => {
        let tempeq = [...equation, val]
        // checks if the first input is "0" to avoid 0003 etc.
        if (tempeq[0] === '0') {
            setResult('NOT A VALID STARTING VALUE-CLEAR CALC')
        }
        setEquation(tempeq)
    }
    // gets the values fromt he object and turns them in a string
    const toString = (obj) => {
        let eq = [...obj]
        eq = Object.values(eq).join('')
        return eq
    }

    // performs the actual calculation
    const calc = () => {
        let num1 = ''
        let num2 = ''
        let eq = toString(equation)

        switch (true) {
            case eq.includes("+"):
                if (eq.includes(".")) {
                    num1 = parseFloat(eq.split("+")[0])
                    num2 = parseFloat(eq.split("+")[1])
                    setResult(num1 + num2)
                    break
                }
                num1 = parseInt(eq.split("+")[0])
                num2 = parseInt(eq.split("+")[1])
                setResult(num1 + num2)
                break
            case eq.includes("-"):
                if (eq.includes(".")) {
                    num1 = parseFloat(eq.split("-")[0])
                    num2 = parseFloat(eq.split("-")[1])
                    setResult(num1 - num2)
                    break
                }
                num1 = parseInt(eq.split("-")[0])
                num2 = parseInt(eq.split("-")[1])
                setResult(num1 - num2)
                break
            case eq.includes("x"):
                if (eq.includes(".")) {
                    num1 = parseFloat(eq.split("x")[0])
                    num2 = parseFloat(eq.split("x")[1])
                    setResult(num1 * num2)
                    break
                }
                num1 = parseInt(eq.split("x")[0])
                num2 = parseInt(eq.split("x")[1])
                setResult(num1 * num2)
                break
            case eq.includes("/"):
                if (eq.includes(".")) {
                    num1 = parseFloat(eq.split("/")[0])
                    num2 = parseFloat(eq.split("/")[1])
                    setResult(num1 / num2)
                    break
                }
                num1 = parseInt(eq.split("/")[0])
                num2 = parseInt(eq.split("/")[1])
                setResult(num1 / num2)
                break
        }
    }

    return (
        <div className="container">

            <h1>React Calculator</h1>
            <div className="calc-container">
                {console.log(equation)}
                <p>Values: {equation}</p>
                <div className="answer-box">Result: {result}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={handleClick} value="AC">AC</button>
                    <button className="calc-button calc-button-top" onClick={handleClick} value="+/-">+/-</button>
                    <button className="calc-button calc-button-top" onClick={handleClick} value="%">%</button>
                    <button className="calc-button calc-button-op" onClick={handleClick} value="/">/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={handleClick} value="7">7</button>
                    <button className="calc-button" onClick={handleClick} value="8">8</button>
                    <button className="calc-button" onClick={handleClick} value="9">9</button>
                    <button className="calc-button calc-button-op" onClick={handleClick} value="x">x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={handleClick} value="4">4</button>
                    <button className="calc-button" onClick={handleClick} value="5">5</button>
                    <button className="calc-button" onClick={handleClick} value="6">6</button>
                    <button className="calc-button calc-button-op" onClick={handleClick} value="-">-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={handleClick} value="1">1</button>
                    <button className="calc-button" onClick={handleClick} value="2">2</button>
                    <button className="calc-button" onClick={handleClick} value="3">3</button>
                    <button className="calc-button calc-button-op" onClick={handleClick} value="+">+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick={handleClick} value="0">0</button>
                    <button className="calc-button" onClick={handleClick} value=".">.</button>
                    <button className="calc-button calc-button-op" onClick={handleClick} value="=">=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator