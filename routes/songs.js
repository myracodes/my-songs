const express = require('express');
const router = express.Router();

/* GET songs page. */
router.get('/my-songs', (req, res, next) => {
  res.render('./../views/dashboard/my-songs.hbs');
});

// GET create song page
router.get('/my-songs/create', (req, res, next) => {
    res.render('./../views/dashboard/create-song.hbs');
  });

// POST create song page
router.post('/my-songs/create', (req, res, next) => {
    console.log('song successfully created :D')
    res.render('./../views/dashboard/my-songs.hbs');
  });


module.exports = router;