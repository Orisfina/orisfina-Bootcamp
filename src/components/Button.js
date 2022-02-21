import React from 'react'
import { Link } from 'react-router-dom'

const Button = (props) => {
    const {cName,link, children} = props
    return (
        <>
            <Link className={cName} to={link}>{children}</Link>
        </>
    )
}

export default Button
