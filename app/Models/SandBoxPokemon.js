import { PokemonDetail } from "./PokemonDetail.js";


export class SandboxPokemon extends PokemonDetail {
  constructor(data) {
    super(data); //super  is constructor of  PokemonDetail

  
this.active = data.active || false
  }

  get CardTemplate() {
    return /*html */ `

   
    
  
    <div class="card  my-2 position-relative me-3 elevation-3" >
   
    <div class="d-flex justify-content-center pt-3  ">
    
    <h6 ><b> ${this.name}   </b></h6>
    </div>
<div class="d-flex justify-content-center mt-4">
<img src="${this.img}" alt="" style="width:8rem;" class=" mb-3">

</div>

<div>
<input type="checkbox" ${this.active? 'checked': ''} onchange="app.sandboxPokemonController.togglePokemon('${this.id}')">
</div>

<div class="position-absolute bottom-0 end-0">

<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwebstockreview.net%2Fimages%2Fpokeball-clipart-open-drawing-2.png&f=1&nofb=1" alt="" style="width:2rem;" title="release" class="selectable mb-2 me-1" onclick="app.sandboxPokemonController.deletePokemon('${this.id}')">
 
</div>


   
    </div>
    
   
    `;
  }



}
