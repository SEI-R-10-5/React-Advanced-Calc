import React, { useState, useEffect } from 'react'

const Calculator = props => {
    // Declare state variables
    const [temp, setTemp] = useState('');

    const [firstNum, setFirstNum] = useState('');
    const [operator, setOperator] = useState('');
    const [secondNum, setSecondNum] = useState('');
    const [answer, setAnswer] = useState('');

    const [showResult, setShowResult] = useState(false);

    const handleTempChange = (input) => {
        setTemp((prevState) => (prevState + input));
    }

    const clearTemp = () => {
        setTemp('');
    }

    const clearAll = () => {
        setAnswer('');
        setOperator('');
        setFirstNum('');
        setSecondNum('');
        setTemp('');
    }

    const handleSubmit = (value, setFunction) => {
        setFunction(`${value}`);
    }

    const calculate = (stringNumOne, stringNumTwo, op) => {
        let floatNumOne = parseFloat(stringNumOne);
        let floatNumTwo = parseFloat(stringNumTwo);
        switch (op){
            case ' + ':
                return `${floatNumOne + floatNumTwo}`
            case ' - ':
                return `${floatNumOne - floatNumTwo}`
            case ' / ':
                return `${floatNumOne / floatNumTwo}`
            case ' x ':
                return `${floatNumOne * floatNumTwo}`
            default:
                console.log('Big Error')

        }
    }

    useEffect(() => {
        
        if (showResult){
            let ans = calculate(firstNum, secondNum, operator)
            handleSubmit(ans, setAnswer)
            handleTempChange(ans)
            setShowResult(false)
        }
    })

    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: {firstNum}{operator}{secondNum}</p>
                <div className="answer-box">{temp}</div>
                <div className="calc-row">
                    <button 
                        className="calc-button calc-button-top"
                        onClick={() => {
                            clearAll()
                        }}
                    >AC
                    </button>
                    <button 
                        className="calc-button calc-button-top"
                        onClick={() => {
                            setTemp(`${-1*(temp)}`)
                        }}
                    >+/-
                    </button>
                    <button className="calc-button calc-button-top">%</button>
                    <button 
                        className="calc-button calc-button-op"
                        onClick={() => {
                            handleSubmit(temp, setFirstNum)
                            handleSubmit(' / ', setOperator)
                            clearTemp()
                            return 
                        }}
                    > /
                    </button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={() => handleTempChange(7, setTemp)}>7</button>
                    <button className="calc-button" onClick={() => handleTempChange(8, setTemp)}>8</button>
                    <button className="calc-button" onClick={() => handleTempChange(9, setTemp)}>9</button>
                    <button 
                        className="calc-button calc-button-op" 
                        onClick={() => {
                            handleSubmit(temp, setFirstNum)
                            handleSubmit(' x ', setOperator)
                            clearTemp()
                            return 
                        }}
                    > x
                    </button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={() => handleTempChange(4, setTemp)}>4</button>
                    <button className="calc-button" onClick={() => handleTempChange(5, setTemp)}>5</button>
                    <button className="calc-button" onClick={() => handleTempChange(6, setTemp)}>6</button>
                    <button 
                        className="calc-button calc-button-op"
                        onClick={() => {
                            handleSubmit(temp, setFirstNum)
                            handleSubmit(' - ', setOperator)
                            clearTemp()
                            return 
                        }}
                    >-
                    </button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={() => handleTempChange(1, setTemp)}>1</button>
                    <button className="calc-button" onClick={() => handleTempChange(2, setTemp)}>2</button>
                    <button className="calc-button" onClick={() => handleTempChange(3, setTemp)}>3</button>
                    <button 
                        className="calc-button calc-button-op"
                        onClick={() => {
                            handleSubmit(temp, setFirstNum)
                            handleSubmit(' + ', setOperator)
                            clearTemp()
                            return 
                        }}
                    >+
                    </button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick={() => handleTempChange(0, setTemp)}>0</button>
                    <button className="calc-button" 
                        onClick={() => {
                            if (!temp.includes('.')) {
                                handleTempChange('.', setTemp)
                            }
                        }}
                    >.</button>
                    <button className="calc-button calc-button-op"
                        onClick={() => {
                            handleSubmit(temp.valueOf(), setSecondNum)
                            clearTemp()
                            setShowResult(true)
                            return
                        }}
                    >=
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Calculator