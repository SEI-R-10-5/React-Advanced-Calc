import React, { useState } from 'react'

const Calculator = props => {
    // Declare state variables
    const [num1, setNum1]=useState('')
    const [operator, setOperator]=useState('')
    const [result, setResult]=useState('')

const numberDisplay = (e, props) => {
    if (e.target.value === !Number){
        numberDisplay.props.prevState()

        alert('Error')
    }
    else{
        setNum1(e.target.value)
        let screen = (operator + e.target.value)
        setOperator(screen)
    }
}

const calculate = e => {
    setResult(eval(operator))
}

const reset = e => {
    setNum1('')
    setOperator('')
    setResult('')
}




    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: {result} </p>
                <div className="answer-box">{operator}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={reset}>AC</button>
                    <button className="calc-button calc-button-top" onClick={numberDisplay} value='+/-'>+/-</button>
                    <button className="calc-button calc-button-top" onClick={numberDisplay} value='%'>%</button>
                    <button className="calc-button calc-button-op" onClick={numberDisplay} value='/'>/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={numberDisplay} value='7'>7</button>
                    <button className="calc-button" onClick={numberDisplay} value='8'>8</button>
                    <button className="calc-button" onClick={numberDisplay} value='9'>9</button>
                    <button className="calc-button calc-button-op" onClick={numberDisplay} value='*'>x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={numberDisplay} value='4'>4</button>
                    <button className="calc-button" onClick={numberDisplay} value='5'>5</button>
                    <button className="calc-button" onClick={numberDisplay} value='6'>6</button>
                    <button className="calc-button calc-button-op" onClick={numberDisplay} value='-'>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={numberDisplay} value='1'>1</button>
                    <button className="calc-button" onClick={numberDisplay} value='2'>2</button>
                    <button className="calc-button" onClick={numberDisplay} value='3'>3</button>
                    <button className="calc-button calc-button-op" onClick={numberDisplay} value='+'>+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick={numberDisplay} value='0'>0</button>
                    <button className="calc-button" onClick={numberDisplay} value='.'>.</button>
                    <button className="calc-button calc-button-op" onClick={calculate}>=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator