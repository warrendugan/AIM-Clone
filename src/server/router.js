const { Router } = require('express')
const users = require('./users')

const router = new Router()

router.get('/', (req, res) => {
  users
    .getAll()
    .then(users => res.json(users))
})

router.post('/', ({ body }, res) => {
  users
    .selectUser(body)
    .then(selectedUser => res.status(201).json(selectedUser))
})

router.post('/undo', (req, res) => {
  users
    .deselectUser()
    .then(users => res.status(201).json(users))
})

module.exports = router
