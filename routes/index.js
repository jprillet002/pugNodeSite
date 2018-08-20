var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Page 1 */
router.get('/page1', function(req, res, next) {
  res.render('page1', { title: 'Page 1' });
});

/* Page 2-1 */
router.get('/page21', function(req, res, next) {
  res.render('page21', { title: 'Subpage 2-1' });
});

/* Page 2-2 */
router.get('/page22', function(req, res, next) {
  res.render('page22', { title: 'Subpage 2-2' });
});

/* Page 3 */
router.get('/page3', function(req, res, next) {
  res.render('page3', { title: 'Page 3' });
});

/* Page 4 */
router.get('/page4', function(req, res, next) {
  res.render('page4', { title: 'Page 4' });
});
module.exports = router;
