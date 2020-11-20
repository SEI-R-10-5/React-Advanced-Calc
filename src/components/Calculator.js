import React, { useState } from 'react'

const Calculator = props => {


// handleNumberDisplay = number => {
    
// }


    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">TBD</div>
                <div className="calc-row">
                    <button 
                    //      AC button
                        className="calc-button calc-button-top"
                        onClick={
                            console.log(`AC button clicked`)
                        }
                    >AC
                    </button>
                    <button 
                    //      +/- button
                        className="calc-button calc-button-top"
                        // onClick={}
                    >+/-
                    </button>
                    <button 
                    //      % button
                        className="calc-button calc-button-top"
                        // onClick={}
                    >%
                    </button>
                    <button 
                    //      / button
                    className="calc-button calc-button-op"
                    // onClick={}
                    >/
                    </button>
                </div>
                <div className="calc-row">
                    <button 
                    //      7 button
                    className="calc-button"
                    // onClick={}
                    >7</button>
                    <button 
                    //      8 button
                    className="calc-button"
                    // onClick={}
                    >8</button>
                    <button 
                    //      9 button
                    className="calc-button"
                    // onClick={}
                    >9</button>
                    <button 
                    //      x button
                    className="calc-button calc-button-op"
                    onClick={
                        console.log(`button clicked`)
                    }
                    >x</button>
                </div>
                <div className="calc-row">
                    <button 
                        className="calc-button"
                        onClick={
                            console.log(`button clicked`)
                        }    
                    >4</button>
                    <button 
                    className="calc-button"
                    onClick={
                        console.log(`button clicked`)
                    }
                    >5</button>
                    <button 
                        className="calc-button"
                        value="6"
                        onClick={
                            console.log(`${value} button clicked`)
                            
                        }
                    >6</button>
                    <button 
                        className="calc-button calc-button-op"
                        onClick={
                            console.log(`button clicked`)
                        }
                    >-</button>
                </div>
                <div className="calc-row">
                    <button 
                        className="calc-button"
                        onClick={
                            console.log(`button clicked`)
                        }    
                    >1</button>
                    <button 
                        className="calc-button"
                        onClick={
                            console.log(`button clicked`)
                        }    
                    >2</button>
                    <button 
                        className="calc-button"
                        onClick={
                            console.log(`button clicked`)
                        }    
                    >3</button>
                    <button 
                        className="calc-button calc-button-op"
                        onClick={
                            console.log(`button clicked`)
                        }    
                    >+</button>
                </div>
                <div className="calc-row">
                    <button 
                        className="calc-button width-2"
                        onClick={
                            console.log(`button clicked`)
                        }    
                    >0</button>
                    <button 
                        className="calc-button"
                        onClick={
                            console.log(`button clicked`)
                        }
                    >.</button>
                    <button 
                        className="calc-button calc-button-op"
                        onClick={
                            console.log(`button clicked`)
                        }    
                    >=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator