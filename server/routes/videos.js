var express = require('express');
var router = express.Router();
const controller = require('../controllers/user')
const auth = require('../middleware/authentication.js')
const Video = require('../models/video')

router.post('/liked', (req, res)=>{
  Video.create({
    videoId: req.body.id,
    userId: req.body.userId
  })
  .then((result) => {
    res.status(200).json(result)
  }).catch((err) => {
    res.status(500).json(err)
  });
})

// router.get('/', function(req, res) {
//   res.send('respond with a resource');
// });

module.exports = router;
