const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const songModel = new Schema({
    title: String,
    artist: String,
    chords: String,
    lyrics: String
});

const SongModel = mongoose.model('songs', songModel);
module.exports = SongModel;
