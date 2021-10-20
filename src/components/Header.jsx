import React from 'react'
import './Header.css'
import headerImg from '../images/headerImage.png'
const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="logo">&#10100;finsweet</div>
                <div className="right-nav">
                        <ul>
                            <li>Home</li>
                            <li>About us</li>
                            <li>Services</li>
                            <li>Blog</li>
                            <li>Contact</li>
                            <li><img src={headerImg} alt="" /></li>
                        </ul>
                </div>
            </div>
        </header>
    )
}

export default Header
