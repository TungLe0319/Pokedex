import { ActivePokemonController } from "./Controllers/ActivePokemonController.js";
import { PokemonsController } from './Controllers/PokemonsController.js';
import { SandboxPokemonController } from './Controllers/SandboxPokemonController.js';

class App {
  activePokemonController = new ActivePokemonController()
  pokemonsController = new PokemonsController();
  sandboxPokemonController = new SandboxPokemonController();
}

window['app'] = new App();
