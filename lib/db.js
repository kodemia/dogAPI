
const Knex = require('knex')
const { knexSnakeCaseMappers } = require('objection')

const knex = Knex({
  client: 'mysql2',
  connection: {
    host: 'localhost',
    user: 'root',
    database: 'dogs'
  },
  ...knexSnakeCaseMappers()
})

module.exports = { knex }
