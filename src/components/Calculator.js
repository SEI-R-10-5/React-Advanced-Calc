import React, { useState } from 'react'

const Calculator = props => {
    // Declare state variables
    const [total, setTotal] = useState('')
    const [num, setNum] = useState('')
    const [op, setOp] = useState('')
    const [display, setDisplay] = useState('')

    const clear = () => {
        setTotal(0)
        setNum('')
        setOp('')
        setDisplay('')
    }

    const equals = () => {
        if (op === "+") {
            setTotal(total + parseInt(num))
        } else if (op === "-") {
            setTotal(total - parseInt(num))
        } else if (op === "/") {
            setTotal(total / parseInt(num))
        } else if (op === "*") {
            setTotal(total * parseInt(num))
        } else if (op === "%") {
            let division = total / parseInt(num);
            let fraction = division - Math.floor(division)
            let remainder = fraction * parseInt(num);
            setTotal(Math.round(remainder))
        }
        setNum("");
        setDisplay("");
    } 

    const operators = (sign) => {
        if(!num) {
            setDisplay('only one operator')
        } else {
            if (!operators) {
                setTotal(parseInt(num))
            } else {
                equals()
            }
            setOp(sign)
            setNum('')
        }
    }

    const edgeTester = (char) => {
        if (!num && char === "0") {
            setDisplay("Must not have leading 0")
        } else {
            setNum(num + char);
        }
    }

    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>{operators}{num?num:0}</p>
                <div className="answer-box">{total}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={() => clear()}>AC</button>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top" onClick={() => operators("%")}>%</button>
                    <button className="calc-button calc-button-op" onClick={() => operators("/")}>/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={() => edgeTester("7")}>7</button>
                    <button className="calc-button" onClick={() => edgeTester("8")}>8</button>
                    <button className="calc-button" onClick={() => edgeTester("9")}>9</button>
                    <button className="calc-button calc-button-op" onClick={() => operators("*")}>x</button>
                </div>
                <div className="calc-row">
                <button className="calc-button" onClick={() => edgeTester("4")}>4</button>
                    <button className="calc-button" onClick={() => edgeTester("5")}>5</button>
                    <button className="calc-button" onClick={() => edgeTester("6")}>6</button>
                    <button className="calc-button calc-button-op" onClick={() => operators("-")}>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={() => edgeTester("1")}>1</button>
                    <button className="calc-button" onClick={() => edgeTester("2")}>2</button>
                    <button className="calc-button" onClick={() => edgeTester("3")}>3</button>
                    <button className="calc-button calc-button-op" onClick={() => operators("+")}>+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick={() => edgeTester("0")}>0</button>
                    <button className="calc-button" >.</button>
                    <button className="calc-button calc-button-op" onClick={() => equals()}>=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator