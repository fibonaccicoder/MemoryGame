import React from "react";
import "./PicCards.css";

const PicCards = props => (
    <div className="card">
        <div className="img-container card click-card">
            <img alt={props.name} src={props.image} />
        </div>
        <div className="content">
        </div>
    </div>
);

export default PicCards;

