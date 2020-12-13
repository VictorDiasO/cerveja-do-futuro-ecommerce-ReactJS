import React from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom';

import logo from '../../logo.svg';

export default function Header() {
    const goToCommunityPage = () => {
        window.location.href = 'http://localhost:3000/community'
    }

    return(
        <nav>
            <div className="logo">
                {/* <a href="logo"><img src={logo} alt="logo"/></a> */}
                <img src={logo} />
                {/* <h3>Cervejaria Do Futuro</h3> */}
            </div>
            <ul>
                <li>
                    <Router>
                        <Link to="/" style={{ textDecoration: 'none', color: 'rgba(255, 255, 255, 0.7)' }}>Home</Link>
                    </Router>
                </li>
                <li>
                    <Router>
                        <Link to="/ourproducts" style={{ textDecoration: 'none', color: 'rgba(255, 255, 255, 0.7)' }}>Our products</Link>
                    </Router>
                </li>
                <li onClick={goToCommunityPage}>
                    <Router>
                        <Link to="/community" style={{ textDecoration: 'none', color: 'rgba(255, 255, 255, 0.7)' }}>Community</Link>
                        <i className="fa fa-comments"></i>
                    </Router>
                </li>
                <li>
                    <Router>
                        <Link to="/aboutus" style={{ textDecoration: 'none', color: 'rgba(255, 255, 255, 0.7)' }}>About us</Link>
                    </Router>
                </li>
            </ul>
            <div className="search">
                <i className="fa fa-search"></i>
                <i className="fa fa-shopping-basket"></i>
            </div>
        </nav>
    );
}