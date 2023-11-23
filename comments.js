//create web server
const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Comment = require('./models/comment');
const User = require('./models/user');
const Post = require('./models/post');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
app.use(bodyParser.json());
app.use(cors());

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/comments', { useNewUrlParser: true, useUnifiedTopology: true });

//create a route for get all comments
app.get('/comments', async (req, res) => {
    try {
        let comments = await Comment.find();
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//create a route for get a comment by id
app.get('/comments/:id', getComment, (req, res) => {
    res.status(200).json(res.comment);
});

//create a route for create a comment
app.post('/comments', async (req, res) => {
    const comment = new Comment({
        text: req.body.text,
    });
});