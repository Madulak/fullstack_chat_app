const Message = require('../models/message');
const Room = require('../models/room');
const User = require('../models/user');

exports.getUsers = async (req, res, next) => {

  try {
    const userDoc = await User.find();
    res.status(200).json({data: userDoc})
  } catch(e) {
    console.log(e)
  }
}

exports.sendMessage = async (req, res, next) => {
  const userId = req.user;
  const receiver = req.params.id;
  const message = req.body.message;

  try {
    const userDoc = await User.findById(userId);
    const findRoom = userDoc.room.find(el => el == userId);
    const newMessage = new Message({
      message: message,
      sender: userId,
      receiver: receiver
    })
    const theMessage = await newMessage.save();
  } catch (e) {

  }
}
