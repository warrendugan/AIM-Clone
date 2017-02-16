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
      .select('id', 'screen_name', 'selected')
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
  },

  addBuddy({ buddy }) {
    return knex('users')
      .select('id')
      .where({ screen_name: buddy })
      .then(users => users.map(({ id: buddyId }) => ({ buddyId })))
      .then(users => users[0])
      .then(({ buddyId }) => {
        return knex('users')
          .select('id')
          .where({ selected: true })
          .then(users => users.map(({ id: selectedUserId }) => ({ selectedUserId, buddyId})))
          .then(users => users[0])
      })
      .then(({ selectedUserId, buddyId }) => {
        buddyId = Number(buddyId)
        return knex('buddies')
          .insert({ buddy_id: buddyId })
          .then(() => {
            return knex('buddies')
              .update({ user_id: selectedUserId })
              .where({ buddy_id: buddyId })
          })
      })
      .then(() => {
        return knex('buddies')
          .select('buddy_id')
          .then(buddies => buddies.map(({ buddy_id }) => buddy_id))
          .then(buddies => Promise.resolve(buddies))
      })
  },

  getBuddies() {
    return knex('users')
      .select('id')
      .where({ selected: true })
      .then(users => users.map(({ id: selectedUserId }) => ({ selectedUserId })))
      .then(users => users[0])
      .then(({ selectedUserId }) => {
        console.log(selectedUserId) // eslint-disable-line
        return knex('buddies')
          .select('buddy_id')
          .where({ user_id: selectedUserId})
          .then(buddies => buddies.map(({ buddy_id }) => buddy_id))
          .then(buddies => Promise.resolve(buddies))
      })
      // .catch(() => Promise.resolve(null))
  }
}
