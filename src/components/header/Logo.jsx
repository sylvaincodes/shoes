import React from 'react'
import { Link } from 'react-router-dom'

export const Logo = () => {
    return (
        <div className="logo">
            <Link to="/">
                <strong>sh</strong>
                <strong>oes.</strong>
                </Link>
        </div>
    )
}
