"use strict";
const passport = require("passport");
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
const { constants } = require(__basedir + "/config");
const { LINKEDIN_CLIENT_ID, LINKEDIN_CLIENT_SECRET, LINKEDIN_CALLBACK_URL } = constants;
const { addUserData } = require("../modules/user/actions");


// Passport session setup.
//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session.  Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing.  However, since this example does not
//   have a database of user records, the complete LinkedIn profile is
//   serialized and deserialized.
passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(obj, done) {
    done(null, obj);
});

passport.use(new LinkedInStrategy({
        clientID: LINKEDIN_CLIENT_ID,
        clientSecret: LINKEDIN_CLIENT_SECRET,
        callbackURL: LINKEDIN_CALLBACK_URL,
        scope: ['r_emailaddress', 'r_liteprofile']
    },
    function(token, tokenSecret, profile, done) {
        // asynchronous verification, for effect...
        process.nextTick(async function () {
            // To keep the example simple, the user's LinkedIn profile is returned to
            // represent the logged-in user.  In a typical application, you would want
            // to associate the LinkedIn account with a user record in your database,
            // and return that user instead.
            const { displayName, photos, emails } = profile;
            const userData = {
                email: emails[0].value,
                name: displayName,
                avatar: photos[photos.length-1].value
            }
            const userInfo= await addUserData(userData);
            return done(null, userInfo.user);
        });
    }
));