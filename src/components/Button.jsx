import React from 'react'
import './Button.css'
const Button = ({text, color, textColor}) => {
    return (
        <button style={{backgroundColor:color, color:textColor}}>
            {text}
        </button>
    )
}

export default Button
