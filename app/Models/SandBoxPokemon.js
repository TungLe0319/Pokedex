import { PokemonDetail } from "./PokemonDetail.js";


export class SandboxPokemon extends PokemonDetail {
  constructor(data) {
    super(data); //super  is constructor of  PokemonDetail

  

  }

  get CardTemplate() {
    return /*html */ `
    <div class="card">
    <div class="card-body">
    <div class="d-flex justify-content-center">
    
    <h6>${this.name}</h6>
    </div>
<div class="d-flex justify-content-center">
<img src="${this.img}" alt="" style="width:2rem;">

</div>

  <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwebstockreview.net%2Fimages%2Fpokeball-clipart-open-drawing-2.png&f=1&nofb=1" alt="" style="width:1.5rem;" title="release" class="selectable" onclick="app.sandboxPokemonController.deletePokemon('${this.id}')">
   

    </div>
    </div>
    
    
    `;
  }



}
