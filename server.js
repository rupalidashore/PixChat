const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const nodemailer = require("nodemailer");
const keys = require ('./config/keys');
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express();


//Body parser config
app.use(express.urlencoded());
app.use(express.json());

//Db config
const db = keys.mongoURI;
mongoose
.connect(db)
.then(() => console.log('MongoDb connected'))
.catch(err => console.log(err))

//passport config
app.use(passport.initialize());
require('./config/passport')(passport);



// write our first route


//use routes(path of url)
app.use('/api/users',users);
app.use('/api/profile',profile);
app.use('/api/posts',posts);

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get ('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    }
    
    )
}

const port = process.env.PORT  || 5200;
app.listen(port,() => console.log(`server is running on port ${port}`));