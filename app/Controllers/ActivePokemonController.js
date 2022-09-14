import { appState } from "../AppState.js";
import { setHTML } from "../Utils/Writer.js";


function drawActivePokemon(){
  if (appState.activePokemon == null ) {
    return
  }
  setHTML('activePokemon', appState.activePokemon.CardTemplate)

}


export class ActivePokemonController{
  constructor(){
    appState.on('activePokemon',drawActivePokemon)
  }
}