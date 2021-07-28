const express = require('express');
const router = express.Router();

// @route   POST api/users/register[call 1st api register]
// @desc    Register a user
//@access   public

router.post('/register', (req,res)=> res.json({msg:'User route works!'}));
module.exports = router;
