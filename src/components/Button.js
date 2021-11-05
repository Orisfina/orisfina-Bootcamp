import React from 'react'
import { Link } from 'react-router-dom'

const Button = (props) => {
    const {text, cName,link} = props
    return (
        <>
            <Link className={cName} to={link}>{text}</Link>
        </>
    )
}

export default Button
