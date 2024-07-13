import { Persons } from 'components/Persons/Persons'
import { Form } from 'components/Persons/Form';
import { useState } from 'react'

export const App = () => {
  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      number: '0485740030'
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

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
      <Form addName={addName} setNewName={setNewName} setNewNumber={setNewNumber} />
      <h2>Numbers</h2>
      <Persons persons={persons} />
    </div>
  )
}