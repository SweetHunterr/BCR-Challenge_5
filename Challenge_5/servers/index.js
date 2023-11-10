// Import Module
const express = require("express")
const path = require("path")
const webRouter = require('../routes/web.router')
const apiRouter = require('../routes/api.router')

// Define Object Express
const app = express()
const PORT = 3000

// Location File
const PUBLIC_DIRECTORY = path.join(__dirname, "../views/assets")
const DIRECTORY = path.join(__dirname, "../views")

app.use(express.json())
app.use(express.urlencoded())
app.use(express.static(PUBLIC_DIRECTORY))
app.use(express.static(DIRECTORY))

// Set EJS
app.set('view engine', 'ejs')

// Define Router Web
app.use("/", webRouter)
app.use("/api", apiRouter)

app.listen(PORT, () => {
    console.log(`Server Running In Port : ${PORT}`)
})