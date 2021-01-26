const express = require("express")
const axios = require("axios")

const port = process.env.PORT || 8000
const app = express()

const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID
const clientSecret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET
const callbackUri = process.env.REACT_APP_SPOTIFY_CALLBACK_URL


app.listen(port, () => {
    console.log(`LISTENING ON PORT ${port}`)
})

app.get("/login", (req, res) => {
    res.send({
        "message": "pinged login route"
    })
})
