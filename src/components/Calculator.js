import React, { useState } from 'react'

// A calculator based on eval() function:
const Calculator = props => {

    const [display, setDisplay] = useState("")
    const rowsWithButtonValues = [["AC", "+/-", "%", "/"], ["7", "8", "9", "x"], ["4", "5", "6", "-"], ["1", "2", "3", "+"], [["calc-button width-2", "0"], ["calc-button", "."], ["calc-button calc-button-op", "="]]]
    // unique operators cannot be added to a string expression passed to eval(). They'll need special click handlers.
    const uniqueOperators = ["AC", "+/-", "="]
    const operators = [...uniqueOperators, "%", "/", "x", "-", "+"]
    
    const buttonClick = (buttonValue) => {
        const valueIsAnOperator = operators.includes(buttonValue)
        const displayIsEmpty = display.length === 0 
        const lastNumberIsAnOperator = operators.includes(display[display.length-1])

        console.log(valueIsAnOperator, displayIsEmpty, lastNumberIsAnOperator)
        // User can't start with 0
        if (buttonValue === "0" && displayIsEmpty) 
            return
        // User can't enter an operator if display is empty or the last input was an operator
        if (valueIsAnOperator && (displayIsEmpty || lastNumberIsAnOperator)) 
            return 
        setDisplay(display + buttonValue)
    }

    const uniqueOps = (operator) => {  
        switch (operator) {
            case "AC":
                setDisplay("")
                break

            // 
            case "+/-":
                if (display.length === 0) 
                    break
                const lastPosIndex = display.lastIndexOf("+") 
                const lastNegIndex = display.lastIndexOf("-")
                if (lastPosIndex === lastNegIndex) {
                    setDisplay("-" + display)
                    console.log("no results found")
                    break
                } 
                // This is about to get dramatic
                const targetLocation = display
                const specialOperator = lastPosIndex > lastNegIndex ? {target:"+", assassin: "-"} : {target:"-", assassin: "+"}
                const infiltrationPrepared = (prepareKillingGround) => prepareKillingGround.split("").reverse().join("")
                const operationSuccess = infiltrationPrepared(targetLocation).replace(specialOperator.target, specialOperator.assassin).split("").reverse().join("")
                setDisplay(operationSuccess) 
                // The + and - have swapped places. 
                break // roger roger
            case "=":
                setDisplay(eval(display))
            default:
                return 
        }
    }

    // Hi Adam || Michael. I've got such a spicy one-liner for you. <3 
    return <div className="container"><h1>React Calculator</h1><div className="calc-container"><p>{display}</p><div className="answer-box">TBD</div>{rowsWithButtonValues.map((row, index) => (<div className="calc-row">  {row.map((button, nestedIndex) => (index !== 4 ?<button key={`${index}${nestedIndex}`} onClick={uniqueOperators.includes(button) ? ()=> uniqueOps(button) : ()=>buttonClick(button)} className={nestedIndex !== 3 ? "calc-button" : "calc-button calc-button-op"}>{button}</button> : <button key={`${index}${nestedIndex}`} onClick={uniqueOperators.includes(button[1]) ? ()=> uniqueOps(button[1]) : ()=>buttonClick(button[1])} className={button[0]}>{button[1]}</button>))}</div>))}</div></div>
            
}

export default Calculator


