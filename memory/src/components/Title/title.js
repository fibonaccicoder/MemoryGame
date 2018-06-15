import React from "react";
import "./Title.css";

const Title = props => {

    return (
        <div>
            <div>
                <h1 className="title"> {props.children} </h1>
            </div>
            <nav className="navbar nav-justified">
                <span className="navbar-brand nav-item score"> {`Score: ${props.score} | Top Score: ${props.bestScore}`}</span>
            </nav>
        </div>
    )
}

export default Title;
