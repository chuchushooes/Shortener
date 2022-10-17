const mongoose = require('mongoose')
const Schema = mongoose.Schema
const recordSchema = new Schema ({
  baseurl: {
    type: String,
    require: true
  },
  reurlCode: {
    type: String
  }
})

module.exports = mongoose.model('Records', recordSchema)