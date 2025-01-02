const mongoose = require('mongoose');

const jokeSchema = new mongoose.Schema({
    name: String,
    joke: String,
    imageUrl: String,
    comment: [
        {
            username: String,
            comment: String
        }
    ]
});

jokeSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
});

module.exports = mongoose.model('Joke', jokeSchema);