module.exports = {
  client: 'mysql2',
  connection: {
    host: 'localhost',
    user: 'root',
    database: 'dogs'
  },
  migrations: {
    tableName: 'knex_migrations'
  }
}
