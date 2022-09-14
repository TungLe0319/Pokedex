export const api = axios.create({
  baseURL: 'https://pokeapi.co',
  timeout:2500,
  
})


// https://pokeapi.co/api/v2/pokemon/{id or name}/