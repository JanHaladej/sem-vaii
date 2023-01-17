import React from "react"
import Axios from "axios"

export default function Clanky(){
    const [formDataRef, setFormDataRef] = React.useState({
        nazov: "",
        obrazok: "",
        comment: ""
    })

    const [userList, setUserList] = React.useState ([])
    const [updateHodn, setUpdateHodn] = React.useState("")

    React.useEffect(() => {
        Axios.get("http://localhost:3001/api/get/cla").then((response) => {
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
        Axios.post("http://localhost:3001/api/insert/cla", {formDataRef})
    }
    
    const deleteUser = (premenna) => {
        Axios.delete(`http://localhost:3001/api/delete/cla/${premenna}`)
    }
    /* https://www.tutorialspoint.com/assets/questions/media/426142-1668760872.png */
    const updateUser = (premenna) => {
        Axios.put("http://localhost:3001/api/update/cla", {nick: premenna, hodnotenie: updateHodn})
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

            {userList.map((val) => {
            return (
                <div className="one-result">
                <div className="form--base">
                    <h2>{val.nazov}</h2>
                    <br/>
                    <img src={val.obrazky} alt="" className="cla--img"/>
                    <br/>
                    <p>{val.text}</p>
                    <br/>
                    <input type="text" id="updateInput" onChange={(e) => {setUpdateHodn(e.target.value)}}/>
                    <br/>
                    <h3>Zmena obrázku:</h3>
                    <button onClick={() => {updateUser(val.nazov)}} className="form--submit">Update</button>
                    <br/>{/*TO DO zmena textoveho pola */}
                    <button onClick={() => {deleteUser(val.nazov)}} className="form--submit">Delete</button>
                </div>
                </div>
            )
        })}
        </div>
    )
    
}