import { appState } from "../AppState.js";
import { Pokemon } from "../Models/Pokemon.js";
import { pokemonsService } from "../Services/PokemonsService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";



function drawPokemon() {
  let template = '';
  appState.pokemons.forEach(p => template += p.CardTemplate)
  setHTML('apipokemonlist', template);
}

export class PokemonsController{
constructor(){
appState.on('pokemons',drawPokemon)
this.getPokemonAPI()

}




async getPokemonAPI(){
try {
  await pokemonsService.getPokemonAPI()
} catch (error) {
  console.error('[getpokemonApi]',error);
  Pop.error(error)
}
}

async getPokemonDetails(url){
  try {
    await pokemonsService.getPokemonDetails(url)
  } catch (error) {
    console.error('[getPokemonDetail]',error)
    Pop.error(error)
  }
}


}