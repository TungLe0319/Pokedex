import { appState } from "../AppState.js";
import { sandboxPokemonService } from "../Services/SandboxPokemonService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";


function drawSandboxPokemon(){
  let template = ''
 appState.sandboxPokemon.forEach(p => template += p.CardTemplate)
  setHTML('sandboxpokemon', template)
}

export class SandboxPokemonController {
  constructor() {
    this.getPokemon();
    appState.on('sandboxPokemon', drawSandboxPokemon);
  }

  /**
 * async addSpell() {
    try {
      await sandboxSpellsService.addSpell()
      Pop.success('Spell learned')
      if (appState.sandboxSpells.length == 2) {
        Pop.toast('isn\t this is awesone', 'question', 'center', 8000, true)
      }
    } catch (error) {
      console.error('[AddingSpell]', error)
      Pop.error(error)
    }
  }
 */



async addPokemon(){
  try {
    await sandboxPokemonService.addPokemon()
    Pop.success('Pokemon Caught!')
  } catch (error) {
    console.error('[AddPokemon]',error);
    Pop.error(error)
  }
}

  async getPokemon() {
    try {
      await sandboxPokemonService.getPokemon();
    } catch (error) {
      console.error('[getpokemonsandbox]', error);
      Pop.error(error);
    }
  }

  async togglePokemonPrepared(id) {
    try {
    } catch (error) {
      console.error('[togglePokemonPrepared]', error);
      Pop.error(error);
    }
  }

  async deletePokemon(id) {
    try {
      const yes = await Pop.confirm('delete this pokemon');
      if (!yes) {
        return;
      }

      sandboxPokemonService.deletePokemon(id);
    } catch (error) {
      console.error('[DeletePokemon]', error);
      Pop.error(error);
    }
  }
}

