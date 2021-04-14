const User = require('../models/User');
const {Router} = require('express');

const router = Router();

// /api/users/allUsers
router.get('/allUsers', async (req, res) => {
  try {
    const users = await User.find({});
    return res.json(users);
  } catch (e) {
    res.status(500).json({message: 'Something goes wrong. Try again'});
  }
});

module.exports = router;