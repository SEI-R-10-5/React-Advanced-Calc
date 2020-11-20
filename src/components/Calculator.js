import React, { useState } from 'react'

const Calculator = props => {
    // Declare state variables
    const [number, setNumber] = useState('')
    const [action, setAction] = useState('')
    const [answer, setAnswer] = useState('')

    const printThemNums = (e, props) => {
        if (e.target.value === !Number ){
            number.props.prevState()
            
            alert('error')
        }
        else{
      setNumber(e.target.value)
      console.log(e.target.value)
      let answerBox = (action + e.target.value)
      setAction(answerBox)
      console.log(answer)
        }
    }

    const doMath = e => {
        setAnswer(eval(action))
        console.log()
    }

    // const JustClearIt = () => {
    //     window.location.reload()
    // }

    const reset = e => {
        setAnswer('')
        setNumber('')
        setAction('')
    }
  


    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>{answer} </p>
    <div className="answer-box">{action}</div>
                <div className="calc-row">
                    <button onClick={reset} className="calc-button calc-button-top">AC</button>
                    <button onClick={printThemNums} value='+/-' className="calc-button calc-button-top">+/-</button>
                    <button onClick={printThemNums} value='%' className="calc-button calc-button-top">%</button>
                    <button onClick={printThemNums} value='/' className="calc-button calc-button-op">/</button>
                </div>
                <div className="calc-row">
                    <button onClick={ printThemNums } value='7' className="calc-button">7</button>
                    <button onClick={ printThemNums } value='8' className="calc-button">8</button>
                    <button onClick={ printThemNums } value='9' className="calc-button">9</button>
                    <button onClick={ printThemNums } value='*' className="calc-button calc-button-op">x</button>
                </div>
                <div className="calc-row">
                    <button onClick={ printThemNums } value='4' className="calc-button">4</button>
                    <button onClick={ printThemNums } value='5' className="calc-button">5</button>
                    <button onClick={ printThemNums } value='6' className="calc-button">6</button>
                    <button onClick={ printThemNums } value='-' className="calc-button calc-button-op">-</button>
                </div>
                <div className="calc-row">
                    <button onClick={ printThemNums } value='1' className="calc-button">1</button>
                    <button onClick={ printThemNums } value='2' className="calc-button">2</button>
                    <button onClick={ printThemNums } value='3' className="calc-button">3</button>
                    <button onClick={ printThemNums } value='+' className="calc-button calc-button-op">+</button>
                </div>
                <div className="calc-row">
                    <button onClick={ printThemNums } value='0' className="calc-button width-2">0</button>
                    <button className="calc-button">.</button>
                    <button onClick={ doMath } className="calc-button calc-button-op">=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator