class PhotographerCard {

    constructor(photographer) {
        this._photographer = photographer;
    }

    render() {
        const $wrapper = document.createElement('div');
        $wrapper.classList.add('photographer-card')

        const PhotographersCard = `
          <a href="./src/photographer.html?id=${this._photographer.id}" class="photographer__portrait" aria-label="${this._photographer.name}" >
              <img src="${this._photographer.portrait}" class="photographer__image">
              <h2 aria-labelledby="photographers-name" class ="photographer__name">${this._photographer.name} </h2>    
          </a>
          <p class="photographer__description">
              <span class="city"> ${this._photographer.city}, ${this._photographer.country} </span> 
              <br>
              <span clas="tagline">${this._photographer.tagline}</span>
              <br>
              <span class ="price">
                  ${this._photographer.price}€/jour
              </span>
          </p>
          
          <div class="photographer__tags">
              ${this._photographer.tags} 
          </div>
          `;

        $wrapper.innerHTML = PhotographersCard;
        return $wrapper;
    }
}