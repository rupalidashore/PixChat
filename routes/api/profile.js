const express = require('express');
const router = express.Router();


// @route   GET api/profile
// @desc    Get current users profile
// @access  Private

router.get('/test', (req,res)=> res.json({msg:'profile route works!'}));
module.exports = router;
