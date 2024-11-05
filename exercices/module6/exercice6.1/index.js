const express = require('express');
const app = express();
const Phonebook = require('./models/phonebook');

require('dotenv').config();

const PORT = process.env.PORT;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.post('/api/phonebooks', (req, res) => {    
    const body = req.body;
    
    if (body.name == undefined || body.number == undefined) {
      return res.status(400).json({ error: 'name or number missing' });
    };
  
    const note = new Phonebook({
      name: body.name,
      number: body.number || false,
    });
  
    note.save().then(savedNote => {
      res.json(savedNote);
    });
});

app.get('/api/phonebooks/:id', (request, response, next) => {
    Phonebook.findById(request.params.id)
        .then(note => {
            if (note) {
                response.json(note)
            } else {
                response.status(404).end()
            }
        })
        .catch(error => next(error))
});

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}
  

app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
    console.error(error.message)
  
    if (error.name === 'CastError') {
      return response.status(400).send({ error: 'malformatted id' });
    }   
    
    next(error);
}
  
app.use(errorHandler)
