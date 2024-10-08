const express = require("express")
const cors = require('cors')
const mongoose = require('mongoose')
require("dotenv").config()
const app = express()

// step 1 middleware
app.use(express.json())
app.use(cors({ origin: true, credentials: true }))


// step 2 routes
app.use("/api/notes", require("./routes/todo.routes"))

// step 3 404 route
app.use("*", (req, res) => {
    res.status(404).json({ message: "resource not found" })
})
// step 4 error handler
app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({

        message: "SERVER ERROR", error: err.message
    })
})

// step 5 connection
mongoose.connect(process.env.MONGO_URL)

mongoose.connection.once("open", () => {
    console.log("MONGO CONNECTED")
    app.listen(process.env.PORT), console.log("SERVER RUNNING")


})
