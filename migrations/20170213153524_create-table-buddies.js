exports.up = knex => (knex.schema.createTable('buddies', table => {
    table.integer('user_id')
    table.integer('buddy_id')
  }
))

exports.down = knex => (knex.schema.dropTableIfExists('buddies'))
