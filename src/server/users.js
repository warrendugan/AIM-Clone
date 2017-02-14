const knex = require('knex')({
  client: 'postgresql',
  connection: {
    user: 'warren',
    database: 'aiming'
  }}
)

//   users: {
//   id: 'increment',
//   screen_name: 'string',
//   selected: 'boolean'
// }
//   buddies: {
//     user_id: 'integer',
//     buddy_id: 'integer'
//   }

module.exports = {

  getAll() {
    return knex.select('id', 'screen_name', 'selected').from('users')
      .then(users => users.map(({ id, screen_name, selected }) => ({ id, screenName: screen_name, selected })))
      .then(users => Promise.resolve(users))
  },

  selectUser({ selectedUser }) {
    return knex('users')
      .update({ selected: true })
      .where('screen_name', selectedUser)
      .then(() => (this.getAll()))
  },

  deselectUser() {
    return knex('users')
      .update({ selected: false })
      .where({ selected: true })
      .then(() => (this.getAll()))
  }
}
