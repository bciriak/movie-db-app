import axios from 'axios'
import config from './config.json'

const omdbAxios = axios.create({
  baseURL: `http://www.omdbapi.com/?apikey=${config.API_KEY}`,
})

export default omdbAxios
