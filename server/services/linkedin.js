"use strict";
const LinkedInStrategy = require('passport-linkedin').Strategy;

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
        consumerKey: "86i87bpwt0q2dg",
        consumerSecret: "y9EWPl1tE2P62bM4",
        callbackURL: "http://127.0.0.1:3000/auth/linkedin/callback"
    },
    function(token, tokenSecret, profile, done) {
        // asynchronous verification, for effect...
        process.nextTick(function () {
            // To keep the example simple, the user's LinkedIn profile is returned to
            // represent the logged-in user.  In a typical application, you would want
            // to associate the LinkedIn account with a user record in your database,
            // and return that user instead.
            return done(null, profile);
        });
    }
));