import React from 'react'
import './Footer1.css'
import Button from './Button'
import img1 from '../images/footer1a.png'
import img2 from '../images/footer1b.png'

const Footer1 = () => {
    return (
        <div className="footer1">
            <div className="container">
                <img src={img1} alt="" className="img1"/>
                <div className="touch">
                    <h1>Get in touch with us for your service related query</h1>
                    <Button text='Contact Us' color="black" textColor="white"/>
                </div>
                <img src={img2} alt="" className="img2"/>
            </div>
        </div>
    )
}

export default Footer1
