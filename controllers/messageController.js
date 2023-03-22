const Message = require('../model/message');

exports.message_list = ( req , res, next) => {
  Message.find({})
    .sort({added: 1})
    .exec(function (err, message_list){
      if( err ){
        return next(err);
      }

      res.render('index', {
        title: 'Mini Message Board',
        messages: message_list,
      })
    })
}

// create
exports.message_create = ( req , res, next) => {
  console.log(req.body.mesasge );  
  messageCreate(req.body.user,req.body.message);
  res.send('message created: ')
}
async function messageCreate(user,message) {
  const newMesasge = new Message({user: user, message: message});
  await newMesasge.save();
  console.log(`Added message: ${message}`);
}