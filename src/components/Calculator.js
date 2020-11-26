import React, { Component } from 'react';


class Calculator extends Component {
    constructor() {
        super()
        this.state = {
            num1: null,
            num2: null,
            operator: '',
            results: ''
        }   
    }

    setNum = (e) => {   
        if(this.state.num1===null){
            this.setState({num1: parseInt(e.target.value)});
        }else{
            this.setState({num2:parseInt(e.target.value)});
        }
       
    }

    setOperator = (e) =>{
        this.setState({operator: e.target.value});
    }

    clear = ()=>{        
        this.setState({
            results:'',
            num1: null,
            num2: null,
            operator:''
        }) 
    }

    calcOperator = () => {
        switch (this.state.operator) {
            case '+':
                this.setState({
                    results: parseInt(this.state.num1)+parseInt(this.state.num2),
                    num1:null,
                    num2: null,
                    operator:''
                })   
            break;
            case '-':
                this.setState({
                    results: parseInt(this.state.num1)-parseInt(this.state.num2),
                    num1:null,
                    num2: null,
                    operator:''
                })
            break;
            case 'x':
                this.setState({
                    results: parseInt(this.state.num1)*parseInt(this.state.num2),
                    num1:null,
                    num2: null,
                    operator:''
                })
            break;
            case '/':
                this.setState({
                    results: parseInt(this.state.num1)/parseInt(this.state.num2),
                    num1:null,
                    num2: null,
                    operator:''
                }) 
            break;
            default:
            break;
        }
    }

    render() {
        return (
            <div className="container">
                <h1>React Calculator</h1> 
                <div className="calc-container">
                    <p>{this.state.num1!==null && this.state.num1 } 
                       {this.state.operator!=='' && this.state.operator} 
                       {this.state.num2!==null && this.state.num2}</p>
                    <div className="answer-box">{this.state.results}</div>
                    <div className="calc-row">
                        <button className="calc-button calc-button-top"  onClick={()=> this.clear()}>AC</button>
                        <button className="calc-button calc-button-top">+/-</button>
                        <button className="calc-button calc-button-top" value="%">%</button>
                        <button className="calc-button calc-button-op" value="/" onClick={(e)=> this.setOperator(e)}>/</button> 
                    </div>
                    <div className="calc-row">
                        <button className="calc-button" value="7" onClick={(e)=> this.setNum(e)}>7</button>
                        <button className="calc-button" value="8" onClick={(e)=> this.setNum(e)}>8</button>
                        <button className="calc-button" value="9" onClick={(e)=> this.setNum(e)}>9</button>
                        <button className="calc-button calc-button-op" value="x" onClick={(e)=> this.setOperator(e)} >x</button>
                    </div>
                    <div className="calc-row">
                        <button className="calc-button" value="4" onClick={(e)=> this.setNum(e)}>4</button>
                        <button className="calc-button" value="5" onClick={(e)=> this.setNum(e)}>5</button>
                        <button className="calc-button" value="6" onClick={(e)=> this.setNum(e)}>6</button>
                        <button className="calc-button calc-button-op" value="-" onClick={(e)=> this.setOperator(e)}>-</button>
                    </div>
                    <div className="calc-row">
                        <button className="calc-button" value="1" onClick={(e)=> this.setNum(e)} >1</button>
                        <button className="calc-button" value="2" onClick={(e)=> this.setNum(e)} >2</button>
                        <button className="calc-button" value="3" onClick={(e)=> this.setNum(e)} >3</button>
                        <button className="calc-button calc-button-op" value="+" onClick={(e)=> this.setOperator(e)}>+</button>
                    </div>
                    <div className="calc-row">
                        <button className="calc-button width-2" value="0" onClick={(e)=> this.setNum(e)} >0</button>
                        <button className="calc-button">.</button>
                        <button className="calc-button calc-button-op" onClick={(e)=> this.calcOperator()}>=</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Calculator