import { appState } from "../AppState.js";
import { Pokemon } from "../Models/Pokemon.js";
import { pokemonsService } from "../Services/PokemonsService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";



function drawPokemon() {
  let template = '';
  appState.pokemons.forEach((p) => (template += p.PokemonCardTemplate));
  setHTML('pokemonlist', template);
}
export class PokemonsController{
constructor(){
appState.on('pokemons',drawPokemon())
this.showPokemon()
this.fetchPokemon()
}





showPokemon(){
  this.getPokemonAPI()
  setHTML('pokemonlist', Pokemon.GetPokemonCardTemplate())
}
async getPokemonAPI(){
try {
  await pokemonsService.getPokemonAPI()
} catch (error) {
  console.error('[getpokemonApi]',error);
  Pop.error(error)
}
}



async fetchPokemon(){
  try {
    await pokemonsService.fetchPokemon()
  } catch (error) {
    console.error('fetchpokemon',error);
  }
}
}