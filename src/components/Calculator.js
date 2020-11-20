import React, { useState } from 'react'


const Calculator = props => {
    // Declare state variables
    const [number, setNumber] = useState('')
    const [string, setString] = useState('')
    const [result, setResult] = useState('')
    const [message, setMessage] = useState('')


    const handleSubmit = event => {
        if (event.target.value === '0' + string) {
            console.log('WRONG')
            setMessage('ERROR')
        }
        else {
            setMessage('')
            setNumber(event.target.value)
            console.log('CURRENT NUMBER', event.target.value)
            let inputString = (string + event.target.value)
            setString(inputString)
            console.log('CURRENT STRING', inputString)
        }
    }

  
    const calculate = event => {
        console.log('CALC', eval(string))
        setResult(eval(string))
        setString('')
    }

    const reset = event => {
        setMessage('')
        setNumber('')
        setString('')
        setResult('')
    }

    console.log('UPDATE', string)

    console.log('NEGATIVE', eval('-5 + 2'))

    return (
        <div className="container">
            <h1>React Calculator</h1>
            <h3>{message}</h3>
            <div className="calc-container">
                <p>{result}</p>
                <div className="answer-box">
                    {string}
                </div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" value='_' onClick={reset}>AC</button>
                    <button className="calc-button calc-button-top" value='+/-' onClick={handleSubmit}>+/-</button>
                    <button className="calc-button calc-button-top" value='/100' onClick={handleSubmit}>%</button>
                    <button className="calc-button calc-button-op" value='/' onClick={handleSubmit}>/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" value='7' onClick={handleSubmit}>7</button>
                    <button className="calc-button" value='8' onClick={handleSubmit}>8</button>
                    <button className="calc-button" value='9' onClick={handleSubmit}>9</button>
                    <button className="calc-button calc-button-op" value='*' onClick={handleSubmit}>x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" value='4' onClick={handleSubmit}>4</button>
                    <button className="calc-button" value='5' onClick={handleSubmit}>5</button>
                    <button className="calc-button" value='6' onClick={handleSubmit}>6</button>
                    <button className="calc-button calc-button-op" value='-' onClick={handleSubmit}>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" value='1' onClick={handleSubmit}>1</button>
                    <button className="calc-button" value='2' onClick={handleSubmit}>2</button>
                    <button className="calc-button" value='3' onClick={handleSubmit}>3</button>
                    <button className="calc-button calc-button-op" value='+' onClick={handleSubmit}>+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" value='0' onClick={handleSubmit}>0</button>
                    <button className="calc-button" value='.' onClick={handleSubmit}>.</button>
                    <button className="calc-button calc-button-op" value='=' onClick={calculate}>=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator






