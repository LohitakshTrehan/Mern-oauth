const passport = require('passport');
const express = require('express');
const app = express();

module.exports = app => {
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    })
    );

    app.get('/auth/google/callback', passport.authenticate('google'));

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.send(req.user);
    });

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });

    app.get('/auth/facebook', passport.authenticate('facebook', {
        profileFields: ['id', 'name', 'picture.type(large)', 'emails', 'displayName', 'about', 'gender'],
    })
    );

    app.get('/auth/facebook/callback', passport.authenticate('facebook'));



};