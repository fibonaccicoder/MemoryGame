import React from "react";
import "./Wrapper.css";

const Wrapper = props =>

    <div className={`container${props.fluid ? "-fluid" : ""}`} {...props} />;

export default Wrapper;


{/* <h1 className="wrapper">{props.children}</h1> */ };