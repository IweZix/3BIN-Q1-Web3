import { useState, useEffect } from 'react'
import axios from 'axios'
import { Countries } from 'components/Countries/Countries'

const BASE_URL = "https://restcountries.com/v3.1/all"

export const App = () => {
  const [countries, setCountries] = useState([])
  const [sortedCountries, setSortedCountries] = useState([])
  const [search, setSearch] = useState('')

  const hook = () => {
    axios.get(BASE_URL)
      .then(resp => {
        setCountries(resp.data)
      })
      .catch(error => {
        console.log('promise rejected', error)
      })
  }

  useEffect(hook, [])

  const handleInput = (e) => {
    setSearch(e.target.value)
    handleSearch()
  }

  const handleSearch = () => {
    const foundCountries = countries.filter(c => c.name.common.toLowerCase().includes(search.toLowerCase()))
    setSortedCountries(foundCountries)
  }

  useEffect(handleSearch, [search, countries])

  return (
    <div>
      find countries <input onChange={handleInput} />
      <br />
      <Countries countries={sortedCountries} setSortedCountries={setSortedCountries}/>
    </div>
  )
}