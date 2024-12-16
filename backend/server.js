require('dotenv').config()

const express = require('express')
const app = express()
const connectDB = require('./db/connect')

const port = process.env.PORT || 8000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('HOME!')
})

app.get('api/v1/users')  // get all users
app.post('api/v1/users') // create new user
app.get('api/v1/users') // get single user
app.patch('api/v1/users') // update a user
app.delete('api/v1/users') // delete a user


const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    app.listen(port, console.log(`Listening on port ${port}... `))
  } catch (error) {
    console.log(error)
  }
}

start()
