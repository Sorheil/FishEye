class CounterLike {
    constructor(totalLikes, price) {
        this._totalLikes = totalLikes
        this._price = price
    }
    get totalLikes() {
        return this._totalLikes
    }
    get price() {
        return this._price
    }
}