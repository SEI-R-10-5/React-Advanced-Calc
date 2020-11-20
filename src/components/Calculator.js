import React, { useState } from 'react'

const Calculator = props => {
    const [initialNumber, setInitialNumber] = useState('')
    const [operatingNumber, setOperatingNumber] = useState("0")
    const [operator, PerformOperation] = useState(null)
    const toggleNegative = useState(false)
    const isOperating = useState(false)


// setInitialNumber(parseInt([...initialNumber,initialNumber]))

//take this and put it into a function and then concatenate
//and then parseInt the total concatenation


const changeSign = () => {
    toggleNegative ? 
    toggleNegative=false 
    : toggleNegative=true
    switch (number){
        case number= initialNumber && toggleNegative===true:
            initialNumber *-1
        case number = operatingNumber &&toggleNegative===true:
            operatingNumber * -1
    }
}
performOperation(initialNumber, operator, operatingNumber)
    switch(operator) {
        case"+": ((initialNumber, operatingNumber) => (initialNumber + operatingNumber))
    break;
        case"-":  ((initialNumber, operatingNumber) => (initialNumber - operatingNumber))
    break;
        case"*": ((initialNumber, operatingNumber) => (initialNumber * operatingNumber))
    break;
        case"/": ((initialNumber, operatingNumber) => (initialNumber / operatingNumber))
    break;
        case"%": ((initialNumber, operatingNumber) => (initialNumber % operatingNumber))
    default:
        console.log('operating switch didn\'t run, what did you even do')
    }
}

const numberPrinter = (event, props) => {
    (isOperating ? 
    setInitialNumber(event.target.value)
    :
    setOperatingNumber(event.target.value))
    let firstNumber= (new String(initialNumber))
    let secondNumber=(new String(operatingNumber))
    parseInt(firstNumber)
    parseInt(secondNumber)
    performOperation(
        firstNumber,
        secondNumber)


    
}

const clearIt = () => {
    initialNumber = ''
    operatingNumber = ''
    operator = ''
}
//need to do string concatenation
//and tehn parseint the string concatenation
const calculate = () => {

    return (

        //I kind of didn't know what to do at first so I just went through and broke up each button
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">TBD</div>
                <div className="calc-row">
                    <button 
                    //      AC button
                        className="calc-button calc-button-top"
                        onClick={clearIt}
                    >AC
                    </button>
                    <button 
                    //      +/- button
                        className="calc-button calc-button-top"
                        onClick={changeSign()}
                    >+/-
                    </button>
                    <button 
                    //      % button
                        className="calc-button calc-button-top"
                        onClick={
                            operate("%"),
                            isOperating=true                       
                        }
                    >%
                    </button>
                    <button 
                    //      / button
                    className="calc-button calc-button-op"
                    onClick={
                        operate("/"),
                        isOperating=true                       
                    }
                    >/
                    </button>
                </div>
                <div className="calc-row">
                    <button 
                    //      7 button
                    className="calc-button"
                    value='7'
                    onClick={numberPrinter}
                    >7</button>
                    <button 
                    //      8 button
                    className="calc-button"
                    value='8'
                    onClick={numberPrinter}
                    >8</button>
                    <button 
                    //      9 button
                    className="calc-button"
                    value='9'
                    onClick={numberPrinter}
                    >9</button>
                    <button 
                    //      x button
                    className="calc-button calc-button-op"
                    onClick={
                        operate("*"),
                        isOperating=true                        
                    }
                    >x</button>
                </div>
                <div className="calc-row">
                    <button 
                        className="calc-button"
                        value = "4"
                        onClick={numberPrinter}    
                    >4</button>
                    <button 
                    className="calc-button"
                    value="5"
                    onClick={numberPrinter}
                    >5</button>
                    <button 
                        className="calc-button"
                        value="6"
                        onClick={numberPrinter}
                    >6</button>
                    <button 
                        className="calc-button calc-button-op"
                        onClick={
                            operate("-"),
                            isOperating=true                           
                        }
                    >-</button>
                </div>
                <div className="calc-row">
                    <button 
                        className="calc-button"
                        value="1"
                        onClick={numberPrinter}
                    >1</button>
                    <button 
                        className="calc-button"
                        value="2"
                        onClick={numberPrinter}
                    >2</button>
                    <button 
                        className="calc-button"
                        value="3"
                        onClick={numberPrinter}
                    >3</button>
                    <button 
                        className="calc-button calc-button-op"
                        onClick={
                            operate("+"),
                            isOperating=true 
                        }
                    >+</button>
                </div>
                <div className="calc-row">
                    <button 
                        className="calc-button width-2"
                        value="0"
                        onClick={numberPrinter}
                    >0</button>
                    <button 
                        className="calc-button"
                        onClick={
                            console.log(`button clicked`)
                        }
                    >.</button>
                    <button 
                        className="calc-button calc-button-op"
                        onClick={
                            performOperation()
                        }    
                    >=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator