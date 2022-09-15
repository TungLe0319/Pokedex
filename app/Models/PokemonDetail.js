export class PokemonDetail {
  constructor(data) {
    this.id = data.id;

    this.height = data.height;
    this.weight = data.weight;
    this.name = data.name;
    // FIGURE OUT WHY IN THE HECK DID THIS WORK AND ALL THE VARIATIONS I FREAKING TRIED OH MY GOSH
    
    this.img = data.img || data.sprites.front_default
    this.types = data.types;
  }

  get CardTemplate() {
    return /*html */ `
    
      <div class="">
            <div class="p-2 ">
            <div class="d-flex justify-content-center border-bottom border-3 border-dark mb-3 text-uppercase elevation-2 rounded">
                <h3>${this.name}</h3>
              </div>
              <div class="d-flex justify-content-center align-content-center">
                <img src="${this.img}" alt="" style="width:10rem;" class="selectable">
                <div>
                  <h6 class="text-warning">Height: ${this.height}</h6>
                  <h6 class="text-warning">Weight: ${this.weight}</h6>
                </div>
              </div>
              
              <div class="d-flex justify-content-around mb-2">
                ${this.typesArray}
              </div>
            
              <div class="d-flex justify-content-center mt-5">
              <button class="btn btn-danger" onclick="app.sandboxPokemonController.addPokemon()" >Add Pokemon</button>
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