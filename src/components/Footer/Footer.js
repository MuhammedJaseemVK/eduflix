import React from 'react'
import './Footer.css'
import footer from '../../assets/img/footer.png'
function Footer() {
    return (
        <footer className='footer'>
            <div className='container'>
                <div className='footer_wrapper'>
                    <div className="footer-box">
                        <div className="logo">
                            <div className="logo-img">
                                <img src={footer} alt="" />
                            </div>
                            <h2>Eduflix</h2>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, impedit?</p>
                    </div>
                    <div className="footer-box">
                        <h4 className="footer-title">Company</h4>
                        <ul className="footer-links">
                            <li><a href="">Our programs</a></li>
                            <li><a href="">Our plan</a></li>
                            <li><a href="">Become a member</a></li>
                        </ul>
                    </div>
                    <div className="footer-box">
                        <h4 className="footer-title">Quick links</h4>
                        <ul className="footer-links">
                            <li><a href="">About us</a></li>
                            <li><a href="">Contact us</a></li>
                            <li><a href="">Support us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer