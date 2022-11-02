import React from 'react'
import { AiOutlineMenu, AiOutlineShoppingCart } from 'react-icons/ai'
import './style.css'

function Navbar() {
    return (
        <div className='navbar-top' aria-label="navbar">
            <div className="container">
                <button className='icon'>
                    <AiOutlineMenu />
                </button>
                <a href="#">
                    <span className='logo-text'>shoes</span>
                </a>
                <button className='icon'>
                    <AiOutlineShoppingCart />
                </button>
            </div>
        </div>
    )
}

export default Navbar