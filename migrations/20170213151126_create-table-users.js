exports.up = knex => (knex.schema.createTable('users', table => {
    table.increments('id')
    table.string('screen_name')
    table.boolean('selected')
  }
))

exports.down = knex => (knex.schema.dropTableIfExists('users'))
