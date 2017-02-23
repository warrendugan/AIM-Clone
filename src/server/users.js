const knex = require('knex')({
  client: 'postgresql',
  connection: {
    user: 'warren',
    database: 'aiming'
  }}
)

module.exports = {

  getAll() {
    return knex('users')
      .select('id', 'screen_name')
      .then(users => users.map(({ id, screen_name }) => ({ id, screenName: screen_name })))
  },

  addBuddy({ buddy, selectedUser }) {
    return knex('users')
      .select('id', 'screen_name')
      .where({ screen_name: buddy })
      .orWhere({ screen_name: selectedUser })
      .then(users => {
        return users.reduce((pairing, user) => {
          if(user.screen_name === selectedUser) {
            pairing.user_id = user.id
          } else {
            pairing.buddy_id = user.id
          }
          return pairing
        }, {})
      })
      .then(pairing => {
        return knex('buddies')
          .insert(pairing)
          .then(() => {
            return knex('buddies')
              .select('buddy_id')
              .where({ user_id: pairing.user_id })
          })
          .then(buddies => {
            return buddies.map(({ buddy_id }) => buddy_id)
          })
      })
  },

  getBuddies({ currentUser }) {
    return knex
      .select('b.id', 'b.screen_name')
      .from('users as b')
      .join('buddies', 'buddies.buddy_id', '=', 'b.id')
      .join('users as u', 'buddies.user_id', '=', 'u.id')
      .where('u.screen_name', currentUser)
      .then(users => users.map(({ id, screen_name }) => ({ id, screenName: screen_name })))
  }
}
