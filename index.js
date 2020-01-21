const express = require('express')
const app = express()

const words = require('./words')
var port = process.env.PORT || 8080;


app.get("/generate", (req, res) => {
    const domain = req.query.domain
    const arrayPosition = Math.floor(Math.random() * (words.length-1))
    const name = words[arrayPosition];
    const number = Math.floor(Math.random() * 999)


    const mail = `teste.${name}${number}@${domain}.com`
    res.send({mail})
})

app.listen(port, () =>{
    console.log(`BACKEND is running on port ${port}.`)
})