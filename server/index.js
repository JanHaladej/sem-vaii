const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()
const mysql = require("mysql")

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "CRUDDataBase"
});

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

//zobraz celu databazu
app.get("/api/get", (req, res) => {

    const sqlSelect = "SELECT * FROM crud_table"
    db.query(sqlSelect, (err, result)=> {
        res.send(result)
    })
})

//zapisovanie do databazy
app.post("/api/insert", (req, res)=> {

    const nick = req.body.nick
    const email = req.body.email

    var variable
    // je tam uz niekto s takym nickom ?
    const sqlTest = "SELECT COUNT(nick) FROM crud_table WHERE nick = ?"
    db.query(sqlTest, nick, (error, resulting)=> {
        console.log(resulting)
        variable = JSON.parse(JSON.stringify(resulting));
        if(variable[0]['COUNT(nick)'] === 0){
            const sqlInsert = "INSERT INTO crud_table (nick, email) VALUES (?,?)"
            db.query(sqlInsert, [nick, email], (err, result)=> {
            console.log(result)
            })
        }
    })

})

//delete
app.delete("/api/delete/:nick", (req, res)=> {

    const nick = req.params.nick

    const sqlDelete = "DELETE FROM crud_table WHERE nick = ?"
    db.query(sqlDelete, nick, (err, result)=> {
        if (err) console.log(err)
    })
})

//update
app.put("/api/update", (req, res)=> {

    const nick = req.body.nick
    const email = req.body.email

    const sqlUpdate = "UPDATE crud_table SET email = ? WHERE nick = ?"
    db.query(sqlUpdate, [email, nick], (err, result)=> {
        if (err) console.log(err)
    })
})

//funguje server ?
app.listen(3001, () => {
    console.log("running on port 3001");
});







