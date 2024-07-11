class PhotographerComponent {
    constructor(photographer) {
        this._props = new Photographer(photographer)
        const photographerCard = new PhotographerCard(this._props)
        this._photographerHTML = photographerCard.render()
    }
    addEvent() {
        console.log("all event here")
    }
}