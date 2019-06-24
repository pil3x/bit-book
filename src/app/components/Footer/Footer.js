import React from 'react';
import './footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer-holder page-footer">
            <div className="footer-copyright">
                <div className="container"> &copy; CommitEd {currentYear}</div>
            </div>
        </footer>
    )
}

export default Footer;