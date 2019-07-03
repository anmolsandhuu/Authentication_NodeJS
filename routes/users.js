const express= require('express');
const router = express.Router();

// LOGIN page
router.get('/login', (req, res) =>res.render('login'));
// REGISTER page
router.get('/register', (req, res) =>res.render('register'));

// Register handle
router.post('/register', (req, res)=> {
    
    let errors = [];
    const { name, email, password, password_ } = req.body;
    console.log(req.body);
 

    //checking
    if(!name || !email || !password || !password_){
        errors.push({ "msg": '1231231243'});
    };
    if(!password.length < 6)
    {
        errors.push({ "msg": 'P123123t match! Are you stupid!'});
    };
    if(!password !== password_)
    {
        errors.push({ "msg": 'Password doo n32131e you stupid!'});
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
        res.send('PASSS')
    };
});
module.exports =  router;