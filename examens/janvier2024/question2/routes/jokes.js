const router = require('express').Router()
const Joke = require('../models/joke')

router.get("/", (req, res, next) => {
    Joke.find({})
        .then(jokes => {
            res.json({jokes});
        })
        .catch(error => {
            next(error);
        });
});

router.post("/:id", (req, res, next) => {
    const { username, comment } = req.body;

    if (!username || username.length <= 3) {
        return res.status(400).json({ error: "Invalid username" });
    }

    if (!comment || comment.length <= 5) {
        return res.status(400).json({ error: "Invalid comment" });
    }

    Joke.findById(req.params.id)
        .then(joke => {
            if (!joke) {
                return res.status(404).json({ error: "Joke not found" });
            }

            if (joke.comment.some(c => c.username === username)) {
                return res.status(400).json({ error: "User has already commented on this joke" });
            }

            joke.comment.push({ username, comment });
            return joke.save();
        })
        .then(updatedJoke => {
            res.json({
                id: updatedJoke._id.toString(),
                username,
                comment: [
                    {
                        username,
                        comment
                    }
                ]
            });
        })
        .catch(error => {
            next(error);
        });
});

module.exports = router