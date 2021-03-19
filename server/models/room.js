const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roomSchema = new Schema({
    roomUsers: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }],
    messages: [{
      type: Schema.Types.ObjectId,
      ref: 'Message'
    }]
}, {timestamps: true})

module.exports = mongoose.model('Room', roomSchema);
