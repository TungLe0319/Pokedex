import { appState } from '../AppState.js';
import { Pokemon } from '../Models/Pokemon.js';
import { setHTML } from '../Utils/Writer.js';
import { api } from './AxiosService.js';

class PokemonsService {
  async getPokemonAPI() {
    // https://pokeapi.co/api/v2/pokemon/{id or name}/
    const res = await api.get('/api/v2/pokemon', {
      params: {
        offset: 0,
        limit: 10,
      },
    });
    console.log('what is res?', res.data.results);
    appState.pokemons = res.data.results.map((pokemon) => new Pokemon(pokemon));
    let pokemon = new Pokemon(res.data);
    appState.pokemons = [pokemon, ...appState.pokemons];
  }

  async fetchPokemon() {
    // const pok = Math.floor(Math.random() * 199)+1;
    let res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151' )
      .then((promise) => promise.json())
   .then(allpokemon => console.log(allpokemon))
    console.log(res);
  }
}

export const pokemonsService = new PokemonsService();
