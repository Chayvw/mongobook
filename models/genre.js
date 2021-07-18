const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const genreSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required:"Genre type  is required"
    },

});


const Genre = mongoose.model("Genre", genreSchema);

module.exports = Genre;