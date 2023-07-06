// routes/api/users.js

const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
// require the authorization middleware function
const ensureLoggedIn = require('../../config/ensureLoggedIn');


// All paths start with '/api/users'

// POST /api/users
router.post('/', usersCtrl.create);

router.post('/login', usersCtrl.login);

// GET /api/users/check-token
router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);



module.exports = router;