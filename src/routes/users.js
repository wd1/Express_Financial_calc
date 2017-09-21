import express from 'express';
import passport from 'passport';
import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken';

const router = express.Router();
const LocalStrategy = require('passport-local').Strategy;

import { createUser, isExistUser, getUserByEmail, getUserById, comparePassword, resetPasswordToken } from '../models/user';
import { emailConfig, domainConfig, jwtSecret, admin } from '../config';






var mailTransporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: emailConfig.username,
    pass: emailConfig.password
  }
});



// Sign Up
router.get('/signup', function(req, res, next) {

  res.render('users/signup/index', {
    title: 'Sign Up'
  });
});

router.post('/signup', function(req, res) {

  let { firstname, lastname, email, company, jobfunction, password, password2 } = req.body;

  req.checkBody('firstname', 'Firstname field is required').notEmpty();
  req.checkBody('lastname', 'Lastname field is required').notEmpty();
	req.checkBody('email', 'Email field is required').notEmpty();
	req.checkBody('email', 'Email not valid').isEmail();
  req.checkBody('jobfunction', 'Job function field is required').notEmpty();
	req.checkBody('password', 'Password field is required').notEmpty();
	req.checkBody('password2', 'Password do not match').equals(password);

  let signupDate = new Date();

  let errors = null;

  req.getValidationResult().then( result => {
    if (!result.isEmpty()) {

      errors = result.array();

      res.render('users/signup/index', { errors, firstname, lastname, email, company, jobfunction, title: 'Sign Up' });

    } else {

  		let newUser = { firstname, lastname, email, password, company, jobfunction, signupDate };

      isExistUser(email, isExist => {

        if(isExist) {
          req.flash('error', 'This email already exists. Please select another email.');

          res.render('users/signup/index', { firstname, lastname, email, company, jobfunction, title: 'Sign Up' });

        } else {
          createUser(newUser, (results, temporaryToken) => {

            var emailOptions = {
              from: emailConfig.serviceName + ' <'+ emailConfig.serviceEmail +'>',
              to: email,
              subject: domainConfig + ' Activation Link',
              text: 'Hello '+firstname+',Thank you for your registering at '+ domainConfig +'. Please click on the link to complete your activation: '+domainConfig+'/activate/'+temporaryToken,
              html: 'Hello <strong>'+firstname+'</strong>,<br><br>Thank you for your registering at '+ domainConfig +'. Please click on the link to complete your activation: <br><br><a href="'+domainConfig+'/activate/'+temporaryToken+'">'+domainConfig+'/activate</a>'
            }

            mailTransporter.sendMail(emailOptions, (error, info) => {
              if(error) {
                console.log(error);
              }
              else {
                console.log('Message Sent: '+info.response);
                res.render('users/signup/confirmation', { title: 'Signup Confirmation' });
              }
            });

          });
        }
      });

  	}
  });

});




// Login
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  getUserById(id, user => {
    done(null, user);
  });
});

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  }, (email, password, done) => {

		getUserByEmail(email, user => {

			if(!user) {
				console.log('Unknown User');
				return done(null, false, { message: 'Invalid email or password' });
			}
			comparePassword(password, user.password, (err, isMatch) => {
				if(err) console.log(err);
				if(isMatch) {
          if(!user.enabled) {
            console.log('Sorry, Your account is disabled');
            return done(null, false, { message: "Please contact administrator at <a href='mailto:info@bench805.com' title='info@bench805.com'>info@bench805.com</a> regarding your account"});
          } else if(!user.active) {
            console.log('Not activated yet');
            return done(null, false, { message: 'Your account is not yet activated. Please check your e-mail for activation link.'});
          } else {

            return done(null, user);
          }
				} else {
					console.log('Invalid Password');
					return done(null, false, { message: 'Invalid email or password'});
				}
			});

		});
	}
));


router.get('/login', (req, res, next) => {

  res.render('users/login', {
    title: 'Log In'
  });
});

router.post('/login', passport.authenticate('local', {
  	failureRedirect: '/users/login',
    failureFlash: true
  }), (req, res) => {
	console.log('Authentication Successful');

  // var hour = 3600000;
  // req.session.cookie.expires = new Date(Date.now() + hour);
  // req.session.cookie.maxAge = hour;

  if(req.user.email === admin.email) {
    res.redirect('/admin');
  } else {
    res.redirect('/dashboard');
  }

});




// Reset Password
router.get('/resetpassword', function(req, res, next) {
  res.render('users/resetpassword/index', {
    title: 'Reset password. Step one'
  });
});

router.post('/resetpassword', (req, res) => {
  let { email } = req.body;

	req.checkBody('email', 'Email field is required').notEmpty();
	req.checkBody('email', 'Email not valid').isEmail();

  req.getValidationResult().then( result => {
    if (!result.isEmpty()) {

      let errors = result.array();
      let errorsText = errors.map(error => error.msg);

      req.flash('error', errorsText);
      res.redirect('/users/resetpassword');

    } else {
      getUserByEmail(email, user => {

        if(!user) {
          req.flash('error', 'Email not found');
          res.redirect('/users/resetpassword');

        } else if(!user.active) {
          req.flash('error', 'Account has not activated');
          res.redirect('/users/resetpassword');
        } else {

          let resetToken = jwt.sign({ email: user.email }, jwtSecret, { expiresIn: '24h'});
          resetPasswordToken(user.id, resetToken, () => {
            var emailOptions = {
              from: emailConfig.serviceName + ' <'+ emailConfig.serviceEmail +'>',
              to: user.email,
              subject: 'Reset Password Request',
              text: 'Hello '+user.firstname+', You recently request a password reset link. Please click on the following link to complete your activation: '+ domainConfig +'/resetpassword/'+resetToken,
              html: 'Hello <strong>'+user.firstname+'</strong>,<br><br>You recently request a password reset link. Please click on the following link to complete your activation: <br><br><a href="'+ domainConfig +'/resetpassword/'+resetToken+'">'+ domainConfig +'/resetpassword/</a>'
            }
            mailTransporter.sendMail(emailOptions, (error, info) => {
              if(error) {
                console.log(error);
              }
              else {
                console.log('Message Sent: '+info.response);

                res.render('users/resetpassword/email_sent', {title: 'Reset password. Email sent'})
              }
            });

          })
        }
      });
    }

  });

});









router.get('/reset_password_congratulation', function(req, res, next) {
  res.render('users/reset_password_congratulation', {
    title: 'Reset password | Congratulations'
  });
});

router.get('/reset_password_fields', function(req, res, next) {
  res.render('users/reset_password_fields', {
    title: 'Reset password | Fields'
  });
});

router.get('/reset_password_sent', function(req, res, next) {
  res.render('users/reset_password_sent', {
    title: 'Reset password | Email sent'
  });
});




export default router;
