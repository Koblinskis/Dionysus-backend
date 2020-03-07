const mongoose = require('mongoose')

const uDataSchema = new mongoose.Schema({
  title: {
    type: String,
  }
})

const UData = mongoose.model('Udata', uDataSchema)

module.exports = UData