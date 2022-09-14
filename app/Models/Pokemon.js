export class Pokemon{
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.url = data.url
    this.weight = data.weight;
    this.height = data.height;
    this.abilities = data.abilities;
    this.types = data.types;
    this.sprits=data.sprits
    this.user =data.user
  }

  static  GetPokemonCardTemplate() {
    return /*html */ `
      <div class="col-md-3" style="width: 20rem;">
        <div class="card">
          <div>
            <img src="${this.sprits}" alt="" class="img-fluid" style="width:20rem;height:15rem">
          </div>
          <div class="card-body">
            <div class="d-flex flex-column">
              <span>${this.url}</span>
              <span>${this.types}</span>
              <span>${this.weight}</span>
              <span>${this.height}</span>
              <span>${this.abilities}</span>

            </div>
          </div>
        </div>
      </div>
    
    `;
  }
}
