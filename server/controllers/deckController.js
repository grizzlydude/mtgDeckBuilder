module.exports = {
    getAllDecks: async (req, res) => {
        const db = req.app.get('db')
        const { title, user_id, card_id } = req.body
        const allDecks = await db.find_all_decks([user_id])
        res.status(200).send(allDecks)
    },
    getSingleDeck: async(req, res) => {
        db = req.app.get('db')
        const { title, user_id, card_id } = req.body
        const singleDeck = await db.find_single_deck([user_id])
        res.status(200).send(singleDeck)

    },
    addDeck: (req, res) => {
        const db = req.app.get('db')
        const { title, user_id } = req.body
        const addDeck = db.insert_deck([title, user_id])
        res.status(200).send(addDeck)
    },
    // editDeck: (req, res) => {

    // },
    deleteDeck: async (req, res) => {
        const db = req.app.get('db')
        const { deck_id, title, user_id } = req.body
        const deleteDeck = await db.delete_deck([deck_id])
        res.sendStatus(200)
    }
}