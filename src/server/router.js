const { Router } = require('express')
const users = require('./users')

const router = new Router()

router.get('/', (req, res) => {
  users
    .getAll()
    .then(users => res.json(users))
})

router.put('/', ({ body }, res) => {
  users
    .selectUser(body)
    .then(users => res.status(200).json(users))
})

router.put('/undo', (req, res) => {
  users
    .deselectUser()
    .then(users => res.status(200).json(users))
})

router.post('/addBuddy', ({ body }, res) => {
  users
    .addBuddy(body)
    .then(buddies => res.status(201).json(buddies))
})

router.get('/buddies', (req, res) => {
  users
    .getBuddies()
    .then(buddies => {
      console.log(buddies) // eslint-disable-line
      return buddies
    })
    .then(buddies => res.status(201).json(buddies))
})

module.exports = router
