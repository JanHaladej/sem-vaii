import React from "react"
import Axios from "axios"

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

    const [userList, setUserList] = React.useState ([])
    
    function handleSubmit(event) {
        event.preventDefault()
        /*sem podmienky ak nejake budem mat napr @ */
        Axios.get("http://localhost:3001/api/get/login?MA="+ event.target.MAcislo.value + "&heslo=" + event.target.password.value).then((response) => {
            setUserList(response.data)
        })

        if(userList.length !== 0){
            console.log("prihlaseny")
        } else {
            alert('Neprihlaseny!');
        }


    }
    
    return (
        <div className="form-container--login">
            <form className="form--base" onSubmit={handleSubmit}>
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