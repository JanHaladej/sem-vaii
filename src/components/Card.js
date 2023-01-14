import React from "react"

import img1 from "../images/telephone.png"
import img2 from "../images/envelope.png"

export default function Card(props) {
    return (
        <div className="contact-card">
            <img src={props.img} alt="" />
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src={img1} alt="" />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src={img2} alt="" />
                <p>{props.email}</p>
            </div>
        </div>
    )
}