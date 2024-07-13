class PhotographerDescriptionCard {
    constructor(photographer) {
        this._photographer = photographer;
    }

    render() {
        const wrapper = document.createElement('section');
        wrapper.classList.add('photographer-description');
        const content = `
              <div class="details">
                  <h2 class ="name">${this._photographer.name}</h2>
                  <p>
                      <span class="city">${this._photographer.city}, ${this._photographer.country}</span>
                      <br>
                      <span class="tagline">${this._photographer.tagline}</span>
                  </p>
                  <div class="photographer-description__details">
                       ${this._photographer.tags} 
                  </div>
              </div>
  
              <button class="cta" aria-label="Contact Me" onclick="openModal()">
                  contactez-moi
              </button>
  
                  <img src="./../${this._photographer.portrait}" alt="${this._photographer.name}" class="photographer__image--minified">
            
          `;
        wrapper.innerHTML = content;
        return wrapper;
    }
}