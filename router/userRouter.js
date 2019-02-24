const router = require('express').Router();


const registerUser = require('../../testLear/controllers/user/registerUser')
const loginUser = require('../../testLear/controllers/user/loginUser')

router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;
