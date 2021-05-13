import React from 'react'
import './Calculator.css'

export default function ActiveButton(props) {
    
    return (
        <div>
            <button className="button" onClick={props.calculator.add}>+</button> <button className="button" onClick={props.calculator.subtract}>-</button> <button className="button" onClick={props.calculator.multiply}>*</button> <button className="button" onClick={props.calculator.divide}>/</button> 
        </div>
    )
}
