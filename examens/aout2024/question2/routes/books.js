const router = require('express').Router();
const Book = require('../models/book'); // Ensure correct import

router.get("/", (req, res, next) => {
    Book.find({})
        .then(books => {
            res.json(books);
        })
        .catch(error => {
            next(error);
        });
});

// post a comment to a book
router.post("/:id", (req, res, next) => {
    const { username, comment } = req.body;
    const bookId = req.params.id;

    if (!username || username.length <= 3) {
        return res.status(400).json({ error: "Invalid username" });
    }

    if (!comment || comment.length <= 5) {
        return res.status(400).json({ error: "Invalid comment" });
    }

    Book.findById(bookId)
        .then(book => {
            if (!book) {
                return res.status(404).json({ error: "Book not found" });
            }

            if (book.comments.some(c => c.username === username)) {
                return res.status(400).json({ error: "User has already commented on this book" });
            }

            book.comments.push({ username, comment });
            return book.save();
        })
        .then(updatedBook => {
            res.json({
                id: updatedBook._id.toString(),
                username,
                comment
            });
        })
        .catch(error => {
            next(error);
        });
});

module.exports = router;