import React from "react";
import dark from "./images/dark.jpg";
export default function Cards(props){
    return (
        <div className="container">
            <div>
            <img className="cardIMG" src={props.imgsrc} alt="Unable to load image"/>
            </div>
            <div>
            <span className="cardSpan">A Netflix Original Series</span>
            <h3 className="cardH">{props.name}</h3>
            <a className="cardA" href={props.link}>
                <button className="cardLink">WATCH NOW</button>
            </a>
            </div>

        </div>
    );
} 