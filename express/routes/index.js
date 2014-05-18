var express = require('express');
var router = express.Router();

/* GET Userlist page. */
router.get('/', function(req, res) {
    console.log("redirect to the user list page...");
    res.redirect("users/userlist");
});



module.exports = router;
