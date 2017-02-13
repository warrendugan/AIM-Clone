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

  selectUser({ selectedUser }) {
    this.users.forEach(user => {
      if(user.screenName.indexOf(selectedUser) > -1) {
        user.selected = true
      }
    })
    return Promise.resolve(this.users)
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
