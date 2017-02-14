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
    return knex.select('id', 'screen_name').from('users')
      .then(users => users.map(({ id, screen_name }) => ({ id, screenName: screen_name })))
      .then(users => Promise.resolve(users))
  },

  selectUser({ selectedUser }) {
    // console.log(selectedUser) // eslint-disable-line
    return knex
      .where('screen_name', selectedUser)
      .update({ selected: true })
      .returning('id', 'screen_name', 'selected')
      .then(users => console.log(users)) // eslint-disable-line
      .then(users => users.map(({ id, screen_name, selected }) => ({ id, screenName: screen_name, selected })))
      .then(users => Promise.resolve(users))
    // this.users.forEach(user => {
    //   if(user.screenName.indexOf(selectedUser) > -1) {
    //     user.selected = true
    //   }
    // })
    // return Promise.resolve(this.users)
  },

  deselectUser() {
    this.users.forEach(user => {
      if(user.selected) {
        user.selected = false
      }
    })
    return Promise.resolve(this.users)
  }

}
