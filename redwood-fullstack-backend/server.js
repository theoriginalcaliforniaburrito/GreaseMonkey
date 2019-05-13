const express       = require('express');
const usersRoutes   = require('./routes/users');
const bodyParser    = require('body-parser');
const nodemailer    = require('nodemailer');
// const exphbs        = require('express-handlebars');
const path          = require('path');
const app           = express();
const port= 5000;

require('dotenv').config()
require('./config/db')
// app.engine('handlebars', exphbs());
// app.set('view engine', 'handlebars');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))
app.use('/users', usersRoutes);
app.get('/', (req,res) => {
    res.render('contact')
})


app.post('/contactclient',(req, res) => {
    const output = `
    <h3>Contact Details</h3>
    <ul>
    <li>Name: ${req.body.name}</li>
    <li>Email: ${req.body.email}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
    `
    let transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
            user: 'rowena40@ethereal.email',
            pass: 'XBpxzbBZQ5EZgHH7H8'
        },
        tls:{
            rejectUnauthorized: false
        }
      })

      let mailOptions = {
          from: '"Nodemailer contact"<rowena40@ethereal.email>',
          to: 'theoriginalcaliforniaburrito@gmail.com',
          replyTo: 'rowena40@ethereal.email',
          subject: 'New Message',
          text: 'hello world',
          html: output
      }
      transporter.sendMail(mailOptions,(error, info) => {
          if (error) {
              return console.log(error)
          }
          console.log('Message sent: %s', info.messageId)
          console.log('Message URL: %s', nodemailer.getTestMessageUrl(info));
          res.render('contactclient', {msg: 'Email has been sent'})
      })
    })

const PORT = process.env.PORT || port

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));

module.exports = app;