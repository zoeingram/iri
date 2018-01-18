const passport = require('passport');
const brcrypt = require('brcrypt');
const LocalStrategy = require('passport-local').Strategy;

const user = {
  username: 'test-user',
  passwordHash: 'brcrypt-hashed-password',
  id: 1
}


passport.use(new LocalStrategy)
