import React from "react"

import img1 from "../images/info-circle.png"
import img2 from "../images/person.png"
import img3 from "../images/telephone.png"
import img4 from "../images/envelope.png"

export default function Footer() {
    return (
        <div className="full--footer">
            <ul className="footer--ul">
                    <li>
                        <img src={img1} alt="" /> Kontakt:
                    </li>
                    <li>
                        <img src={img2} alt="" /> Ján Haladej
                    </li>
                    <li>
                        <img src={img3} alt="" /> +421 915 149 183
                    </li>
                    <li>
                        <img src={img4} alt="" /> janhaladej@gmail.com
                    </li>
                </ul>
        </div>
    )
}