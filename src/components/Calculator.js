import React, { useState } from 'react';

const Calculator = (props) => {
  // Declare state variables
  const [numbers, setNumbers] = useState('');
  const [number, setNumber] = useState('');
  const [ans, setAns] = useState('');
  const [err, setErr] = useState('');
  const [op, setOp] = useState('');

  // Set clear
  const handleClear = () => {
    setNumbers('');
    setNumber('');
    setAns('');
    setOp('');
    setErr('');
    console.log('Cleared');
  };

  const handleNumber = (e) => {
    // if press is not 0 or number is not empty
    if (e.target.value !== 0 || number !== '') {
      // set number to pressed
      setNumber(number + e.target.value);
    }
  };

  const handleOperator = (e) => {
    // if operator is pressed w/o current num return error
    if (op && number === '') {
      setErr('AHT');
      //if no number and our events value is equal to minus then we set error msg to empty string and set number to e.t.v
    } else if (number === '' && e.target.value === '-') {
      setErr('');
      setNumber(e.target.value);
    } else {
      // else setNumbers to number, setOp to target, setErr to empty string, setNumber''
      setNumbers(number);
      setOp(e.target.value);
      setErr('');
      setNumber('');
    }
  };

  const handleCalculate = (e) => {
    //  prevent default
    e.preventDefault();
    //  if numbers does not exist, or op does nt exist then set Err 'pls enter clc'
    if (number === '' || op === '') {
      setErr('AHT');
      // elseif number does not exist, set Err 'pls enter 2nd number
    } else if (number === '') {
      setErr('AHT');
      // else holding nested else ifs
    } else {
      let tempAns = '';
      // let varto hold tempAns
      // //  if not op or op === + then setAns = Number pass in numbers + Number pass in number and stringfy
      if (!op || op === '+') {
        tempAns = (Number(numbers) + Number(number)).toString();
        // else if op
      } else if (op === '-') {
        tempAns = (Number(numbers) - Number(number)).toString();
        // else if op
      } else if (op === '*') {
        tempAns = (Number(numbers) * Number(number)).toString();
        // else if op
      } else if (op === '/') {
        tempAns = (Number(numbers) / Number(number)).toString();
      }
      // setAns(tempVar) and setErr ''
      setAns(tempAns);
      setErr('');
    }
  };

  return (
    <div className='container'>
      <h1>React Calculator</h1>
      <div className='calc-container'>
        <p
          className='inputVal'
          type='text'
          placeholder='enter an amount'
          value={number}
          onChange={(e) => setNumbers(e.target.value)}
        >
          {err}
          {numbers || number}
          {op}
          {op ? number : ''}
        </p>
        <div className='answer-box'>{ans}</div>
        <div className='calc-row'>
          <button
            className='calc-button calc-button-top'
            onClick={handleClear}
            onSubmit={handleClear}
          >
            AC
          </button>
          <button
            className='calc-button calc-button-top'
            value='-'
            onClick={handleOperator}
          >
            +/-
          </button>
          <button
            className='calc-button calc-button-top'
            value='%'
            onClick={handleOperator}
          >
            %
          </button>
          <button
            className='calc-button calc-button-op'
            value='/'
            onClick={handleOperator}
          >
            /
          </button>
        </div>
        <div className='calc-row'>
          <button
            className='calc-button'
            value='7'
            onChange={(e) => setNumbers(e.target.value)}
            onClick={handleNumber}
          >
            7
          </button>
          <button
            className='calc-button'
            value='8'
            onChange={(e) => setNumbers(e.target.value)}
            onClick={handleNumber}
          >
            8
          </button>
          <button
            className='calc-button'
            value='9'
            onChange={(e) => setNumbers(e.target.value)}
            onClick={handleNumber}
          >
            9
          </button>
          <button
            className='calc-button calc-button-op'
            value='*'
            onClick={handleOperator}
          >
            x
          </button>
        </div>
        <div className='calc-row'>
          <button
            className='calc-button'
            value='4'
            onChange={(e) => setNumbers(e.target.value)}
            onClick={handleNumber}
          >
            4
          </button>
          <button
            className='calc-button'
            value='5'
            onChange={(e) => setNumbers(e.target.value)}
            onClick={handleNumber}
          >
            5
          </button>
          <button
            className='calc-button'
            value='6'
            onChange={(e) => setNumbers(e.target.value)}
            onClick={handleNumber}
          >
            6
          </button>
          <button className='calc-button calc-button-op'>-</button>
        </div>
        <div className='calc-row'>
          <button
            className='calc-button'
            value='1'
            onChange={(e) => setNumbers(e.target.value)}
            onClick={handleNumber}
          >
            1
          </button>
          <button
            className='calc-button'
            value='2'
            onChange={(e) => setNumbers(e.target.value)}
            onClick={handleNumber}
          >
            2
          </button>
          <button
            className='calc-button'
            value='3'
            onChange={(e) => setNumbers(e.target.value)}
            onClick={handleNumber}
          >
            3
          </button>
          <button
            className='calc-button calc-button-op'
            value='+'
            // onChange={(e) => addNumber(e.target.value)}
            onClick={handleOperator}
          >
            +
          </button>
        </div>
        <div className='calc-row'>
          <button
            className='calc-button width-2'
            value='0'
            onClick={handleNumber}
          >
            0
          </button>
          <button className='calc-button' value='.' onClick={handleNumber}>
            .
          </button>
          <button
            className='calc-button calc-button-op'
            value='return ='
            onClick={handleCalculate}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
