const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const mongoose = require('mongoose');


//DB config
const db = require('./config/keys').MongoURI;

//Connection to Mongo
mongoose.connect(db, {useNewUrlParser: true})
    .then(() => console.log('Mongoose Connected Successfully..........'))
    .catch(err => console.log(err));
// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Bodyparser
app.use(express.urlencoded({ extended: false }));

// ROUTES
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));



const PORT = process.env.PORT || 8000;
app.listen(PORT, console.log(`Server is working at port: ${PORT}`));