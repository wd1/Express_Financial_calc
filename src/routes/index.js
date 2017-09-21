import express from 'express';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';
const router = express.Router();
import { getUserByTemporaryToken, activateAccount, getUserByResetToken, resetPasswordByToken } from '../models/user';
import { jwtSecret, emailConfig } from '../config';
import { ensureAuthenticated, ensureAdmin } from '../common/authGuard';


var mailTransporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: emailConfig.username,
    pass: emailConfig.password
  }
});



router.get('/', function(req, res, next) {
  res.render('index', { title: 'Purchase Price Allocations Visualized Through Benchmarking' });
});

router.get('/activate/:token', (req, res) => {

  let token = req.params.token;

  console.log('token', token);

  getUserByTemporaryToken(token, user => {

    jwt.verify(token, jwtSecret, (err, decoded) => {

      if(err) {

        req.flash('error', 'Activation link has expires');
        res.redirect('/users/signup/index');

      } else if(!user) {
        req.flash('error', 'Activation link has expires');
        res.redirect('/users/signup/index');
      } else {

        activateAccount(token, () => {

          var emailOptions = {
            from: emailConfig.serviceName + ' <'+ emailConfig.serviceEmail +'>',
            to: user.email,
            subject: 'Your Account Activated',
            text: 'Hello '+user.firstname+', Your account has been successfully activated!',
            html: 'Hello <strong>'+user.firstname+'</strong>,<br><br>Your account has been successfully activated!'
          }

          mailTransporter.sendMail(emailOptions, (error, info) => {
            if(error) {
              console.log(error);
            } else {
              console.log('Message Sent: '+info.response);

              res.render('users/signup/congratulation', {title: 'Congratulations'});
            }
          });
        })

      }

    });
  });
});

router.get('/resetpassword/:token', (req, res) => {

  let token = req.params.token;

  getUserByResetToken(token, user => {

    jwt.verify(token, jwtSecret, (err, decode) => {

      if(err) {

        req.flash('error', 'Reset password link has expires');
        res.redirect('/users/resetpassword');

      } else if(!user) {
        req.flash('error', 'Reset passwprd link has expires');
        res.redirect('/users/resetpassword');
      } else {

        res.render('users/resetpassword/save_password', { token, title: 'Reset password. Fields' });

      }
    });

  });

});

router.post('/savepassword', (req, res) => {

  let { password, password2, token } = req.body;

	req.checkBody('password2', 'Password do not match').equals(password);

  req.getValidationResult().then( result => {
    if (!result.isEmpty()) {

      let errors = result.array();
      let errorsText = errors.map(error => error.msg);

      req.flash('error', errorsText);
      res.redirect('/resetpassword/'+token);

    } else {

      getUserByResetToken(token, user => {

        jwt.verify(token, jwtSecret, (err, decode) => {

          if(err) {

            req.flash('error', 'Reset password link has expires');
            res.redirect('/users/resetpassword');

          } else if(!user) {
            req.flash('error', 'Reset passwprd link has expires');
            res.redirect('/users/resetpassword');
          } else {

            resetPasswordByToken(password, token, () => {

              res.render('users/resetpassword/congratulation', { title: 'Reset password. Congratulations' });

            });


          }
        });

      });

    }
  });
});

router.get('/logout', (req, res) => {
	req.logout();
	res.redirect('/users/login');
});



router.get('/results_table', ensureAuthenticated, (req, res) => {
  res.render('index/results_table', {title: 'Result'});
});


router.get('/about', (req, res) => {
  res.render('index/about', {title: 'About'});
});

router.get('/terms_of_service', (req, res) => {
  res.render('index/terms_of_service', {title: 'Terms of service'});
});

router.get('/privacy_policy', (req, res) => {
  res.render('index/privacy_policy', {title: 'Privacy Policy'});
});



export default router;
