export class PokemonDetail {
  constructor(data) {
    this.id = data.id;

    this.height = data.height;
    this.weight = data.weight;
    this.name = data.name;
    // FIGURE OUT WHY IN THE HECK DID THIS WORK AND ALL THE VARIATIONS I FREAKING TRIED OH MY GOSH
    
    this.img = data.img || data.sprites.other['official-artwork'].front_default;
    this.types = data.types;
   
  }

  get CardTemplate() {
    return /*html */ `
    
      <div class="">
            <div class="p-2 ">
            <div class="d-flex justify-content-center border-bottom border-3 border-dark mb-3 text-uppercase ">
                <h3>${this.name}</h3>
              </div>
              <div class="d-flex justify-content-center align-content-center">
                <img src="${this.img}" alt="" style="width:10rem;" class="selectable">
                <div>
                  <h6 class="text-warning">Height: ${this.height}</h6>
                  <h6 class="text-warning">Weight: ${this.weight}</h6>
                </div>
              </div>
              
              <div class="d-flex justify-content-center mb-1 mt-2">
               <span >
               ${this.typesArray}
               </span> 
              </div>
            
              <div class="d-flex justify-content-center mt-1">

              <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.dribbble.com%2Fusers%2F1771704%2Fscreenshots%2F6124573%2Fattachments%2F1313609%2Fpokeball.gif&f=1&nofb=1" alt="" style="width:5rem;" class="rounded-circle selectable elevation-4" onclick="app.sandboxPokemonController.addPokemon()">
          
              </div>
<div class="d-flex justify-content-center p-1 mt-1  rounded">
 <h4 class="text-uppercase">Catch</h4>
</div>
            </div>
          </div>
    
    `;
  }

  get typesArray() {
    let template = '';
    this.types.forEach((type) => {
      template += `<h6 class="p-2 rounded elevation-5 text-uppercase">${type.type.name}</h6>`;
    });
    return template;
  }

  // get abilitiesArray(){
  //   let template = ''
  //   this.abilities.forEach((a) =>{
  //     template += `<h6 class="">${a.ability.name}</h6>`;
  //   })
  //   return template
  // }
}



/**
 *   <div class="p-1 rounded elevation-5 d-flex justify-content-center flex-column align-items-center">
          
          <div class="border-bottom border-2 border-dark mb-2">
          Abilities:
          
          </div>
            
                ${this.abilitiesArray}
              </div>
 */