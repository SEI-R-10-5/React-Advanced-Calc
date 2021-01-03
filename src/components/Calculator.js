import React, { useState } from 'react'

const Calculator = props => {
    // Declare state variables
     
     let [numberOne, setNumberOne] = useState('')
     let [numberTwo, setNumberTwo] = useState('')
     let [operator, setOperator] = useState('')
     let [answer, setAnswer] = useState('')
    //  let [error, setError] = useState('')
     let [display, setDisplay] = useState('')
     


//   const handleClick = (event) => {
//       console.log(event.target.value)
//       let input = (numberOne + event.target.value)
//       setNumberOne(input)
//       console.log(input)
//   }

  const reset = (event) => {
      setNumberOne('')
      setNumberTwo('')
      setOperator('')
      setAnswer('')
      setDisplay('')
  }

  const AddOperator = (input) => {
        let x = input.target.innerText
        console.log(x)
        setOperator(x)
        
  }

  const changeCalc = (input) => {
      
    if (!operator){
        if (input === '0'){
            setNumberOne('')
            setAnswer('ERROR! must not start with zero')
        }
        else if (numberOne.length === 0){
            setNumberOne(input)
        } else {
            setNumberOne(numberOne.concat(input))
        }
    } else {
        if ( numberTwo.length === 0){
            setNumberTwo(input)
        } else {
            setNumberTwo(numberTwo.concat(input))
        }
    }
  }

  const posOrNeg = () => {
    numberOne === '' ? console.log('im a string') : setNumberOne(Number(numberOne)*(-1))
  } 

  const modulous = () => {
      numberOne ? setAnswer(numberOne / 100) : setAnswer('must input number')
      setNumberOne('')
  }
  
  const doMath = (e) => {
      e.preventDefault()
      setNumberTwo('')
      setNumberOne('')
      setOperator('')
      setAnswer('')
      if ( operator === 'x' && numberOne && numberTwo){
          setAnswer(parseInt(numberOne)*parseInt(numberTwo))
        } else {
            setAnswer('Error! Refer to instructions')
        }
      if (operator === '-' && numberOne && numberTwo){
          setAnswer(parseInt(numberOne)-parseInt(numberTwo))
        }
      if (operator === '/' && numberOne && numberTwo){
          setAnswer(parseInt(numberOne)/parseInt(numberTwo))
        }
      if (operator === '+' && numberOne && numberTwo){
          setAnswer(parseInt(numberOne)+parseInt(numberTwo))
        }
      
    }
    


    return (
        <div className="container">
            <h1>React Calculator</h1>
            <h5>Instructions:<br />Input Two Values With an Operator in Between Them(Example One).<br /> When using modulous(%) must input value to be used.(Example Two)</h5>

            <h6>Example One: 1 + 1, 234 * 8579, etc...<br /> Example Two: 9 % , 100 %, etc...</h6>
            
            <div className="calc-container" >
                <p>Values: {answer}  </p>
                <div className="answer-box">{numberOne + operator + numberTwo}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={reset}>AC</button>
                    <button className="calc-button calc-button-top" onClick={posOrNeg} >+/-</button>
                    <button className="calc-button calc-button-top" onClick={modulous}>%</button>
                    <button className="calc-button calc-button-op" value='/' onClick={AddOperator}>/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" value='7' onClick={() => {changeCalc('7')}}>7</button>
                    <button className="calc-button" value='8'  onClick={() => {changeCalc('8')}}>8</button>
                    <button className="calc-button" value='9'  onClick={() => {changeCalc('9')}}>9</button>
                    <button className="calc-button calc-button-op" value='*'  onClick={AddOperator}>x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" value='4'  onClick={() => {changeCalc('4')}}>4</button>
                    <button className="calc-button" value='5'  onClick={() => {changeCalc('5')}}>5</button>
                    <button className="calc-button" value='6'  onClick={() => {changeCalc('6')}}>6</button>
                    <button className="calc-button calc-button-op" value='-'  onClick={AddOperator}>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" value='1'  onClick={() => {changeCalc('1')}}>1</button>
                    <button className="calc-button" value='2'  onClick={() => {changeCalc('2')}}>2</button>
                    <button className="calc-button" value='3'  onClick={() => {changeCalc('3')}}>3</button>
                    <button className="calc-button calc-button-op" value='+'onClick={AddOperator} >+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" value='0' onClick={() => {changeCalc('0')}} >0</button>
                    <button className="calc-button" value='.'>.</button>
                    <button className="calc-button calc-button-op" onClick={doMath}>=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator