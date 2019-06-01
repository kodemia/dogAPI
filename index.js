
const express = require('express')
const cors = require('cors')

const dog = require('./usecases/dog')

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'TODO CHIDO!'
  })
})

app.get('/dogs', async (req, res) => {
  const allDogs = await dog.getAll()

  res.json({
    success: true,
    message: 'HEY QUE TAL!',
    payload: {
      dogs: allDogs
    }
  })
})

app.post('/dogs', async (req, res) => {
  const {
    name,
    gender,
    age,
    breed
  } = req.body

  await dog.create({ name, gender, age, breed })

  res.json({
    success: true,
    message: 'Dog created'
  })
})

app.delete('/dogs/:id', async (req, res) => {
  const { id } = req.params
  if (isNaN(id)) {
    res.status = 400
    return res.json({
      success: false,
      message: 'id is NaN'
    })
  }

  const deletedDog = await dog.deleteLogically(id)

  res.json({
    success: true,
    message: `DogId ${id} deleted`,
    payload: deletedDog
  })
})

app.put('/dogs/:id', async (req, res) => {
  const { id } = req.params
  if (isNaN(id)) {
    res.status = 400
    return res.json({
      success: false,
      message: 'id is NaN'
    })
  }
  try {
    const dogAdopted = await dog.adopt(id)
    res.json({
      success: true,
      message: 'Dog adopted :3',
      payload: dogAdopted
    })
  } catch (error) {
    res.status = 400
    res.json({
      success: false,
      message: 'Dog cannot be adopted',
      error: error.message
    })
  }
})

app.listen(8080, () => {
  console.log('el servidor esta funcionando')
})
