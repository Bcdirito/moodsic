const express = require("express")
const queryString = require('querystring')
const request = require("request")
const cookieParser = require("cookie-parser")
const cors = require("cors")

const app = express()
let port

const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

app.use(express.static(__dirname + '../public'))
    .use(cors())
    .use(cookieParser())
    .use(express.static(path.join(__dirname, '../build')));

if (process.env.NODE_ENV === 'production') {
    port = process.env.PORT || 3000;

    app.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, '../build', 'index.html'));
    });
} else {
    port = 8000;

    app.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, '../public', 'index.html'));
    });
}

app.options('*', cors());

const clientId = process.env.SPOTIFY_CLIENT_ID
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET
const callbackUri = process.env.SPOTIFY_CALLBACK_URL

const stateKey = "spotify_auth_state"
const generateStringToken = require("./utils/generateStringToken")
const { response } = require("express")

app.listen(port, () => {
    console.log(`LISTENING ON PORT ${port}`)
})

app.get("/login", (req, res) => {
    const stateStr = generateStringToken(16)
    const scopeStr = 'streaming user-read-email user-read-private';

    res.cookie(stateKey, stateStr)

    res.redirect("https://accounts.spotify.com/authorize?" +
        queryString.stringify({
            response_type: "code",
            client_id: clientId,
            scope: scopeStr,
            redirect_uri: callbackUri,
            state: stateStr
        })
    )
})

app.get("/callback", (req, res) => {
    const code = req.query.code || null
    const state = req.query.state || null
    const storedState = req.cookies ? req.cookies[stateKey] : null

    if (state === null || state !== storedState) {
        res.status(401).send("Bad login")
    } else {
        res.clearCookie(stateKey);
        const authOptions = {
            url: "https://accounts.spotify.com/api/token",
            form: {
                code: code,
                redirect_uri: callbackUri,
                grant_type: "authorization_code"
            },
            headers: {
                "Authorization": "Basic " + (new Buffer(clientId + ":" + clientSecret).toString("base64"))
            },
            json: true
        }

        request.post(authOptions, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                const accessToken = body.access_token,
                refreshToken = body.refresh_token

                const options = {
                    url: "https://api.spotify.com/v1/me",
                    headers: {"Authorization" : "Bearer " + accessToken},
                    json: true
                }

                request.get(options, (error, response, body) => {
                    console.log(body)
                })

                res.redirect("http://localhost:3000/" + queryString.stringify({
                    access_token: accessToken,
                    refresh_token: refreshToken
                }))
            } else {
                res.redirect("http://localhost:3000/" + queryString.stringify({
                    error: "Invalid Token"
                }))
            }
        })
    }
})

app.get("/refresh-token", (req, res) => {
    const refreshToken = req.query.refresh_token
    const authOptions = {
        url: "https://accounts.spotify.com/api/token",
        headers: {
            "Authorization": "Basic" + (new Buffer(`${clientId}:${clientSecret}`).toString('base64'))
        },
        form: {
            "grant_type": "refresh_token",
            "refresh_token": refreshToken
        },

        json: true
    }

    request.post(authOptions, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            const accessToken = body.accessToken
            res.send({
                "accessToken": accessToken
            })
        } else {
            console.log(`Error: ${error}`)
        }
    })
})

app.get("/")