const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

const MONGODB_URI = 'mongodb://localhost/social_app?retryWrites=true';

const authRoutes = require('./routes/auth');
const chatRoutes = require('./routes/chat_routes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
	next();
})

app.use(authRoutes);
app.use(chatRoutes);

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedToplogy: true})
	.then(result => {
		app.listen(8080);
		console.log('SERVER RUNNING [8080]');
	})
	.catch(error => {
		console.log('[ERROR AT ITS BEST] ',error);
	})
