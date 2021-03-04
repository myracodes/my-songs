const express = require('express');
const SongModel = require('../models/Song.model');
const router = express.Router();

/* GET songs page. */
router.get('/my-songs', (req, res, next) => {
    SongModel.find()
        .then((dbRes) => {
            res.render('dashboard/my-songs.hbs', {
                songs: dbRes
            });
        })
        .catch((err) => {
            console.log(err);
        })
});

// GET create song page
router.get('/my-songs/create', (req, res, next) => {
    res.render('dashboard/create-song.hbs');
});

// POST create song page
router.post('/my-songs/create', (req, res, next) => {
    // const {
    //     title,
    //     artist,
    //     chords,
    //     lyrics
    // } = req.body;
    
    console.log('dans le post youpi')
    SongModel.create(req.body)
        .then(() => {
            console.log('song successfully created :D');
            // console.log('songs req body=', req.body);
            res.redirect('/my-songs');
        })
        .catch((err) => {
            console.log(err);
        })
});


// GET edit song page
router.get('/my-songs/edit/:id', (res, req, next) => {
SongModel.findById(req.params.id)
.then((song) => {
    res.render('my-songs/edit-song', song)
})

.catch((err) => {
    console.log(err);
})
});

// POST edit song page
router.post('/my-songs/edit/:id', (res, req, next) => {
    SongModel.findByIdAndUpdate(req.params.id)
    .then((song) => {
        res.redirect('my-songs')
    })
    
    .catch((err) => {
        console.log(err);
    })
    });
    

module.exports = router;