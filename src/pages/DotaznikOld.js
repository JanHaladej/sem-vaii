import React , {useState, useEffect} from "react"
import Axios from "axios"


export default function Dotaznik(){

    const [nick, setNick] = useState ("")
    const [email, setEmail] = useState ("")
    const [userList, setUserList] = useState ([])
    const [updateUserEmail, setUpdateUserEmail] = useState("")


    useEffect(() => {
        Axios.get("http://localhost:3001/api/get").then((response) => {
            setUserList(response.data)
        })

        //if(Object.keys(errors).length === 0) {alert("Form Submitted")}

    }, [])

    const [errors, setError] = useState({})

    const validation = (nick, email) => {
        let errors = {}
        const regex = new RegExp("@")

        if(nick === "" || email === ""){
            errors.nick = "Chyba Meno"
            errors.email = "Chyba Email"
        }
        else if(!regex.test(email)){
            errors.email = "Zly email lebo chyba @"
        }
        else {
            errors.nick = ""
            errors.email = ""
        }

        return errors;
    }

    const submitDetails = () => {

        setError(validation(nick, email))

        // ak to ma errory tak to neprida nikoho dalsieho lebo bud nema meno, email, alebo nema spravny email
        if(errors.nick === "" && errors.email === ""){

        Axios.post("http://localhost:3001/api/insert", {nick: nick, email: email})
        
        //setUserList([...userList, {nick: nick, email: email}])
        }

    }

    const deleteUser = (premenna) => {
        Axios.delete(`http://localhost:3001/api/delete/${premenna}`)
    }

    const updateUser = (premenna) => {
        Axios.put("http://localhost:3001/api/update", {nick: premenna, email: updateUserEmail})
        setUpdateUserEmail("")
    }

    return (
        <div>
            <h1 className="dot">CRUD test</h1>

            <div className="form">
                <label>Nick</label>
                <input type="text" name="nick" onChange={(e)=>{
                    setNick(e.target.value)
                }}/>

                {errors.nick && <p style={{color: "red"}}>{errors.nick}</p>}

                <label>Email</label>
                <input type="text" name="email" onChange={(e)=>{
                    setEmail(e.target.value)
                }}/>

                {errors.email && <p style={{color: "red"}}>{errors.email}</p>}

                <button onClick={submitDetails}>Submit</button>

                {userList.map((val) => {
                    return (
                        <div className="oneUser">
                            <h1>{val.nick}</h1>
                            <p>{val.email}</p>

                            <button onClick={() => {deleteUser(val.nick)}}>Delete</button>
                            <input type="text" id="updateInput" onChange={(e) => {setUpdateUserEmail(e.target.value)}}/>
                            <button onClick={() => {updateUser(val.nick)}}>Update</button>
                        </div>
                    )
                })}

            </div>

        </div>
    )
    
}