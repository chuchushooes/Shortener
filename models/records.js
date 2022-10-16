const mongoose = require('mongoose')
const Schema = mongoose.Schema
const recordSchema = new Schema ({
  url: {
    type: String,
    require: true
  },
  reurl: {
    type: String
  }
})

module.exports = mongoose.model('Records', recordSchema)