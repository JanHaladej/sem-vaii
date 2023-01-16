import React from "react"
import Axios from "axios"

export default function Clanky(){
    const [formDataRef, setFormDataRef] = React.useState({
        nazov: "",
        obrazok: "",
        comment: ""
    })
    
    function handleChange(event) {
        setFormDataRef(prevFormDataRef => {
            return {
                ...prevFormDataRef,
                [event.target.name]: event.target.value
            }
        })
    }
    
    function handleSubmit(event) {
        event.preventDefault()
        /*sem podmienky ak nejake budem mat napr @ */
        Axios.post("http://localhost:3001/api/insert/cla", {formDataRef})
    }
    
    return (
        <div className="form-container--referencia">
            <form className="form--base" onSubmit={handleSubmit}>
                <h3>Uverejni článok</h3>
                <input 
                    type="nazov" 
                    placeholder="názov"
                    className="form--input"
                    name="nazov"
                    onChange={handleChange}
                    value={formDataRef.nazov}
                />
                <input 
                    type="obrazok" 
                    placeholder="obrázok link"
                    className="form--input"
                    name="obrazok"
                    onChange={handleChange}
                    value={formDataRef.obrazok}
                />
                <textarea className="text-area--referencie"
                    value={formDataRef.comment}
                    placeholder="Text"
                    onChange={handleChange}
                    name="comment"
                />
                <button className="form--submit">Odošli</button>
            </form>
        </div>
    )
    
}