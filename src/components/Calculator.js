import React, { useState } from 'react'

const Calculator = props => {
    const [priorValue, setPriorValue] = useState('0')
    const [currentValue, setCurrentValue] = useState('0')
    const [performCalc, setPerformCalc] = useState(false)
    const [currentOperand, setCurrentOperand] = useState('')
    const [clearOnNextInput, setClearOnNextInput] = useState(false)


    const clearResult = () => {
        setPriorValue(0)
        setCurrentValue(0)
        setPerformCalc(false)
        setCurrentOperand('')
        setClearOnNextInput(true)
    }

    const concatValues = (e) => {
        console.log("Concat: ", e.target.id)
        // if (e.target.id === "." && evalDecimal()) {
        //     return
        // } else {
            if (!clearOnNextInput) {
                let newValue = currentValue.concat(e.target.id)
                newValue = parseFloat(newValue).toString()
                if(e.target.id === '.'){
                    newValue = newValue.concat('.')
                }
                setCurrentValue(newValue)
            } else {
                setCurrentValue(e.target.id)
                setClearOnNextInput(false)
            }
        // }
    }

    //  I might come back to this sometime.
    // const evalDecimal = () => {
    //     if (currentValue.includes('.')) {
    //         return true
    //     }
    //     console.log(false)
    //     return false
    // }

    const finalTotal = () => {
        let result = performMath(parseFloat(priorValue), parseFloat(currentValue))
        setCurrentValue(result)
        setPerformCalc(false)
        setClearOnNextInput(true)
    }

    const handleNewOperand = (e) => {
        setCurrentOperand(e.target.id)
        if (performCalc) {
            let result = performMath(parseFloat(priorValue), parseFloat(currentValue))
            setPriorValue(result)
            setCurrentValue(result)
        } else {
            setPriorValue(currentValue)
            setPerformCalc(true)
        }
        setClearOnNextInput(true)
    }

    const negOne = (e) => {
        let currentVal = parseFloat(currentValue)
        console.log('negVal-1: ', currentVal)
        currentVal *= -1
        console.log('negVal-2: ', currentVal)
        setCurrentValue(currentVal.toString())
    }

    const performMath = (val1, val2) => {
        console.log("HIT performMath: ", val1, val2)
        let result = 0
        switch (currentOperand) {
            case '+':
                result = val1 + val2
                break
            case '-':
                result = val1 - val2
                break
            case 'X':
                result = val1 * val2
                break
            case '÷':
                result = val1 / val2
                break
            case '%':
                result = (val1 * val2 * .01) + val1
                break
        }
        return result
    }


    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <div className="answer-box">{currentValue}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={e => clearResult()}>AC</button>
                    <button className="calc-button calc-button-top" id='+/-' onClick={e => negOne(e)}>+/-</button>
                    <button className="calc-button calc-button-top" id='%' onClick={e => handleNewOperand(e)}>%</button>
                    <button className="calc-button calc-button-op" id='÷' onClick={e => handleNewOperand(e)}>÷</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" id='7' onClick={e => concatValues(e)}>7</button>
                    <button className="calc-button" id='8' onClick={e => concatValues(e)}>8</button>
                    <button className="calc-button" id='9' onClick={e => concatValues(e)} >9</button>
                    <button className="calc-button calc-button-op" id='X' onClick={e => handleNewOperand(e)}>X</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" id='4' onClick={e => concatValues(e)}>4</button>
                    <button className="calc-button" id='5' onClick={e => concatValues(e)}>5</button>
                    <button className="calc-button" id='6' onClick={e => concatValues(e)}>6</button>
                    <button className="calc-button calc-button-op" id='-' onClick={e => handleNewOperand(e)}>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" id='1' onClick={e => concatValues(e)}>1</button>
                    <button className="calc-button" id='2' onClick={e => concatValues(e)}>2</button>
                    <button className="calc-button" id='3' onClick={e => concatValues(e)}>3</button>
                    <button className="calc-button calc-button-op" id='+' onClick={e => handleNewOperand(e)}>+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" id='0' onClick={e => concatValues(e)}>0</button>
                    {/* <button className="calc-button" id='.' onClick={e => concatValues(e)}>.</button> */}
                    {/* Disabled the ability to use a decimal place because JS is terrible at returning practical float values */}
                    <button className="calc-button" onClick={e => concatValues(e)}>.</button>
                    <button className="calc-button calc-button-op" onClick={e => finalTotal()} >=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator