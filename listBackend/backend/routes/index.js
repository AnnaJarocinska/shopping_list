const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
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
  const fruits = req.body.fruits
  const vegetables = req.body.vegetables
  const dairy = req.body.dairy
  const meatAndFish = req.body.meatAndFish
  const dryGoods = req.body.dryGoods
  const householdItems = req.body.householdItems
  const others = req.body.others

  const content = `
  Fruits: ${fruits}
  Vegetables: ${vegetables}
  Dairy: ${dairy}
  Meat and fish: ${meatAndFish}
  Dry goods: ${dryGoods}
  Household items: ${householdItems}
  Others: ${others}
  `


  const mail = {
    from: 'shoppinglist55555@gmail.com',
    to: "anna.jarocinska5@gmail.com",
    subject: 'Shopping list',
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
