const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  rooms: [{
    type: Schema.Types.ObjectId,
    ref: 'Room',
  }]
}, {timestamps: true});

module.exports = mongoose.model('User', userSchema);
