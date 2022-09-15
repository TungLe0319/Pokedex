import { appState } from '../AppState.js';
import { SandboxPokemon } from '../Models/SandboxPokemon.js';
import { SandboxServer } from './AxiosService.js';

class SandboxPokemonService {
  //TODO HERE IS WHERE THE PROBLEM IS I BELIEVE WITH
  async addPokemon() {
    // if (!appState.activePokemon) {
    //   return;
    // }

   appState.sandboxPokemon.find((s) => s.name == appState.activePokemon.id);
 
    const res = await SandboxServer.post(
 `/api/${appState.user}/pokemon`,appState.activePokemon
    );
    const newPokemon = new SandboxPokemon(res.data);
    appState.sandboxPokemon = [...appState.sandboxPokemon, newPokemon];
  }

  /**
 * 
 *async addSpell() {
    if (!appState.activeSpell) { return }

    // @ts-ignore
    const alreadyLearned = appState.sandboxSpells.find(s => s.name == appState.activeSpell.name)
    if (alreadyLearned) {
      throw new Error('You already know this spell')
    }

    if (appState.sandboxSpells.length > 20) {
      throw new Error('Your brain is full, buy more space use credit card to unlock your potential')
    }


    const res = await SandboxServer.post(`/api/${appState.user}/spells`, appState.activeSpell)
    const newSpell = new SandboxSpell(res.data)
    appState.sandboxSpells = [...appState.sandboxSpells, newSpell]

  }
 */

  //TODO
  async togglePokemon(id) {
    const pokemon = appState.sandboxPokemon.find((p) => p.id == id);
    if (!pokemon) {
      throw new Error('BAD ID');
    }

    pokemon.active = !pokemon.active
console.log(pokemon.active);
    await SandboxServer.put(
      `/api/${appState.user}/pokemon/${id}`,
      pokemon
    );

    appState.emit('sandboxPokemon');
  }

  // TODO add appState.user

  async getPokemon() {
    const res = await SandboxServer.get(`/api/${appState.user}/pokemon`);
    appState.sandboxPokemon = res.data.map((p) => new SandboxPokemon(p));
  }

  // appState.sandboxSpells = res.data.map(s => new SandboxSpell(s))
  //TODO
  async deletePokemon(id) {
    await SandboxServer.delete(`/api/${appState.user}/pokemon/${id}`);
    appState.sandboxPokemon = appState.sandboxPokemon.filter((p) => p.id != id);
  }
}
export const sandboxPokemonService = new SandboxPokemonService();
