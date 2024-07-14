import { Persons } from 'components/Persons/Persons'
import { Form } from 'components/Persons/Form';
import { Filter } from 'components/Persons/Filter';
import { useState } from 'react'

export const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState([])

  const addName = (event) => {
    event.preventDefault()

    const nameFound = persons.some(person => person.name === newName)
    const numberFound = persons.some(person => person.number === newNumber)

    if (nameFound || numberFound) {
      alert(`${newName} ${newNumber} is already added to phonebook`)
      return
    }

    const personObject = {
      name: newName,
      number: newNumber
    }

    setPersons(persons.concat(personObject))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter persons={persons} setFilter={setFilter} />
      <h2>Add a new</h2>
      <Form addName={addName} setNewName={setNewName} setNewNumber={setNewNumber} />
      <h2>Numbers</h2>
      <Persons persons={filter.length > 0 ? filter : persons} />
    </div>
  )
}