const express = require('express')
const app = express()

const words = require('./words')
var port = process.env.PORT || 8080;


app.get("/generate", (req, res) => {
    const domain = req.query.domain
    const arrayPosition = Math.floor(Math.random() * words.length)
    const name = words[arrayPosition];
    const seconds = new Date().getSeconds()

    const mail = `teste.${name}${seconds}@${domain}.com`
    res.send({mail})
})

app.listen(port, () =>{
    console.log(`BACKEND is running on port ${port}.`)
})