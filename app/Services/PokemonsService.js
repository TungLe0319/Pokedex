import { appState } from '../AppState.js';
import { Pokemon } from '../Models/Pokemon.js';
import { PokemonDetail } from "../Models/PokemonDetail.js";
import { setHTML } from '../Utils/Writer.js';
import { api } from './AxiosService.js';

class PokemonsService {
  async getPokemonAPI() {
    // https://pokeapi.co/api/v2/pokemon/{id or name}/
    const res = await api.get('/api/v2/pokemon');
    // console.log('result:', res.data.results);
    appState.pokemons = res.data.results.map((pokemon) => new Pokemon(pokemon));
    // console.log(appState.pokemons);
  
  }

  //TODO START HERE get pokemon detail and render it to the page
  //
  async getPokemonDetails(url) {
    const res = await api.get(url);
    console.log(res.data);
    appState.activePokemon = new PokemonDetail(res.data)
  }

 
}

export const pokemonsService = new PokemonsService();
