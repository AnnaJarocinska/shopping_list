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

router.post('/send', (req, res) => {

  const reg = new RegExp(/[A-Z]*\:\s$/);
 
  const fruits = reg.test(req.body.fruits.toString()) ? null : req.body.fruits;
  const vegetables = reg.test(req.body.vegetables.toString()) ? null : req.body.vegetables;
  const dairy = reg.test(req.body.dairy.toString()) ? null : req.body.dairy;
  const meatAndFish = reg.test(req.body.meatAndFish.toString()) ? null : req.body.meatAndFish;
  const dryGoods = reg.test(req.body.dryGoods.toString()) ? null : req.body.dryGoods;
  const householdItems = reg.test(req.body.householdItems.toString()) ? null : req.body.householdItems;
  const cosmetics = reg.test(req.body.cosmetics.toString()) ? null : req.body.cosmetics;
  const babyItems = reg.test(req.body.babyItems.toString()) ? null : req.body.babyItems;
  const others = reg.test(req.body.others.toString()) ? null : req.body.others;
  const email = req.body.email;
  const message = reg.test(req.body.message.toString()) ? null : req.body.message;
  const listName = req.body.listName;

  const isNotNull = (value) => {
    return value !== null;
  }

  const content = [
    listName,
    fruits,
    vegetables,
    dairy,
    meatAndFish,
    dryGoods,
    householdItems,
    cosmetics,
    babyItems,
    others,
    '\r\n',
    message].filter(isNotNull)
    .join("\r\n").toString()

  const mail = {
    from: 'shoppinglist55555@gmail.com',
    to: `${email}`,
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
