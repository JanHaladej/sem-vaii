import React from "react"

export default function Referencie(){
    const [formDataRef, setFormDataRef] = React.useState({
        meno: "",
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
    }
    
    return (
        <div className="form-container--referencia">
            <form className="form--base" onSubmit={handleSubmit}>
                <h3>Hodnotenie a skúsenosť</h3>
                <input 
                    type="meno" 
                    placeholder="meno a priezvisko"
                    className="form--input"
                    name="meno"
                    onChange={handleChange}
                    value={formDataRef.meno}
                />
                <textarea className="text-area--referencie"
                    value={formDataRef.comment}
                    placeholder="Hodnotenie"
                    onChange={handleChange}
                    name="comment"
                />
                <button className="form--submit">Odošli</button>
            </form>
        </div>
    )
    
}