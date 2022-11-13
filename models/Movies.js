const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    Title: { type: String },
    "US Gross": { type: Number },
    "Worldwide Gross": { type: Number },
    "US DVD Sales": { type: String },
    "Production Budget": { type: Number },
    "Release Date": { type: Date },
    "MPAA Rating": { type: String },
    "Running Time min": { type: String },
    Distributor: { type: String },
    Source: { type: String },
    "Major Genre": { type: String },
    "Creative Type": { type: String },
    Director: { type: String },
    "Rotten Tomatoes Rating": { type: String },
    "IMDB Rating": { type: Number },
    "IMDB Votes": { type: Number }
})

module.exports = mongoose.model('Movie', movieSchema)