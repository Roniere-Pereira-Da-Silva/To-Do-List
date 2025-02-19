const express = require('express')
const path = require("path")
const routes = require("./routes/routes")
const connectToDb = require("./database/db")
const app = express()
const port = 3000


connectToDb()
app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname,"public")))
app.use(express.urlencoded())
app.use(routes)
//rota 
app.get('/home',  (req, res) => {
  res.render('index')
})


app.listen(3000, () => console.log(`servidor rodando em http://localhost:${port}`))

