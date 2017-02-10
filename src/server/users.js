module.exports = {

  users: [
    {
      id: 1,
      screenName: 'test',
      selected: false,
      buddies: []
    }, {
      id: 2,
      screenName: 'other',
      selected: false,
      buddies: []
    }, {
      id: 3,
      screenName: 'sKa4LyfE',
      selected: false,
      buddies: []
    }, {
      id: 4,
      screenName: 'hoMie4u',
      selected: false,
      buddies: []
    }, {
      id: 5,
      screenName: 'sk8erz',
      selected: false,
      buddies: []
    }
  ],

  getAll() {
    return Promise.resolve(this.users.slice())
  },

  selectUser(selectedUser) {
    const user = Object.assign({}, selectedUser, {
      selected: true
    })
    return Promise.resolve(user)
  }

}
