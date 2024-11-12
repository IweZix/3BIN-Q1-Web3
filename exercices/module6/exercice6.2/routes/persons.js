const router = require('express').Router()
const Phonebook = require('../models/phonebook')
const NotFoundError = require('../utils/NotFoundError')
const Person = require('../models/phonebook')

router.get("/", (req, res, next) => {
  Phonebook.find({})
    .then(persons => {
      res.json(persons);
    })
    .catch(error => {
      next(error);
    });
});

router.get("/:id", (req, res, next) => {
  Phonebook.findById(req.params.id)
    .then(person => {
      if (person) {
        res.json(person);
      } else {
        throw new NotFoundError();
      }
    })
    .catch(error => {
      next(error);
    })
})

router.delete("/:id", (req, res, next) => {
  Phonebook.findByIdAndDelete(req.params.id)
    .then(result => {
      if (result) {
        res.status(204).end()
      } else {
        throw new NotFoundError()
      }
    })
    .catch(error => {
      next(error)
    })
})

router.post("/", (req, res, next) => {
  const body = req.body;

  if (!body.name || !body.number) {
    return res.status(400).json({
      error: "name or number missing"
    })
  }

  Phonebook.find({ name: body.name })
    .then(person => {
      if (person && person.length > 0) {
        return res.status(400).json({
          error: "name must be unique"
        })
      } else {
        const person = new Person(body);
        person.save().then(result => {
          res.json(result)
        }).catch(err => next(err))
      }
    })
    .catch(err => next(err))
})

router.put("/:id", (req, res, next) => {
  const body = req.body;

  const person = {
    name: body.name,
    number: body.number
  };

  Phonebook.findByIdAndUpdate(req.params.id, person, { new: true })
    .then(updatedPerson => {
      if (updatedPerson) {
        res.json(updatedPerson)
      } else {
        throw new NotFoundError()
      }
    })
    .catch(err => next(err))
})


module.exports = router
