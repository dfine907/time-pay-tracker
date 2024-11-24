require('dotenv').config()

const express = require('express')
const app = express()
const connectDB = require('./db/connect')

app.get('/', (req, res) => {
  res.send('HOME!')
})

const port = process.env.PORT || 8000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    app.listen(port, console.log(`Listening on port ${port}... `))
  } catch (error) {
    console.log(error)
  }
}

start()
