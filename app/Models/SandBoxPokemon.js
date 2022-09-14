import { PokemonDetail } from "./PokemonDetail.js";


export class SandboxPokemon extends PokemonDetail {
  constructor(data) {
    super(data); //super  is constructor of  PokemonDetail

  this.img = this.sprites.front_default
  }

  get CardTemplate() {
    return /*html */ `
    <div class="card">
    <div class="card-body">
    // Put request
<input type="checkbox" >

<img src="${this.sprites.front_default}" alt="" style="width:1rem;">
    <h3>${this.name}</h3>
  
    <i class="mdi mdi-delete-forever on-hover" onclick="app.sandboxPokemonController.deletePokemon('${this.id}')"></i>

    </div>
    </div>
    
    
    `;
  }



}
