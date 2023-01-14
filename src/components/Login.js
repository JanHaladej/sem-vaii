import React from "react"

export default function Login(){
    const [formDataLogin, setFormDataLogin] = React.useState({
        MAcislo: "",
        password: ""
    })
    
    function handleChange(event) {
        setFormDataLogin(prevFormDataLogin => {
            return {
                ...prevFormDataLogin,
                [event.target.name]: event.target.value
            }
        })
    }
    
    function handleSubmit(event) {
        event.preventDefault()
        /*sem podmienky ak nejake budem mat napr @ */
        console.log("prihlaseny")
    }
    
    return (
        <div className="form-container--login">
            <form className="form" onSubmit={handleSubmit}>
                <h3>Prihlásenie</h3>
                <input 
                    type="MAcislo" 
                    placeholder="MA číslo"
                    className="form--input"
                    name="MAcislo"
                    onChange={handleChange}
                    value={formDataLogin.MAcislo}
                />
                <input 
                    type="password" 
                    placeholder="Heslo"
                    className="form--input"
                    name="password"
                    onChange={handleChange}
                    value={formDataLogin.password}
                />
                <button className="form--submit">Prihlásenie</button>
            </form>
        </div>
    )
    
}