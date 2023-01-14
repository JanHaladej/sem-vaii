import React from "react"
import Card from "../components/Card"
import data from "../dataFiles/contactdata"


const Stranka2 = () => {        
    return (
        <div className="contacts">
            <Card 
                img="../images/man1.jpg" 
                name="Jozko Mrkva"
                phone="123456789"
                email="asdf@asdf.com"
            />
            <Card 
                img="../images/man2.jpg"
                name="Peter Petrzlen"
                phone="987654321"
                email="qwerty@me.com"
            />
            <Card 
                img="../images/man1.jpg"
                name="Julius Pierko"
                phone="123789456"
                email="poiuy@hotmail.com"
            />
            <Card 
                img="../images/man2.jpg"
                name="Pavol Toth"
                phone="963852741"
                email="lkjhg@lkjhg.com"
            />
        </div>
    )
    
}

export default Stranka2