const express= require('express');
const router = express.Router();

// LOGIN page
router.get('/', (req, res) => res.render('welcome'));


module.exports = router;