require('dotenv').config()

const express = require('express')
const app = express()
const session = require('express-session')
const massive = require('massive')
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env
const PORT = SERVER_PORT || 5555

app.use(express.json())

app.listen(PORT, () => console.log(`REVENGE OF THE PORT ${PORT}`))
