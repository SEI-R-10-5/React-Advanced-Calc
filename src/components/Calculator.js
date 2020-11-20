import React, { useState } from 'react'

const Calculator = props => {

const [number, setNumber] = useState(0) //click to select number and operator
const [string, setString] = useState("") //string for the eval
const [result, setResult] = useState("")

const handleSubmit = (event) => {
    setNumber(event.target.value) 
    console.log("setNumber", event.target.value)
    let enteredValue = (string + event.target.value) //concat a string -setting empty string to value of click button
    setString(enteredValue) //setstring to the var
    console.log("entered value", enteredValue)
 }

const calculate = (event) => {
    setResult(eval(string))//setting result of calc to display
    console.log("string", eval(string))
}
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval
//source W. Hunter brainstorm

// clear with ac  - window.location.reload()
const clear = () => {
setNumber('')
setString('')
setResult('')
}

// attempt to NOT using 2 operators at same time
// const equal = () => {
//     if(setNumber === "+-" || "++"  || "+/" || "+*" || "-+" || "--" || "-/" || "-*" || "/+" || "/-" || "//" || "/*" || "**" || "*+" || "*+" || "*-" || "*/" ) {
//         return false
//     }
// }

    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p> {result} </p>
                <div className="answer-box"> {string}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" value="" onClick={clear} > AC</button>
                    <button className="calc-button calc-button-top" value="+/-" onClick={handleSubmit} > +/- </button>
                    <button className="calc-button calc-button-top" value="%" onClick={handleSubmit} >%</button>
                    <button className="calc-button calc-button-op" value="/" onClick={handleSubmit} > /</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" value="7" onClick={handleSubmit} > 7</button>
                    <button className="calc-button" value="8" onClick={handleSubmit} >8</button>
                    <button className="calc-button" value="9" onClick={handleSubmit} >9</button>
                    <button className="calc-button calc-button-op" value="*" onClick={handleSubmit} >x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" value="4" onClick={handleSubmit} >4</button>
                    <button className="calc-button" value="5" onClick={handleSubmit} >5</button>
                    <button className="calc-button" value="6" onClick={handleSubmit} >6</button>
                    <button className="calc-button calc-button-op" value="-" onClick={handleSubmit} >-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" value="1" onClick={handleSubmit}> 1</button>
                    <button className="calc-button" value="2" onClick={handleSubmit}> 2</button>
                    <button className="calc-button" value="3" onClick={handleSubmit}> 3</button>
                    <button className="calc-button calc-button-op" value="+" onClick={handleSubmit} >+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" value="0" onClick={handleSubmit}> 0</button>
                    <button className="calc-button" value="." onClick={handleSubmit} >.</button>
                    <button className="calc-button calc-button-op" value="=" onClick={calculate} >=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator

//FAIL
//     setCalculate = (e) => {
//     let first = handleSubmit
//     let second = handleSubmit
//     let operator = handleOperator
//     switch (operator) {  
//         case (handleOperator === '+'):
//             showResult({ result: first + second })
//             break
//         case (handleOperator === '-'):
//             showResult({ result: first - second })
//             break
//         case (handleOperator === '*'):
//             showResult({ result: first * second })
//             break
//         case (handleOperator === '/'):
//             showResult({ result: first / second })
//             break
//         case (handleOperator === '%'):
//             showResult({ result: first % second })
//              break
//         default:
//             showResult({ result: ""})      
// }
// }