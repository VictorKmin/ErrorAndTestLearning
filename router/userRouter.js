const router = require('express').Router();


const registerUser = require('../controllers/user/registerUser');
const loginUser = require('../controllers/user/loginUser');
const getUsers = require('../controllers/user/getUsers');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/', getUsers);

module.exports = router;
