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
    const userDoc = await User.findById(userId)
                            .populate({ path: 'rooms', populate: { path: 'rooms.roomUsers'} })
                            // .exec()
    let populateFields = [];
    const hello = userDoc.rooms.forEach(async(item, i) => {
      const one = await Room.findById(item._id).populate('messages').populate('roomUsers')
      // console.log('[ONE] ', one)
      
    });

    console.log('[USER DOC] ', populateFields);
    const findRoom = userDoc.rooms.find(el => el == userId);
    console.log('[FIND ROOM] ', findRoom);

    if (findRoom) {
      const newMessage = new Message({
        message: message,
        sender: userId,
        receiver: receiver
      })
      const theMessage = await newMessage.save();

      const newRoom = new Room({
        roomUsers: [userId, receiver],
        messages: [theMessage]
      })

      const saveRoom = await newRoom.save();

      const user1 = await User.findById(userId);
      const user2 = await User.findById(receiver);

      const addroom1 = await user1.rooms.push(saveRoom);
      const addroom2 = await user2.rooms.push(saveRoom);

      await user1.save();
      await user2.save();

      console.log('[NEW ROOM CREATED] ', saveRoom);
    }
  } catch (e) {
    console.log('Error 101', e)
  }
}
