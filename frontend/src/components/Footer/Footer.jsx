import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.footer_logo} alt="" />
            <p>Savor the flavors of Tasty Bite Hub, where every dish is a delightful fusion of taste and tradition. Experience culinary excellence with every bite, crafted with love and care to satisfy your cravings. Visit us today for a dining experience that will tantalize your taste buds.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91 1234567890</li>
                <li>contact@tastybitehub.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © TastyBiteHub.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
