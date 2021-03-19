const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.signup = async (req, res, next) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  try {
    const userDoc = await User.findOne({email: email});
    if (userDoc) {
      console.log('[USER FOUND]')
      return
    }

    const hashPass = await bcrypt.hash(password, 12);
    const newUser = new User({
      username: username,
      email: email,
      password: hashPass
    })
    const saveUser = await newUser.save();
    res.status(201).json({message: 'User created'})
  } catch (e) {
    console.log(e);

  }
}

exports.login = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  try {
    const userDoc = await User.findOne({email: email})
    if (!userDoc) {
      console.log('[EMAIL DOES NOT EXISTS]')
      return
    }
    const checkCorrectPassword = await bcrypt.compare(password, userDoc.password);
    if (!checkCorrectPassword) {
      console.log('[Wrong Password]');
      res.status(401).json({message: '[Wrong Password!!!]'})
      return
    }

    console.log('[YOU ARE LOGGED IN]')
    const token = jwt.sign({
      userId: userDoc._id.toString(),
      email: userDoc.email,
    }, 'somesupersecretsecret', {expiresIn: '1h'});
    res.status(200).json({token: token, userId: userDoc._id,email: userDoc.email, username: userDoc.username })
  } catch (e) {
    console.log('[ERROR] ', e)
  }
}
