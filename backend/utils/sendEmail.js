var nodemailer = require('nodemailer');

function generateOTP() {
          
  // Declare a digits variable 
  // which stores all digits
  var digits = '0123456789';
  let OTP = '';
  for (let i = 0; i < 4; i++ ) {
      OTP += digits[Math.floor(Math.random() * 10)];
  }
  return OTP;
}

let otp = generateOTP()


module.exports = async (email, subject, text) => {

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'raveem80@gmail.com',
      pass: 'dopxliaoryjthbjj'
    }
  });

  var mailOptions = {
    from: process.env.USER,
    to: email,
    subject: 'OTP(OneTimePassword)',
    text: `To verifiy your account please enter "${otp}" as your(OneTimePassword)in our site`
  };

  transporter.sendMail({
    from: process.env.USER,
    to: email,
    subject: 'OTP(OneTimePassword)',
    text: `To verifiy your account please enter "${otp}" as your(OneTimePassword)in our site`
  }, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  })
};