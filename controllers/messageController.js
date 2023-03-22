const Message = require('../model/message');

exports.message_list = ( req , res, next) => {
  Message.find()
    .sort({added: 1})
    .exec(function (err, message_list){
      if( err )
        return next(err);
      res.render('index', {
        title: 'Mini Message Board',
        message: message_list,
      })
      
    })

}

// create
exports.message_create = ( req , res, next) => {

  
}