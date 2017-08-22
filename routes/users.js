// bring in libraries
const express = require('express');
const router = express.Router();

// registration routes
router.get('/register', function(request, response, next){
    response.send("hello from register users endpoint");
});

router.get('/authenticate', function(request, response, next){
    response.send("hello from authenticate endpoint");
});

// user's profile
router.get('/profile', function(request, response, next){
    response.send("Hello from profile endpoint");
});

// validate user endpoint
router.get('/validate', function(request, response, next){
    response.send("hello from validate endpoint");
});

// export the variables you want as public (other files can use it)
module.exports = router;

