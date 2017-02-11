module.exports = {

  users: [
    {
      id: 0,
      screenName: 'test',
      selected: false,
      buddies: []
    }, {
      id: 1,
      screenName: 'other',
      selected: false,
      buddies: []
    }, {
      id: 2,
      screenName: 'sKa4LyfE',
      selected: false,
      buddies: []
    }, {
      id: 3,
      screenName: 'hoMie4u',
      selected: false,
      buddies: []
    }, {
      id: 4,
      screenName: 'sk8erz',
      selected: false,
      buddies: []
    }
  ],

  getAll() {
    return Promise.resolve(this.users.slice())
  },

  selectUser(selectedUser) {
    console.log(selectedUser)
    console.log(this.users)
    selectedUser = this.users.filter((user) => ((user.screenName.indexOf(selectedUser) > -1) ? user : null))
    console.log(selectedUser)
    selectedUser[0] = Object.assign({}, selectedUser[0], {
      selected: true
    })
    console.log(selectedUser)
    return Promise.resolve(selectedUser)
  }

}
