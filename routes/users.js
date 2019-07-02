const express= require('express');
const router = express.Router();

// LOGIN page
router.get('/login', (req, res) =>res.render('login'));
// REGISTER page
router.get('/register', (req, res) =>res.render('register'));

// Register handle
router.post('/register', (req, res)=> {
    const { name, email, password, password_ } = req.body;
    console.log(req.body);
    let errors = [];

    //checking
    if(!name || !email || !password || !password_){
        errors.push({ msg: 'Please fill all fields'});
    };
    if(!password.length < 6)
    {
        errors.push({ msg: 'Password are less than 6 characters'});
    };
    if(!password !== password_)
    {
        errors.push({ msg: 'Password doo not match! Are you stupid!'});
    };
    
    if(errors.length > 0){
        res.render('register', {
            errors,
            name,
            email,
            password,
            password_
        });
    } 
    else {
        res.send('Granted');
    };
});
module.exports =  router;