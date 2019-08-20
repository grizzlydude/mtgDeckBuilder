module.exports = {
    getAllDecks: async (req, res) => {
        db = req.app.get('db')
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
        
    },
    // editDeck: (req, res) => {

    // },
    deleteDeck: (req, res) => {
        
    }
}