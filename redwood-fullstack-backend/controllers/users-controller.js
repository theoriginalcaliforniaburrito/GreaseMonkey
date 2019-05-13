const User          = require('./../models/users');
const { users }     = require('./../data/users');

const index = (req, res) => {
    User.find()
        .exec((err, docs) => {
            if (err) { res.status(500).json({message: `Database error: ${err}`})}
            else if (docs.length === 0) {res.status(404).json({message: 'No users found.'})}
            else { res.status(200).json(docs) }
        })
}

const getById = (req, res) => {
    User.findById(req.params.id)
        .exec((err, user) => {
            if (!user) {
                res.status(404).json({ message: 'Could not find a user with that id' })
            } else if (err) {
                res.status(500).json({ message: `There was an error with our database: ${err}`})
            } else {
                res.status(200).json(user)
            }
        })
}

const getByName = (req, res) => {
    let { name } = req.params
    User.findOne({ name: name })
        .exec((err, user) => {
            if (!user) {
                res.status(404).json({ message: 'Could not find a user with that name' })
            } else if (err) {
                res.status(500).json({ message: `There was an error with our database: ${err}`})
            } else {
                res.status(200).json(user)
            }
        })
}

const getByEmail = (req, res) => {
    let { email } = req.params
    User.findOne({ email: email + '.com' })
        .exec((err, user) => {
            if (!user) {
                res.status(404).json({ message: 'Could not find a user with that name' })
            } else if (err) {
                res.status(500).json({ message: `There was an error with our database: ${err}`})
            } else {
                res.status(200).json(user)
            }
        })
}

const create = (req, res) => {
    let user = { ...req.body }
    User.create(user)
    .then(user => res.status(200).json({ user }))
    .catch(err => res.status(500).json({ Error: err.message }))
}

const update = (req, res) => {
    User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        .exec((err, user) => {
            if(!user) {
                res.status(404).json({ message: 'Could not find user with that id.' })
            } else if (err) {
                res.status(500).json({ message: `There was an error with our database: ${err}` })
            } else {
                res.status(200).json(user);
            }
        })
}

const destroy = (req, res) => {
    User.findByIdAndDelete(req.params.id)
        .exec((err, user) => {
            if(!user) {
                res.status(404).json({ message: 'Could not find user with that id.' })
            } else if (err) {
                res.status(500).json({ message: `There was an error with our database: ${err}`})
            } else {
                res.status(200).json(user);
            }
        })
}

const seedDB = (req, res) => {
    User.create(users)
        .then(users => res.status(200).json({ users }))
        .catch(err => res.status(500).json({ Error: err.message }))
}

module.exports = { index, getById, getByName, getByEmail, create, update, destroy, seedDB }