const express = require("express")
const axios = require("axios")

const port = process.env.PORT || 8000

const app = express()

app.listen(port, () => {
    console.log(`LISTENING ON PORT ${port}`)
})
