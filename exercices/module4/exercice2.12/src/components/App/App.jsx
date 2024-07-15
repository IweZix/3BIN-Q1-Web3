import { useState, useEffect } from 'react'
import axios from 'axios'

const BASE_URL = "https://restcountries.com/v3.1/all"

export const App = () => {
  const [countries, setCountries] = useState([])
  const [sortedCountries, setSortedCountries] = useState([])
  const [search, setSearch] = useState('')

  const hook = () => {
    axios.get(BASE_URL)
      .then(resp => {
        console.log('promise fulfilled')
        setCountries(resp.data)
        console.log(resp.data);
      })
      .catch(error => {
        console.log('promise rejected', error)
      })
  }

  useEffect(hook, [])

  const handleInput = (e) => {
    setSearch(e.target.value)
    console.log(e.target.value);
    handleSearch()
  }

  const handleSearch = () => {
    const foundCountries = countries.filter(c => c.name.common.toLowerCase().includes(search.toLowerCase()))
    setSortedCountries(foundCountries)
  }

  if (sortedCountries.length === 1) {
    return (
      <div>
        find countries <input onChange={handleInput} />
        <h1>{sortedCountries[0].name.common}</h1>
        <p>capital {sortedCountries[0].capital[0]}</p>
        <p>population {sortedCountries[0].population}</p>
        <h2>languages</h2>
        <ul>
          {Object.values(sortedCountries[0].languages).map(l => <li key={l}>{l}</li>)}
        </ul>
        <img src={sortedCountries[0].flags.png} alt="flag" width="100" />
      </div>
    )
  }

  return (
    <div>
      find countries <input onChange={handleInput} />
      <br />
      {
      search.length <= 1
        ? 'too many matches, specify another filter'
        : sortedCountries.length <= 0
          ? 'no matches'
          : sortedCountries.length > 10
            ? 'too many matches, specify another filter'
            : sortedCountries.map(c => <p key={c.name.common}>{c.name.common}</p>)
      }
    </div>
  )
}