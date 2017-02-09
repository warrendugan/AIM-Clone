module.exports = {

  nextId: 2,

  collection: [{
    id: 1,
    timestamp: new Date().toJSON(),
    screenName: 'sKa4lYf'
  }],

  getAll() {
    return Promise.resolve(this.collection.slice())
  },

  addOne(newUser) {
    const user = Object.assign({}, newUser, {
      id: this.nextId++,
      timestamp: new Date().toJSON()
    })
    this.collection.push(user)
    return Promise.resolve(user)
  }

}
