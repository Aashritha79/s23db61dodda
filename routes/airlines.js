// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('airlines', { title: 'Search Results airlines' });
// });

// module.exports = router;

var express = require('express');
const costume_controlers= require('../controllers/airlines');
var router = express.Router();
/* GET costumes */
router.get('/', costume_controlers.airlines_view_all_Page );
router.get('/detail', costume_controlers.Airlines_view_one_Page);
router.get('/create', costume_controlers.Airlines_create_Page);
router.get('/update', costume_controlers.Airlines_update_Page);
router.get('/delete', costume_controlers.Airlines_delete_Page);


module.exports = router;