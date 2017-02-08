const { Router } = require('express')
const users = require('./users')

const router = new Router()

router.get('/users', (req, res) => {
  users
    .getAll()
    .then(notes => res.json(users))
})

router.post('/users', ({ body }, res) => {
  users
    .addOne(body)
    .then(newUser => res.status(201).json(newUser))
})

module.exports = router
