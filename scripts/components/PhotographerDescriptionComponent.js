class PhotographerDescriptionComponent {
    constructor(photographer) {
        this._props =  new Photographer(photographer)
        const photographerDescriptionCard = new PhotographerDescriptionCard(this._props)
        this._HTML = photographerDescriptionCard.render()
        this.addEvent()
    }
    addEvent() {
    }
}