const {Router} = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../models/User');
const router = Router();

// /api/auth/register
router.post(
  '/register',
  async (req, res) => {
    try {
      const {login, password, fullName, dateOfBirth, position} = req.body;

      let candidate = await User.findOne({login});

      if (candidate) {
        return res.status(400).json({message: 'User already exists'});
      }

      const hashedPassword = await bcrypt.hash(password, 12);
      const user = new User({login, password: hashedPassword, fullName, dateOfBirth, position});

      await user.save();
      res.status(201).json({message: 'User has been registered'});

    } catch (e) {
      console.log(e);
      res.status(500).json({message: 'Something goes wrong. Try again'});
    }
  })

// /api/auth/login
router.post(
  '/login',
  async (req, res) => {
    try {
      const {login, password} = req.body;

      const user = await User.findOne({login});

      if (!user) {
        return res.status(400).json({message: 'Incorrect login or password'});
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({message: 'Incorrect login or password'});
      }

      const token = jwt.sign(
        {userId: user.id},
        config.get('jwtSecret'),
        {expiresIn: '24h'}
      );

      res.json({token, userLogin: user.login, userId: user.id, resultCode: 0});

    } catch (e) {
      res.status(500).json({message: 'Something goes wrong. Try again'});
    }
  })

module.exports = router;