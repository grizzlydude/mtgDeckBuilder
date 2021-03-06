require('dotenv').config()

const express = require('express')
const app = express()
const session = require('express-session')
const massive = require('massive')

// importing controllers
const authCtrl = require('./controllers/authController')
const cardCtrl = require('./controllers/cardController')
const deckCtrl = require('./controllers/deckController')

// importing the controller for mailing functions
const mailing = require('./controllers/mailerController')

// constants for server set up
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env
const PORT = SERVER_PORT || 5555

// middleWare
app.use(express.json())

app.post('/mailing', mailing.sendMail)

// Sessions
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 5
    }
}))

// Massive Set up
massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.listen(PORT, () => console.log(`REVENGE OF THE PORT ${PORT}`))
})

// End Points Auth
app.post('/auth/login', authCtrl.login)
app.post('/auth/register', authCtrl.register)

// End points for Cards
app.get('/api/cards', cardCtrl.allCards)
app.get('/api/cards/:id', cardCtrl.getSingleCard)
app.post('/api/cards/:id', cardCtrl.addCard)
app.delete('/api/deck/:id', cardCtrl.removeCard)

// End points for Decks
app.get('/api/decklist', deckCtrl.getAllDecks)
app.get('/api/deck/:id', deckCtrl.getSingleDeck)
app.post('/api/adddeck', deckCtrl.addDeck)
// app.put('/api/deck/:id', deckCtrl.editDeck)
app.delete('/api/deck/:id', deckCtrl.deleteDeck)

