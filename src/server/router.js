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

module.exports = router
