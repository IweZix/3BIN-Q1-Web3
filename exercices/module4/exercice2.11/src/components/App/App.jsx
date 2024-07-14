import { Persons } from 'components/Persons/Persons'
import { Form } from 'components/Persons/Form';
import { Filter } from 'components/Persons/Filter';
import { useState, useEffect } from 'react'
import axios from 'axios'

export const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState([])

  const hook = () => {
    axios.get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
        console.log('promise fulfilled')
      })
      .catch(error => {
        console.log('promise rejected', error)
      })
  }
  
  useEffect(hook, [])

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