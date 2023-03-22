const mongoose = require('mongoose');

const schema = mongoose.Schema;

const MessageSchema = new Schema({
  user: {type: String, required: true},
  message: {type: String, required: true},
  added: {type: Date}
})

module.exports = mongoose.model('Message',MessageSchema)