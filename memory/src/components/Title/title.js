import React from "react";
import "./Title.css";

const Title = props => (
    <div className="hero">
        <h1>Memory Game!</h1>
        <p>Enhance your memory with this matching game! Click on images to earn points, but don't click on any more than once!</p>
        <span className="navbar-brand nav-item score"> {`Score: ${props.score} | Top Score: ${props.bestScore}`}</span>
    </div>
);
export default Title;