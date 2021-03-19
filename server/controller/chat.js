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

exports.getSingleUser = async (req, res, next) => {

  const userId = req.params.id;

  try {
    const userDoc =  await User.findById(userId);
    res.status(200).json({data: userDoc})
  } catch (e) {
    console.log(e)
  }
}

exports.sendMessage = async (req, res, next) => {
  const userId = req.userId;
  const receiver = req.params.id;
  const message = req.body.message;

  console.log('[USER ID] ',userId, '[RECEIVER] ',receiver, '[MESSAGE] ', message);

  try {
    const userDoc = await User.findById(userId);
    const findRoom = userDoc.rooms.find(el => el._id == userId);
    const newMessage = new Message({
      message: message,
      sender: userId,
      receiver: receiver
    })
    const theMessage = await newMessage.save();

    const newRoom = new Room({
      roomUsers: [userId, receiver],
      messages: [message]
    })

    const saveRoom = await newRoom.save();

    console.log('[NEW ROOM CREATED] ', saveRoom);
  } catch (e) {
    console.log('Error 101', e)
  }
}
