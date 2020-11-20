import React, { useState } from 'react'

const Calculator = (props) => {
   // Declare state variables
   const [equation, setEquation] = useState('')

   // operands is an array of { action, value }
   // the first number added should become the first entry, always as { '+', value }
   // when opOkay === false, we can only take in the next number
   // when opOKay === true, we can take an operator.
   // hitting '='

   const [value, setValue] = useState('') // this is used for display only
   const [minus, setMinus] = useState(false)
   const [terms, setTerms] = useState([])
   const [operator, setOperator] = useState('+')
   const [operand, setOperand] = useState(0)
   const [decimal, setDecimal] = useState(0)

   const handleNumber = (e) => {
      // I can only accept a number if I already have an operator...
      if (!operator) {
         console.log(
            'Please select an operator before entering the next operand.'
         )
         return
      }

      const newDigit = Number(e.target.value)
      if (newDigit === 0 && operand === 0) return

console.log ('dec', decimal, (10**decimal))
      let newValue = minus ? -1 : 1
      if ( decimal === 0 ) {
         newValue = newValue * ( operand * 10 + newDigit)
      }
      else {
         newValue = newValue * ( operand + ( newDigit / ( 10**decimal ) ) )
         setDecimal(decimal + 1)
      }

      setOperand(newValue)
      setValue(newValue)
      setMinus(false)
   }

   const resolve = () => {
      let newTerms = [...terms, { operator: operator, operand: operand } ]
      const res = newTerms.reduce( (acc, e) => {
         switch ( e.operator ) {
            case '+':
               return acc + e.operand
            
            case '-':
               return acc - e.operand

            case '*':
               return acc * e.operand

            case '/':
               return acc / e.operand

            case '%':
               return acc % e.operand
            default:
         }
      },0)
      setValue(res)

      setTerms([...newTerms])

      updateDisplay()
   }

   
   const updateDisplay = (newOp='' ) => {
      let res = ''
      if ( !newOp )
         newOp = operator
      let newTerms = [...terms, { operator: newOp, operand: operand } ]
      newTerms.forEach ( (e,i) => {
         if ( i===0 )
            res += `${e.operand} `
         else if ( e.operand === 0 )
            res += `${e.operator}`
         else
            res += `${e.operator} ${e.operand} `
      })
      setEquation( res )
   }
   
   const clearOps = () => {
      setMinus(false)
      setOperator('')
      setOperand(0)
      setDecimal(0)
   }

   const handleClear = () => {
      clearOps()
      setValue('')
      setMinus(false)
      setTerms([])
      setOperator('+')
      setEquation('')
   }

   const handleOperator = (e) => {
      const newOp = e.target.value
      // if we have an operator,
      if (operator) {
         // ...but we don't have an operand yet, we can accept a minus to indicate a negative number
         if (newOp === '-' && !minus && operand === 0) {
            setMinus(true)
         } else if (operand === 0) {
            // if we have an operator but no operand, we don't accept it
            console.log('Only one operator at a time, sorry!')
         } else {
            // we have an operator AND an operand, process them and start the new operator.
            // this is how the calculater on an iPhone works, as well.
            resolve()
            setOperator(newOp)
            updateDisplay(newOp)
            setOperand(0)
            setDecimal(0)
         }
      } else {
         // we don't have an operator, the last action must have been an =, so just populate our operator
         updateDisplay(newOp)
         setOperator(newOp)
         setValue('')
         setDecimal(0)
      }

   }

   const handleProcess = () => {

      // we can't process a result if we have a hanging operator.
      if ( operand === 0 ) {
         if ( operator ) 
            console.log('We need two values and an operator to produce a result.')
         else
            return
      }
      console.log ( 'handleProcess: ', operand, operator, terms)
      resolve()
      clearOps()
   }

   const handleSwapSign = () => {
      console.log('swap')
      if ( operand !== 0 ) {
         setValue( operand > 0 ? '-' + operand : operand * -1)
         setOperand( operand * -1 )
      }
   }

   const handleDecimal = () => {
      if ( decimal ) 
         return
      setDecimal( decimal + 1)
      setValue( operand + '.')
   }

   return (
      <div className="container">
         <h1>React Calculator</h1>
         <div className="calc-container">
            <p>
               Equation:
               <br /> {equation}{' '}
            </p>
            <div className="answer-box">{value}</div>
            <div className="calc-row">
               <button
                  className="calc-button calc-button-top"
                  onClick={handleClear}
               >
                  AC
               </button>
               <button
                  className="calc-button calc-button-top"
                  value="+/-"
                  onClick={handleSwapSign}
               >
                  +/-
               </button>
               <button
                  className="calc-button calc-button-top"
                  value="%"
                  onClick={handleOperator}
               >
                  %
               </button>
               <button
                  className="calc-button calc-button-op"
                  value="/"
                  onClick={handleOperator}
               >
                  /
               </button>
            </div>
            <div className="calc-row">
               <button className="calc-button" value="7" onClick={handleNumber}>
                  7
               </button>
               <button className="calc-button" value="8" onClick={handleNumber}>
                  8
               </button>
               <button className="calc-button" value="9" onClick={handleNumber}>
                  9
               </button>
               <button
                  className="calc-button calc-button-op"
                  value="*"
                  onClick={handleOperator}
               >
                  x
               </button>
            </div>
            <div className="calc-row">
               <button className="calc-button" value="4" onClick={handleNumber}>
                  4
               </button>
               <button className="calc-button" value="5" onClick={handleNumber}>
                  5
               </button>
               <button className="calc-button" value="6" onClick={handleNumber}>
                  6
               </button>
               <button
                  className="calc-button calc-button-op"
                  value="-"
                  onClick={handleOperator}
               >
                  -
               </button>
            </div>
            <div className="calc-row">
               <button className="calc-button" value="1" onClick={handleNumber}>
                  1
               </button>
               <button className="calc-button" value="2" onClick={handleNumber}>
                  2
               </button>
               <button className="calc-button" value="3" onClick={handleNumber}>
                  3
               </button>
               <button
                  className="calc-button calc-button-op"
                  value="+"
                  onClick={handleOperator}
               >
                  +
               </button>
            </div>
            <div className="calc-row">
               <button
                  className="calc-button width-2"
                  value="0"
                  onClick={handleNumber}
               >
                  0
               </button>
               <button className="calc-button" onClick={handleDecimal}>.</button>
               <button
                  className="calc-button calc-button-op"
                  onClick={handleProcess}
               >
                  =
               </button>
            </div>
         </div>
      </div>
   )
}

export default Calculator
