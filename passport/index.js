const passport = require('passpoart');
const KakaoStrategy = require('passport-kakao').Strategy;
const { User } = require('../models')

module.exports = (app) => {
    app.use(passport.initialize()); //
}