import React from "react"
import Axios from "axios"

export default function Referencie(){
    const [formDataRef, setFormDataRef] = React.useState({
        meno: "",
        comment: ""
    })

    const [userList, setUserList] = React.useState ([])

    React.useEffect(() => {
        Axios.get("http://localhost:3001/api/get/ref").then((response) => {
            setUserList(response.data)
            console.log(response.data)
        })
    }, [])
    
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
        Axios.post("http://localhost:3001/api/insert/ref", {formDataRef})
        setUserList([...userList, {meno: formDataRef.meno, comment: formDataRef.comment}])
    }
    
    return (
        <div>
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

        {userList.map((val) => {
            return (
                <div className="oneUser">
                    <h1>{val.menoPriezvisko}</h1>
                    <p>{val.hodnotenie}</p>

                    <button /*onClick={() => {deleteUser(val.nick)}}*/>Delete</button>
                    <input type="text" id="updateInput" /*onChange={(e) => {setUpdateUserEmail(e.target.value)}}*//>
                    <button /*onClick={() => {updateUser(val.nick)}}</div>*/>Update</button>
                </div>
            )
        })}
        </div>
    )
    
}