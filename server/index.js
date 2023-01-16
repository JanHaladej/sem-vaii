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

//zapisovanie do databazy user_list
app.post("/api/insert/reg", (req, res)=> {

    const MA = req.body.formDataReg.MAcislo
    const email = req.body.formDataReg.email
    const heslo = req.body.formDataReg.password
    const pozicia = req.body.formDataReg.position
    console.log(MA)

    var variable
    // je tam uz niekto s takym nickom ?
    const sqlTest = "SELECT COUNT(MA) FROM user_list WHERE MA = ?"
    db.query(sqlTest, MA, (error, resulting)=> {
        /*console.log(resulting)*/
        /*variable = JSON.parse(JSON.stringify(resulting));*/
        /*if(variable[0]['COUNT(MA)'] === 0){*/
            const sqlInsert = "INSERT INTO user_list (MA, email, heslo, pozicia) VALUES (?,?,?,?)"
            db.query(sqlInsert, [MA, email, heslo, pozicia], (err, result)=> {
            console.log(result)
            })
        /*}*/
    })

})

//zapisovanie do databazy dotaznik
app.post("/api/insert/dot", (req, res)=> {

    const q1 = req.body.formDataDot.quest1
    const q2 = req.body.formDataDot.quest2
    const q3 = req.body.formDataDot.quest3
    const q4 = req.body.formDataDot.quest4
    const q5 = req.body.formDataDot.quest5
    const q6 = req.body.formDataDot.quest6
    const q7 = req.body.formDataDot.quest7
    const q8 = req.body.formDataDot.quest8
    const q9 = req.body.formDataDot.quest9
    const q10 = req.body.formDataDot.quest10

    const meno = req.body.formDataDot.meno
    const priezvisko = req.body.formDataDot.priezvisko
    const email = req.body.formDataDot.email
    const telCislo = req.body.formDataDot.telCislo

    console.log(q1)

    var variable
    
        const sqlInsert = "INSERT INTO dotaznik (o1, o2, o3, o4, o5, o6, o7, o8, o9, o10, meno, priezvisko, email, telCislo) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)"
        db.query(sqlInsert, [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, meno, priezvisko, email, telCislo], (err, result)=> {
        console.log(result)
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







