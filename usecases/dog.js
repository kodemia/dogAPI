
const Dog = require('../models/dog')

// function getAll () {
//   return Dog.query()
// }
const getAll = () => Dog.query()

const create = (dogData) => {
  return Dog.query().insert(dogData).skipUndefined()
}

const deleteLogically = (dogId) => {
  return Dog.query().patchAndFetchById(dogId, { isDeleted: true })
}

const adopt = async (dogId) => {
  const dog = await Dog.query().findById(dogId)
  const isDeleted = dog.isDeleted
  if (isDeleted) {
    throw new Error('Dog is deleted')
  }
  return Dog.query().patchAndFetchById(dogId, { isAdopted: true })
}

module.exports = {
  getAll,
  create,
  deleteLogically,
  adopt
}
