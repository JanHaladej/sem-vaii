import React from "react"

import Login from "../components/Login"
import Register from "../components/Register"

/*\
return (
        <div>
            <Login/>
            <Register/>
        <div/>
    )


*/

export default function Kariera(){
    return (
        <div className="full--kariera">
            <Login/>
            <Register/>
        </div>
    )
}