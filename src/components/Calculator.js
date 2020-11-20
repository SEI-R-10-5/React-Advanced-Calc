import React, { useState } from 'react'

const Calculator = props => {
    const [firstNum, setFirstNum] = useState(null)
    const [secNum, setSecNum] = useState(null)
    const [op, setOp] = useState('')
    const [ans, setAns] = useState('')

    const clearAns = () => {
        setFirstNum(null)
        setSecNum(null)
        setOp('')
        setAns('')
    }

    const operator = (e) => {
        e.preventDefault()
        if (op === '') {
            return setOp(e.target.id)
        } else {
            console.log('Already using an operator')
        }
    }

    const handleChange = (e) => {
        e.preventDefault()
        if (op === '' && firstNum === null) {
            if (e.target.id === '0') {
                return null
            } else { (setFirstNum(parseInt(e.target.id))) }
        } else if (op === '' && firstNum) {
            let num = firstNum.toString()
            let numm = `${num}${e.target.id}`
            setFirstNum(numm)
        } else if (op !== '' && secNum === null) {
            if (e.target.id === '0') {
                return null
            } else { (setSecNum(parseInt(e.target.id))) }
        } else if (op !== '' && secNum) {
            let num = secNum.toString()
            let numm = `${num}${e.target.id}`
            setSecNum(numm)
        }
    }

    const decimal = () => {
        if (op === '' && firstNum === null) {
            setFirstNum('0.')
        } else if (op === '' && firstNum) {
            let num = firstNum.toString()
            let numm = `${num}.`
            setFirstNum(numm)
        } else if (op !== '' && secNum === null) {
            setSecNum('0.')
        } else if (op !== '' && secNum) {
            let num = secNum.toString()
            let numm = `${num}.`
            setSecNum(numm)
        }
    }

    const switchNegPos = () => {
        if (op === '') {
            let num = firstNum
            setFirstNum(-num)
        } else {
            let num = secNum
            setSecNum(-num)
        }
    }

    const getAns = () => {
        switch (op) {
            case ('+'):
                setAns(Number(firstNum) + Number(secNum))
                break;
            case ('/'):
                setAns(Number(firstNum) / Number(secNum))
                break;
            case ('-'):
                setAns(Number(firstNum) - Number(secNum))
                break;
            case ('x'):
                setAns(Number(firstNum) * Number(secNum))
                break;
            case ('%'):
                setAns(Number(firstNum) % Number(secNum))
                break;
            default:
                return
        }
    }

    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <p>{firstNum} {op} {secNum}</p>
                <div className="answer-box">{ans}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={clearAns}>AC</button>
                    <button className="calc-button calc-button-top" onClick={switchNegPos}>+/-</button>
                    <button className="calc-button calc-button-top" id="%" onClick={(e) => { operator(e) }}>%</button>
                    <button className="calc-button calc-button-op" id="/" onClick={(e) => { operator(e) }}>/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" id="7" onClick={(e) => { handleChange(e) }}>7</button>
                    <button className="calc-button" id="8" onClick={(e) => { handleChange(e) }}>8</button>
                    <button className="calc-button" id="9" onClick={(e) => { handleChange(e) }}>9</button>
                    <button className="calc-button calc-button-op" id="x" onClick={(e) => { operator(e) }}>x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" id="4" onClick={(e) => { handleChange(e) }}>4</button>
                    <button className="calc-button" id="5" onClick={(e) => { handleChange(e) }}>5</button>
                    <button className="calc-button" id="6" onClick={(e) => { handleChange(e) }}>6</button>
                    <button className="calc-button calc-button-op" id="-" onClick={(e) => { operator(e) }}>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" id="1" onClick={(e) => { handleChange(e) }}>1</button>
                    <button className="calc-button" id="2" onClick={(e) => { handleChange(e) }}>2</button>
                    <button className="calc-button" id="3" onClick={(e) => { handleChange(e) }}>3</button>
                    <button className="calc-button calc-button-op" id="+" onClick={(e) => { operator(e) }}>+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" id="0" onClick={(e) => { handleChange(e) }}>0</button>
                    <button className="calc-button" onClick={decimal}>.</button>
                    <button className="calc-button calc-button-op" onClick={getAns}>=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator