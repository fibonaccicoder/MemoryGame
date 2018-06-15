import React from "react";
import "./PicCards.css";

const PicCards = props => (
    // <div onClick={(event) => props.setClicked(props.id)} className="card">
    <div className="img-container">
        <img alt={props.id} src={props.image} />
    </div>
    // </div>
);

export default PicCards;

