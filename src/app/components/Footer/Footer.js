import React from 'react';
import './footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer-holder page-footer">
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <div className="footer-copyright">
                            &copy; CommitEd {currentYear}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;