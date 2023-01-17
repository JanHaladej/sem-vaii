import React from "react"
import Axios from "axios"

export default function Referencie(){
    const [formDataRef, setFormDataRef] = React.useState({
        meno: "",
        comment: ""
    })

    const [userList, setUserList] = React.useState ([])
    const [updateHodn, setUpdateHodn] = React.useState("")

    React.useEffect(() => {
        Axios.get("http://localhost:3001/api/get/ref").then((response) => {
            setUserList(response.data)
        })
    }, [userList])
    
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
/*
    const deleteUser = (var1, var2) => {
        Axios.delete("http://localhost:3001/api/delete/ref", {meno: var1, hodnotenie: var2})
    }
*/
    const deleteUser = (premenna) => {
        Axios.delete(`http://localhost:3001/api/delete/ref/${premenna}`)
    }
    
    const updateUser = (premenna) => {
        Axios.put("http://localhost:3001/api/update/ref", {nick: premenna, hodnotenie: updateHodn})
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
        

        {userList.map((val) => {
            return (
                <div className="one-result">
                <div className="form--base">
                    <h1>{val.menoPriezvisko}</h1>
                    <br/>
                    <textarea className="text-area--referencie"
                        defaultValue={val.hodnotenie}
                        onChange={(e) => {setUpdateHodn(e.target.value)}}
                    />
                    <button onClick={() => {updateUser(val.menoPriezvisko)}} className="form--submit">Update</button>
                    <br/>{/*TO DO zmena textoveho pola */}
                    <button onClick={() => {deleteUser(val.menoPriezvisko)}} className="form--submit">Delete</button>
                </div>
                </div>
            )
        })}
        </div>
    )
    
}