require('dotenv').config()

const express = require('express')
const app = express()
const session = require('express-session')
const massive = require('massive')

// importing controllers
const authCtrl = require('./controllers/authController')

// constants for server set up
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env
const PORT = SERVER_PORT || 5555

// middleWare
app.use(express.json())

// Sessions
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 5
    }
}))

// End Points Auth
app.post('/auth/login', authCtrl.login)
app.post('/auth/register', authCtrl.register)

// End points for Cards

// End points for Decks


// Massive Set up
massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.listen(PORT, () => console.log(`REVENGE OF THE PORT ${PORT}`))
})

