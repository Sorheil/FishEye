class CounterLikeCard {
    constructor(counterLikeCard) {
        this._counterLikeCard = counterLikeCard
    }
    render() {
        const $wrapper = document.createElement('div')
        $wrapper.classList.add("counter-like")
        const content = `
         <p class ="counter-like__number-like">
            <span class="number-like"> ${this._counterLikeCard.totalLikes}</span><i class="fa-solid fa-heart number-like__icone"></i>
        </p>

        <p class =" counter-like__price-photographer">
            <span class ="price-photographer">${this._counterLikeCard.price}</span>€ / jour
        </p>
        `
        $wrapper.innerHTML = content
        return $wrapper
    }
}