const passport = require("passport");
require("../../services/linkedin");
const { constants } = require(__basedir + "/config");
const { CLIENT_HOME_PAGE_URL } = constants;

module.exports = router => {
    // when login failed, send failed msg
    router.get("/login/failed", (req, res) => {
        res.status(401).json({
            success: false,
            message: "user failed to authenticate."
        });
    });
    
    // When logout, redirect to client
    router.get("/logout", (req, res) => {
        req.logout();
        res.redirect(CLIENT_HOME_PAGE_URL);
    });

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
            successRedirect: CLIENT_HOME_PAGE_URL,
            failureRedirect: '/login/failed'
        }),
    );
}