exports.development = {
  client: 'postgresql',
  connection: {
    user: 'warren',
    database: 'aiming'
  },
  migrations: {
    directory: './migrations',
    tableName: 'knex_migrations'
  }
}
