const express = require('express');
const mongoose = require('mongoose')
const keys = require ('./config/keys')
const users = require('./routes/api/users')
const profile = require('./routes/api/profile')
const posts = require('./routes/api/posts')
const app = express();

//Db config
const db = keys.mongoURI;
mongoose
.connect(db)
.then(() => console.log('MongoDb connected'))
.catch(err => console.log(err))


// write our first route

app.get('/', (req,res) =>res.send('Hello pixchat test1'));

//use routes(path of url)
app.use('/api/users',users);
app.use('/api/profile',profile);
app.use('/api/posts',posts);



const port = 5200; //port number
app.listen(port,() => console.log(`server is running on port ${port}`));