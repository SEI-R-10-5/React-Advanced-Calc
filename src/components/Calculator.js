import React, { useState, useEffect} from 'react'

const Calculator = () => {
    const [operator, setOperator] = useState(null)
    const [error, setError] = useState('')
    const [numbers, setNumbers] = useState({'0':'','1':''})
    const [total, setTotal] = useState('')

    useEffect(()=> {
        }, [setTotal, setError])

    
    const enterNumber = (number) => {
        let display = total+number
        setTotal(display)
        if (!operator){
            let initialNumber = numbers['0']
            return setNumbers({...numbers, '0':initialNumber+=number})
            
        }
        let secondNumber = numbers['1']
        return setNumbers({...numbers, '1':secondNumber+=number})
    }
 
    

    
    const convertNum = () => {
        if (!operator){
            let number = parseFloat(numbers['0'])
            if (number > 0){
                setNumbers({...numbers, '0':`-${number}`})
                return setTotal(`-${number}`)
            }
            setNumbers({...numbers, '0':`${number*-1}`})
            return setTotal(`${number*-1}`)
        }
        if (!numbers['1']){
            return
        }
        let number = parseFloat(numbers['1'])
        let splitTotal = total.split(operator)
        let secondNumber = splitTotal[splitTotal.length-1]
        if (number > 0){
            secondNumber = `-${number}`
            splitTotal[splitTotal.length-1] = secondNumber
            console.log(splitTotal)
            setNumbers({...numbers, '1':`-${number}`})
            return setTotal(splitTotal.join(operator))
        }
        setNumbers({...numbers, '1':`${number*-1}`})
        return setTotal(`${number*-1}`)
    }

    /**
     * taking the second number that we want to convert
     * we already have an operator so we want to split it there so there's an array
     * we know the first number is the first, and the second is the last in the array
     * grab the second number, assign it to a negative (see line 44)
     * joining it back at the operator
     * 
     * now I need to do the opposit to return it as a positive
     * this can be achieved with a helper function
     */

    const calculate = () => {
        if (!numbers[0]||!numbers[1]||!operator){
            console.log('error hits')
            setError(...error, 'Oops, something went wrong. Hit AC or refresh the page and try again.')
        } else{
        let result = eval(`${numbers['0']} ${operator} ${numbers['1']}`)
        setTotal(result)
        }
    }


    const handleOperator = (symbol) => {
       if (operator) {
           return
       }
        let display = total+symbol
        setTotal(display)
        setOperator(symbol)
    }

    const clearIt = () => {
        setNumbers({'0':'','1':''})
        setOperator(null)
        setTotal('')    
    }


console.log(numbers, operator)
    return (

        //I kind of didn't know what to do at first so I just went through and broke up each button
        <div className="container">
            <h1>React Calculator</h1>
            <h4>{error}</h4>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">{total}</div>
                <div className="calc-row">
                    <button
                        onClick = {clearIt}
                        //      AC button
                        className="calc-button calc-button-top"
                    >AC
                    </button>
                    <button
                        onClick ={convertNum}
                        //      +/- button
                        className="calc-button calc-button-top"
                    >+/-
                    </button>
                    <button
                        onClick={()=>handleOperator('%')}
                        //      % button
                        className="calc-button calc-button-top"
                    >%
                    </button>
                    <button
                        onClick={()=>handleOperator('/')}
                        //      / button
                        className="calc-button calc-button-op"
                    >/
                    </button>
                </div>
                <div className="calc-row">
                    <button
                        onClick={()=>enterNumber(7)}
                        //      7 button
                        className="calc-button"
                        value='7'
                    >7</button>
                    <button
                        onClick={()=>enterNumber(8)}
                        //      8 button
                        className="calc-button"
                        value='8'
                    >8</button>
                    <button
                        onClick={()=>enterNumber(9)}
                        //      9 button
                        className="calc-button"
                        value='9'
                    >9</button>
                    <button
                        onClick={()=>handleOperator('*')}
                        //      x button
                        className="calc-button calc-button-op"
                    >x</button>
                </div>
                <div className="calc-row">
                    <button
                        onClick={()=>enterNumber(4)}
                        className="calc-button"
                        value="4"
                    >4</button>
                    <button
                        onClick={()=>enterNumber(5)}
                        className="calc-button"
                        value="5"
                    >5</button>
                    <button
                        onClick={()=>enterNumber(6)}
                        className="calc-button"
                        value="6"
                    >6</button>
                    <button
                        onClick={()=>handleOperator('-')}
                        className="calc-button calc-button-op"
                    >-</button>
                </div>
                <div className="calc-row">
                    <button
                        onClick={()=>enterNumber(1)}
                        className="calc-button"
                        value="1"
                    >1</button>
                    <button
                        onClick={()=>enterNumber(2)}
                        className="calc-button"
                        value="2"
                    >2</button>
                    <button
                        onClick={()=>enterNumber(3)}
                        className="calc-button"
                        value="3"
                    >3</button>
                    <button
                        onClick={()=>handleOperator('+')}
                        className="calc-button calc-button-op"
                    >+</button>
                </div>
                <div className="calc-row">
                    <button
                        onClick={()=>enterNumber(0)}
                        className="calc-button width-2"
                        value="0"
                    >0</button>
                    <button
                        onClick={()=>enterNumber('.')}
                        className="calc-button"
                    >.</button>
                    <button
                        // onClick={calculate}
                        onClick={calculate}
                        className="calc-button calc-button-op"
                    >=</button>
                </div>
            </div>
        </div>
    )
}
export default Calculator