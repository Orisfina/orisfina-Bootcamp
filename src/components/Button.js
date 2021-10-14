import React from 'react'

const Button = (props) => {
    const {text, cName} = props
    return (
        <div>
            <button className={cName}>{text}</button>
        </div>
    )
}

export default Button
