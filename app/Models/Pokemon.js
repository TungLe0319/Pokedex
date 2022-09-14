export class Pokemon {
  constructor(data) {
    this.name = data.name;
    this.url = data.url;
  }

  get CardTemplate() {
    return /*html */ `
   <div class="  p-2 text-light selectable  " onclick="app.pokemonsController.getPokemonDetails('${this.url}')">
             
              
              <img src="/resources/pokeball.png" alt="" style="width:1rem;" class="me-1"> ${this.name}
             
            </div>
    `;
  }



  

  get WildTemplate() {}

  get ActiveTemplate() {}

  get CaughtTemplate() {}
}
