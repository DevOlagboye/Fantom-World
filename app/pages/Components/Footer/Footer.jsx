import React from "react"
import { FaTwitter, FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa"

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-details">
                <div className="footer-logo-text">
                    <div className="footer-logo">
                        <h5>FantomWorld</h5>
                        <p>
                            Bringing the Real World experience<br/> to the Metaverse on Fantom Blockchain
                        </p>
                    </div>
                    <div className="footer-social-icons">
                        <FaTwitter className="icon" />
                        <FaLinkedin className="icon" />
                        <FaFacebook className="icon" />
                        <FaGithub className="icon" />
                    </div>
                </div>
                <div className="footer-links">
                    <h5>Marketplace</h5>
                    <ul>
                        <li>Buy Product</li>
                        <li>Sell Product</li>
                        <li>Our Creator</li>
                    </ul>
                </div>
                <div className="footer-links">
                    <h5>Resources</h5>
                    <ul>
                        <li>About Us</li>
                        <li>Event</li>
                        <li>Our Creator</li>
                    </ul>
                </div>
                <div className="footer-links">
                    <h5>Company</h5>
                    <ul>
                        <li>Media</li>
                        <li>Blog</li>
                        <li>Pricing</li>
                    </ul>
                </div>
                <div className="footer-links">
                    <h5>Legal</h5>
                    <ul>
                        <li>Terms</li>
                        <li>Privacy</li>
                        <li>Support</li>
                    </ul>
                </div>
            </div>
            <hr className="footer-divider" />
            <p className="footer-copyright">
                Copyright © FantomWorld {new Date().getFullYear()} All right
                reserved
            </p>
        </div>
    )
}

export default Footer
