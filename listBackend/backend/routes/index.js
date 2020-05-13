var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  // service: 'gmail',
  auth: {
    user: 'shoppinglist55555',
    pass: 'Ozekishoppinglist5'
  },
  secureConnection: 'false',
  tls: {
    rejectUnauthorized: false,
  }
});

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});


router.post('/send', (req, res, next) => {
  var name = req.body.name
  var content = `name: ${name}` 


  var mail = {
    from: 'shoppinglist55555@gmail.com',
    to: "anna.jarocinska5@gmail.com",
    subject: 'New Message from Contact Form',
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: 'fail'
      })
    } else {
      res.json({
        msg: 'success'
      })
    }
  })
})


module.exports = router;
