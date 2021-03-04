var express = require('express');
var router = express.Router();

/* GET songs page. */
router.get('/my-songs', (req, res, next) => {
  res.render('my-songs.hbs', { title: 'Express' });
});


module.exports = router;