import React from "react";
import "./Title.css";

const Title = props => <h1 className="title">{props.children}</h1>;

export default Title;


// import React from "react";
// import "./Hero.css";

// const Hero = props => (
//   <div className="hero text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
//     {props.children}
//   </div>
// );

// export default Hero;
