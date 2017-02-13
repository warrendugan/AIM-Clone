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
    .then(selectedUser => res.status(200).json(selectedUser))
})

router.put('/undo', (req, res) => {
  users
    .deselectUser()
    .then(users => res.status(200).json(users))
})

module.exports = router
