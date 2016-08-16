var express = require('express');
var router = express.Router();
var passport = require('passport');
var csrf = require('csurf');
var Product = require('../models/product');

var csrfProtection = csrf();
router.use(csrfProtection);


router.get('/signup', function(req, res, next){
    var messages = req.flash('error');
    res.render('user/signup', { csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0 })
});

router.get('/profile', isLoggedIn, function(req, res, next){
    res.render('user/profile');
});

router.get('/logout', function(req, res, next){
    req.logout();
    res.redirect('/');
});

router.get('/signin', function(req, res, next){
    var messages = req.flash('error');
    res.render('user/signin', { csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0 })
});

router.post('/signin', passport.authenticate('local.signin', {
    successRedirect: '/user/profile',
    failureRedirect: '/user/signup',
    failureFlash: true
}));

router.post('/signup', passport.authenticate('local.signup', {
    successRedirect: '/user/profile',
    failureRedirect: '/user/signup',
    failureFlash: true
}));

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }

    res.redirect('/');
}

module.exports = router;
