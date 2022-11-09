import React from 'react';
import logo from '../../../assets/logo.svg';
const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-orange-600 text-primary-content">
            <div>
                <img style={{ height: '150px' }} src={logo} alt="" />
                <p className="font-bold">
                    Home Made Food Store
                </p>
                <p><small>Copyright © 2022 - All right reserved</small></p>
            </div>

        </footer>
    );
};

export default Footer;