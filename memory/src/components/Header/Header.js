import React from "react";
import "./Header.css";

const Header = props => {
    return (
        <nav className="navbar nav-justified">
            <a className="navbar-brand nav-item pg-title" href="#">Geomemory</a>
            <span className="navbar-brand nav-item score"> {`Score: ${props.score} | Top Score: ${props.bestScore}`}</span>
        </nav>
    )
}

export default Header;