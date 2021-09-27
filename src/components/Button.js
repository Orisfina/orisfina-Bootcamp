import React from 'react'

const Button = (props) => {
    const {text, name, age, color} = props
    return (
        <div>
            <button>{text}</button>
        </div>
    )
}

export default Button
