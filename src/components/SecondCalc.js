import React, {useState} from 'react'

const setError
const setNumbers
const setNumber
const setOp


const handleNumber = (e) => {
    if (e.target.value !== 0 || e.target.value !== '') {
        setNumber(number + e.target.value)
    }
}

const handleOperators = (e) => {
    if (op && number === '' ) {
        setError('Error, enter an umber')
    } else if (number ==='' && e.target.value === '-'){
        setError('')
        setNumber(e.target.value)
    }else{
        setNumbers(number)
        setOp(e.target.value)
        setNumber('')
        setError('')
    }
}

const handleSubmit = (event) => {
    setNumber(event.target.value)
}

