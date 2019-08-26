import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (

        <header className="header-holder ">
        <nav>
            <div className="nav-wrapper container">
            <Link to="/" className="brand-logo left">CommitEdBook</Link>
                <Link  to="/" data-target="mobile-demo" className="sidenav-trigger right"><i className="material-icons">menu</i></Link>
                <ul className="right hide-on-med-and-down">
                    <li><Link to="/posts">Feed</Link></li>
                    <li><Link to="/people">People</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="" onClick={() => {
                        localStorage.clear();
                        document.location.reload();
                    }}>LogOut</Link></li>
                </ul>
            </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
            <li><Link to="/posts">Feed</Link></li>
            <li><Link to="/people">People</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="" onClick={() => {
                localStorage.clear();
                document.location.reload();
            }}>LogOut</Link></li>
        </ul>
        </header>

    )
}

export default Header;