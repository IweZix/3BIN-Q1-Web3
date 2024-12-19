import { gql, useQuery } from '@apollo/client'
import { Persons } from './components/Persons/Persons';
import { PersonForm } from './components/Forms/PersonForm';
import { ALL_PERSONS } from './queries/queries';
import { useState } from 'react';
import { Notify } from './components/Notify/Notify';
import { PhoneForm } from './components/Forms/PhoneForm';

const App = () => {
  const [errorMessage, setErrorMessage] = useState(null);

  const result = useQuery(ALL_PERSONS, {
    pollInterval: 2000
  });

  if (result.loading) {
    return <div>loading...</div>
  }

  const notify = (message) => {
    setErrorMessage(message)
    setTimeout(() => {
      setErrorMessage(null)
    }, 10000)
  }

  return (
    <div>
      <Notify errorMessage={errorMessage} />
      <Persons persons={result.data.allPersons} />
      <PersonForm setError={notify} />
      <PhoneForm setError={notify} />
    </div>
  )
}

export default App