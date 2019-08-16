const axios = require('axios')

module.exports = {
    allCards: (req, res) => {
        console.log('All Cards')
        console.log('')
        axios.get('https://api.magicthegathering.io/v1/cards')
            .then(response => {
                console.log(response.data)
                console.log('')
                res.status(200).send(response.data)
            }).catch(err => {
                res.status(500).send({ message: 'Failed to connect to Database.' })
            })
    },
    getSingleCard: (req, res) => {
        console.log('Single Cards')
        console.log('')
        const { id } = req.params
        axios.get(`https://api.magicthegathering.io/v1/cards/${id}`)
            .then(response => {
                console.log(response.data)
                console.log('')
                res.status(200).send(response.data)
            }).catch(err => {
                res.status(500).send({ message: 'Failed to connect to Database.' })
            })
    },
    addCard: async (req, res) => {
        console.log('Adding Cards')
        console.log('')
        const db = req.app.get('db')
        const { title, user_id } = req.body
        const { id } = req.params
        const addingToDeck = await db.insert_deck([title, user_id, id])
        res.sendStatus(200)
    },
    removeCard: async (req, res) => {
        console.log('Removing Cards')
        console.log('')
        const db = req.app.get('db')
        const { title, user_id, card_id } = req.body
        const deleteFromDeck = await db.delete_card_deck([card_id])
        res.sendStatus(200)
    }
}