const passport = require("passport");
require("../../services/linkedin");

module.exports = router => {
    // GET /auth/linkedin
    //   Use passport.authenticate() as route middleware to authenticate the
    //   request.  The first step in LinkedIn authentication will involve
    //   redirecting the user to linkedin.com.  After authorization, LinkedIn will
    //   redirect the user back to this application at /auth/linkedin/callback
    router.get('/auth/linkedin',
        passport.authenticate('linkedin', {
            scope: ['r_emailaddress', 'r_liteprofile']
        }),
    );


    // GET /auth/linkedin/callback
    //   Use passport.authenticate() as route middleware to authenticate the
    //   request.  If authentication fails, the user will be redirected back to the
    //   login page.  Otherwise, the primary route function function will be called,
    //   which, in this example, will redirect the user to the home page.
    router.get('/auth/linkedin/callback',
        passport.authenticate('linkedin', {
            successRedirect: '/',
            failureRedirect: '/login'
        }),
    );
}