import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <header className="header-holder ">
            <nav>
                <div className="nav-wrapper container">
                    <div className="row">
                        <div className="col s12">
                            <Link to="/" className="brand-logo">CommitEdBook</Link>
                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                                <li><Link to="/posts">Feed</Link></li>
                                <li><Link to="/people">People</Link></li>
                                <li><Link to="">Profile</Link></li>
                                <li><Link onClick={() => {
                                    localStorage.clear();
                                    document.location.reload();
                                }}>LogOut</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;