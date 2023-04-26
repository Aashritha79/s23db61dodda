// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('airlines', { title: 'Search Results airlines' });
// });

// module.exports = router;

var express = require('express');
// A little function to check if we have an authorized user and continue on
// or
// redirect to login.
const secured = (req, res, next) => {
 if (req.user){
 return next();
 }
 req.session.returnTo = req.originalUrl;
 res.redirect("/login");
 }
const airlines_controlers= require('../controllers/airlines');
var router = express.Router();
/* GET Airlines */
router.get('/', airlines_controlers.airlines_view_all_Page );
router.get('/detail',secured, airlines_controlers.Airlines_view_one_Page);
router.get('/create',secured, airlines_controlers.Airlines_create_Page);
router.get('/update',secured, airlines_controlers.Airlines_update_Page);
router.get('/delete',secured, airlines_controlers.Airlines_delete_Page);


module.exports = router;