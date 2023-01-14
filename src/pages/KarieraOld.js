import React from "react"
import Card from "../components/Card"

import img1 from "../images/man1.jpg"
import img2 from "../images/man2.jpg"

export default function Kariera(){
    return (
        <div>
            <div className="contacts">
                <Card 
                    img={img1} 
                    name="Jozko Mrkva"
                    phone="123456789"
                    email="asdf@asdf.com"
                />
                <Card 
                    img={img2}
                    name="Peter Petrzlen"
                    phone="987654321"
                    email="qwerty@me.com"
                />
                <Card 
                    img={img1}
                    name="Julius Pierko"
                    phone="123789456"
                    email="poiuy@hotmail.com"
                />
                <Card 
                    img={img2}
                    name="Pavol Toth"
                    phone="963852741"
                    email="lkjhg@lkjhg.com"
                />
            </div>
            
        </div>
    )
    
}