import { PokemonDetail } from './PokemonDetail.js';

export class Pokemon {
  constructor(data) {
    this.id = data.url
      .replace('https://pokeapi.co/api/v2/pokemon/', '')
      .replace('/', '');
    this.name = data.name;
    this.url = data.url;
    this.img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.id}.png`;
  }

  get CardTemplate() {
    return /*html */ `
   <div class="  p-2 text-light selectable  " onclick="app.pokemonsController.getPokemonDetails('${this.url}')">
             
              <img src="${this.img}" alt="" style="width:5rem;height:5rem;">
              <img src="/resources/pokeball.png" alt="" style="width:1rem;" class="me-1"> ${this.name}
             
            </div>
    `;
  }

  get pokemonimg() {}
  get WildTemplate() {}

  get ActiveTemplate() {}

  get CaughtTemplate() {}
}
