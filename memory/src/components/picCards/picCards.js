import React from "react";
import "./picCards.css";

const PicCards = props => (
    <div onClick={() => props.setClicked(props.id)} className="card">
        <div className="img-container">
            <img alt={props.id} src={props.image} />
        </div>
    </div>
);

export default PicCards;