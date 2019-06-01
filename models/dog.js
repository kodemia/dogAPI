const { Model } = require('objection')
const db = require('../lib/db')

Model.knex(db.knex)

class Dog extends Model {
  static get tableName () {
    return 'dog'
  }

  static get jsonSchema () {
    return {
      type: 'object',
      require: ['name', 'age', 'breed', 'gender'],
      properties: {
        name: {
          type: 'string'
        },
        age: {
          type: 'number'
        },
        breed: {
          type: 'string'
        },
        gender: {
          type: 'string'
        },
        isAdopted: {
          type: 'boolean'
        },
        isDeleted: {
          type: 'boolean'
        }
      }
    }
  }
}

module.exports = Dog
