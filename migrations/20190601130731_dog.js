
const TABLE_NAME = 'dog'

exports.up = async (knex) => {
  const tableAlreadyExists = await knex.schema.hasTable(TABLE_NAME)
  if (tableAlreadyExists) return knex

  return knex.schema.createTable(TABLE_NAME, (table) => {
    table.increments('id')

    table.string('name', 20)
    table.integer('age')
    table.string('breed', 20)
    table.string('gender')
    table.boolean('is_adopted').defaultTo(false)

    table.boolean('is_deleted').defaultTo(false)
  })
}

exports.down = (knex) => knex.schema.dropTableIfExists(TABLE_NAME)
