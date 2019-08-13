const bcrypt = require('bcryptjs')

module.exports = {
    login: async (req, res) => {
        const db = req.app.get('db')
        const { user_id, username, email, password } = req.body
        console.log('username: ', username)
        console.log('')
        console.log('email: ', email)
        console.log('password: ', password)
        console.log('')
        const user = await db.find_user([username, email, password])
        console.log('user: ', user)
        console.log('')
        if (user.length > 0) {
            res.status(201).send({ loggedIn: true })
        } else {
            res.status(401).send({ loggedIn: false })
        }
    },
    register: async (req, res) => {
        const db = req.app.get('db')
        const { username, email, password } = req.body
        console.log('username: ', username)
        console.log('')
        const user = await db.find_user([username, email, password])
        console.log('user: ', user)
        console.log('')
        if (user.length > 0) {
            return res.status(400).send({ Register: false })
        }
        const salt = bcrypt.genSaltSync(11)
        const hash = bcrypt.hashSync(password, salt)
        const newUser = await db.insert_user([username, email, password])
        console.log('newUser: ', newUser)
        console.log('')
        db.insert_hash({ hash, user_id: newUser[0].user_id })
            .then(() => {
                req.session.user = newUser[0]
                console.log('session: ', req.session.user)
                res.status(200).send({
                    message: 'Register Complete',
                    user: req.session.user,
                    loggedIn: true
                })
            }).catch(err => res.status(500).send({message: 'Failed to Register.'}))
        
    }
}
