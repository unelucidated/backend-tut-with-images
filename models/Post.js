const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

//When you call mongoose.model() on a schema, Mongoose compiles a model for you.
//https://mongoosejs.com/docs/models.html

//Constructing Documents
// An instance of a model is called a document. Creating them and saving to the database is easy.

//must connect before hand

module.exports = mongoose.model('Posts', PostSchema);