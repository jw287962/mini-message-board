var express = require('express');
var router = express.Router();

const messageController = require('../controllers/messageController');

router.post('/', messageController.message_create);

router.get('/', function(req, res, next) {
  res.render('form', {
    title: 'Form'
  });
});


// router.get('/',)

// router.post('/new', function(req, res, next) {
//   messages.push({text: req.body.message, user: req.body.name, added: new Date()});
//   res.redirect('/');
//  }
//  )
 

module.exports = router;
