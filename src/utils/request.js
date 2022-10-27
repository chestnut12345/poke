import Axios from 'axios'
const request = Axios.create({
  baseURL: 'https://pokeapi.co/api/v2/'
})
export default request
