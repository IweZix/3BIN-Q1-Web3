import axios from 'axios'
const baseUrl = 'http://localhost:3001/notes'

const getAll = async () => {
  const request = axios.get(baseUrl)
  return request
    .then(response => {
      return response.data
    }).catch(error => {
      console.log('error', error)
    })
}

const create = async (newObject) => {
  const request = axios.post(baseUrl, newObject)
  return request
    .then(response => {
      return response.data
    }).catch(error => {
      console.log('error', error)
    })
}

const update = async (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request
    .then(response => {
      return response.data
    }).catch(error => {
      console.log('error', error)
    })
}

export default { 
  getAll, 
  create, 
  update 
}