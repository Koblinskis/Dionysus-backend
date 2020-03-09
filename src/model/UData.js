const mongoose = require('mongoose')

const uDataSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  listItems: [{
    item: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Users'
  }
})

const UData = mongoose.model('UData', uDataSchema)

module.exports = UData