import React from "react"
import Axios from "axios"

export default function Register(){
    const [formDataReg, setFormDataReg] = React.useState({
        MAcislo: "",
        email: "",
        password: "",
        passwordConfirm: "",
        position: ""
    })
    
    function handleChange(event) {
        setFormDataReg(prevFormDataLogin => {
            return {
                ...prevFormDataLogin,
                [event.target.name]: event.target.value
            }
        })
    }

    const bcrypt = require('bcryptjs');
    const saltRounds = 10;
    
    function handleSubmit(event) {
        event.preventDefault()
        /*sem podmienky ak nejake budem mat napr @ */

        if (!/^\d+$/.test(event.target.MAcislo.value)) {
            alert('MAcislo must contain only numbers');
            return;
        }
        if (event.target.position.value.length > 5) {
            alert('position must be exactly 4 characters long or less');
            return;
        }
        if (event.target.password.value !== event.target.passwordConfirm.value) {
            alert('passwords do not match');
            return;
        }

        bcrypt.genSalt(saltRounds, function(err, salt) {
            bcrypt.hash(formDataReg.password, salt, function(err, hash) {
            formDataReg.password = hash;
            formDataReg.passwordConfirm = hash;
            Axios.post("http://localhost:3001/api/insert/reg", {formDataReg})
            });
          });



    }
    
    return (
        <div className="form-container--reg">
            <form className="form--base" onSubmit={handleSubmit}>
            <h3>Registrácia</h3>
                <input 
                    type="MAcislo" 
                    placeholder="MA číslo"
                    className="form--input"
                    name="MAcislo"
                    onChange={handleChange}
                    value={formDataReg.MAcislo}
                />
                <input 
                    type="email" 
                    placeholder="Email"
                    className="form--input"
                    name="email"
                    onChange={handleChange}
                    value={formDataReg.email}
                />
                <input 
                    type="password" 
                    placeholder="Heslo"
                    className="form--input"
                    name="password"
                    onChange={handleChange}
                    value={formDataReg.password}
                />
                <input 
                    type="password" 
                    placeholder="Znovu heslo"
                    className="form--input"
                    name="passwordConfirm"
                    onChange={handleChange}
                    value={formDataReg.passwordConfirm}
                />
                <input 
                    type="position" 
                    placeholder="R1/R2/VR/GST"
                    className="form--input"
                    name="position"
                    onChange={handleChange}
                    value={formDataReg.position}
                />
                <button className="form--submit">Registrácia</button>
            </form>
        </div>
    )
    
}