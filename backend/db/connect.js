const mongoose = require('mongoose')

mongoose.set('strictQuery', false) // Or true, based on preference

const connectDB = (url) => {
  return mongoose.connect(url)
}

module.exports = connectDB
