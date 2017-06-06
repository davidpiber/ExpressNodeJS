let express =  require('express');
let authRouter =  express.Router();
let mongodb = require('mongodb').MongoClient;

let router = function () {

    authRouter.route('/signUp').post( function(req, res) {
            console.log('test from auth route');
        });

    return authRouter;
};

module.exports = router;