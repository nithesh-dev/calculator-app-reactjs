import React, { Component } from 'react'
import './Calculator.css' 
import './ActiveButton'
import './InactiveButton'
import InactiveButton from './InactiveButton';
import ActiveButton from './ActiveButton';

export class Calculator extends Component {

    constructor() {
        super();
        this.state = {
            num1: '',
            num2: '',
            result: ''
        }
        this.add = this.add.bind(this)

    }

    handlenum1 = (event) => {
        this.setState({
            num1: event.target.value
        })
    }


    handlenum2 = (event) => {
        this.setState({
            num2: event.target.value
        })
    }
 
    add = (event) => {
        this.setState({
            result: this.state.num1 + " + " + this.state.num2 + " = " + (parseInt(this.state.num1) + parseInt(this.state.num2))
        })
    }

    subtract = (event) => {
        this.setState({
            result: this.state.num1 + " - " + this.state.num2 + " = " + (parseInt(this.state.num1) - parseInt(this.state.num2))
        })
    }

    multiply = (event) => {
        this.setState({
            result: this.state.num1 + " * " + this.state.num2 + " = " + (parseInt(this.state.num1) * parseInt(this.state.num2))
        })
    }

    divide = (event) => {
        this.setState({
            result: this.state.num1 + " / " + this.state.num2 + " = " + (parseInt(this.state.num1) / parseInt(this.state.num2))
        })
    }

    

    

    render() {

        var checkInputField;
       
            if(this.state.num1 === '' || this.state.num2 === '') {
                checkInputField = <InactiveButton />
            } else {
                checkInputField =  <ActiveButton calculator={this}/>
            }

        return (
            <div className="outer-box">
                <div align="left">
                    Calculator
                    <br /> <br />
                </div>
                Input 1: <input type="number" value={this.state.num1} onChange={this.handlenum1} placeholder="Enter number 1" />
                <br /> <br />
                Input 2: <input type="number" value={this.state.num2} onChange={this.handlenum2} placeholder="Enter number 2" />
                <br /> <br />
                {checkInputField}
                <br /> <br />
                Result: <input type="text" value={this.state.result} placeholder="Your result" readOnly />
            </div>
        )
    }
}

export default Calculator

