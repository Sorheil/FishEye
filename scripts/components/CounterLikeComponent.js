class CounterLikeComponent {
    constructor(totalLikes, price) {
        this._props = new CounterLike(totalLikes, price)
        const counterLikeCard = new CounterLikeCard(this._props)
        this._HTML = counterLikeCard.render()
        this.addEvent()
    }

    addEvent() {
    }

    update(message) {
        switch (message) {
            case "incrementlike":
                this.inrcrementNumberLike()
                break;
            case "decrementlike":
                this.decrementNumberLike()
                break
        }
    }

    inrcrementNumberLike() {
        const $numberLike = this._HTML.querySelector(".number-like")
        const numberLike = parseInt($numberLike.textContent)
        $numberLike.textContent = numberLike + 1;
    }

    decrementNumberLike() {
        const $numberLike = this._HTML.querySelector(".number-like")
        const numberLike = parseInt($numberLike.textContent)
        $numberLike.textContent = numberLike - 1;
    }
}