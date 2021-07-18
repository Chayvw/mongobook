const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required:"Author  name is required"
    },

    title: {
        type: String,
        trim: true,
        required:"Title of book is required"

    },

    releaseDate: {
        type: Number
    },

    genre: [
        {
        type: Schema.Types.ObjectId,
        ref:"Genre"
        },
    ]
    
});


const Book = mongoose.model("Book", bookSchema);

module.exports = Book;