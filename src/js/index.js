import axios from 'axios'
import { key, proxy } from '../config.js';

async function getResults(query) {
  console.log(process.env)
  try {
    const res = await axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${query}`)
    const recipes = res.data.recipes
    console.log(recipes)
  } catch(error) {
    alert(error)
  }
}
getResults('pizza')