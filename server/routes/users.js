var express = require('express');
var router = express.Router();
const controller = require('../controllers/user')
const auth = require('../middleware/authentication.js')

router.post('/signin',controller.signIn)
router.post('/signup',controller.signUp)

router.get('/', function(req, res) {
  res.send('respond with a resource');
});

module.exports = router;
