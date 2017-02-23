const { Router } = require('express')
const users = require('./users')

const router = new Router()

router.get('/', (req, res) => {
  users
    .getAll()
    .then(users => res.json(users))
})

router.post('/addBuddy', ({ body }, res) => {
  users
    .addBuddy(body)
    .then(buddyIds => res.status(201).json(buddyIds))
})

router.get('/:currentUser/buddies', ({ params }, res) => {
  users
    .getBuddies(params)
    .then(buddies => res.status(201).json(buddies))
})

module.exports = router
