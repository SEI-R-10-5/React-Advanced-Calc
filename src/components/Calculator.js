import React, { useState } from 'react'

const Calculator = props => {
    // Declare state variables
    const [operation, setOp] = useState('')
    const [valueA, setValueA]= useState(0)
    const [valueB, setValueB]= useState(0)
    const [result, setResult]= useState(0)
    

    const handleClick=(e)=>{
        if(result === 0){
            setResult(e.target.innerHTML)
            setValueB(parseInt(e.target.innerHTML))
            return
        }
        setResult(result+e.target.innerHTML)
        setValueB(parseInt(result+e.target.innerHTML))
        
    }

    const handleOperation =(e)=>{
    if(operation === ''){
        setValueA(parseInt(result))
        setOp(e.target.innerHTML)
        setResult(0)
    }else{
        handleResult()
        setOp(e.target.innerHTML)
        setValueA(parseInt(result))
        
    }
      
        
    }

    const handleClear=()=>{
        setResult(0)
        setValueA(0)
        setValueB(0)
        setOp('')
        
    }
    
    

    const handleResult =()=>{
        
         let firstV = valueA
        let secondV = valueB
        switch(operation){
            case '+' :
                const newResult = firstV + secondV
                setResult(newResult)
            break;
            case '-':
                const newResult1 = firstV - secondV
                setResult(newResult1)
                break;
            case 'x':
                const newResult2 = firstV*secondV
                setResult(newResult2)
                break;
            case '/':
                const newResult3 = firstV/secondV
                setResult(newResult3)
                break
            case '%':
                const newResult4= secondV*(firstV/100)
                setResult(newResult4)
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
                <div className="answer-box">{result}</div>
                <div className="calc-row">
                    <button onClick={handleClear} className="calc-button calc-button-top">AC</button>
                    <button onClick={handleOperation} className="calc-button calc-button-top">+/-</button>
                    <button onClick={handleOperation} className="calc-button calc-button-top">%</button>
                    <button onClick={handleOperation} className="calc-button calc-button-op">/</button>
                </div>
                <div className="calc-row">
                    <button onClick={handleClick} className="calc-button">7</button>
                    <button onClick={handleClick} className="calc-button">8</button>
                    <button onClick={handleClick} className="calc-button">9</button>
                    <button onClick={handleOperation} className="calc-button calc-button-op">x</button>
                </div>
                <div className="calc-row">
                    <button onClick={handleClick} className="calc-button">4</button>
                    <button onClick={handleClick} className="calc-button">5</button>
                    <button onClick={handleClick} className="calc-button">6</button>
                    <button onClick={handleOperation} className="calc-button calc-button-op">-</button>
                </div>
                <div className="calc-row">
                    <button onClick={handleClick} className="calc-button">1</button>
                    <button onClick={handleClick} className="calc-button">2</button>
                    <button onClick={handleClick} className="calc-button">3</button>
                    <button onClick={handleOperation} className="calc-button calc-button-op">+</button>
                </div>
                <div className="calc-row">
                    <button onClick={handleClick} className="calc-button width-2">0</button>
                    <button onClick={handleClick} className="calc-button">.</button>
                    <button onClick={handleResult} className="calc-button calc-button-op">=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator