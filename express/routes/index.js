var express = require('express');
var router = express.Router();

/* GET Userlist page. */
router.get('/userlist', function(req, res) {
    var db = req.db;
    var collection = db.get('usercollection');
    collection.find({},{},function(e,docs){
        res.render('userlist', {
            "userlist" : docs
        });
    });
});

/* GET New User page. */
router.get('/newuser', function(req, res) {
    res.render('newuser', { title: 'Add New User' });
});

/* POST to Add User Service */
router.post('/adduser', function(req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var userName = req.body.username;
    var email = req.body.email;
    var fullname = req.body.fullname;
    var age = req.body.age;
    var location = req.body.location;
    var gender = req.body.gender;


    // Set our collection
    var collection = db.get('usercollection');

    // Submit to the DB
    collection.insert({
       "username" : userName,
       "email" : email,
	   "fullname" : fullname,
	   "age" : age,
	   "location" : location,
	   "gender" : gender
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // If it worked, set the header so the address bar doesn't still say /adduser
            res.location("userlist");
            // And forward to success page
            res.redirect("userlist");
        }
    });
});

module.exports = router;
