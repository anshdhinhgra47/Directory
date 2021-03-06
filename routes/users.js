const express = require('express');

const router = express.Router();
const passport = require('passport');
const userController = require('../controllers/user_controller');
// const userSignUp = require('../controllers/user_controller');
// const userSignIn = require('../controllers/user_controller');

router.get('/welcome', userController.user);
router.get('/sign-up', userController.signUp);
router.get('/sign-in', userController.signIn);
router.get('/profile', passport.checkAuthentication, userController.profile);

router.post('/create', userController.create);

//Use passport as a middleware to authenticate
router.post('/create-session',passport.authenticate(
    'local',
     {failureRedirect: '/user/sign-in'},

)  ,userController.createSession);

router.get('/sign-out', userController.destroySession);
module.exports = router;