import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <header className="header-holder">
            <nav>
                <div className="nav-wrapper container">
                    <Link to="/" className="brand-logo">CommitEdBook</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/">Feed</Link></li>
                        <li><Link to="/">People</Link></li>
                        <li><Link to="/">Profile</Link></li>
                    </ul>
                </div>
            </nav>

        </header>
    )
}

export default Header;