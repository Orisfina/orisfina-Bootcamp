import React from 'react'
import { Link } from 'react-router-dom'

const Button = (props) => {
    const {text, cName} = props
    return (
        <div>
            <Link className={cName} to='/register'>{text}</Link>
        </div>
    )
}

export default Button
