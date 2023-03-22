const mongoose = require('mongoose');
const {DateTime} = require("luxon");

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  user: {type: String, required: true},
  message: {type: String, required: true},
  added: {type: Date}
})

MessageSchema.virtual('added_format').get(function() {
  return DateTime.fromJSDate(this.added).toLocaleString(DateTime.DATE_MED)

});
module.exports = mongoose.model('Message',MessageSchema)