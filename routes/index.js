var router = require('express').Router();
const {attemptSilentLogin } = require('express-openid-connect');

router.get('/', attemptSilentLogin(), (req, res) => {
    res.render('index', {
        userProfile: JSON.stringify(req.oidc.user, null, 2),
        isAuthenticated: req.oidc.isAuthenticated(),
        accessToken: req.oidc.accessToken.access_token,
        baseUrl: process.env.ISSUER_BASE_URL
    });
});

module.exports = router;