import React from 'react'
import './Calculator.css'

function InactiveButton() {
    return (
        <div>
            <button className="button-inactive" disabled>+</button> <button className="button-inactive" disabled>-</button> <button className="button-inactive" disabled>*</button> <button className="button-inactive" disabled>/</button> 
        </div>
    )
}

export default InactiveButton
