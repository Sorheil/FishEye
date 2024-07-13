class Media {
    constructor(media) {
        this._id = media.id;
        this._photographerId = media.photographerId;
        this._title = media.title;
        this._description = media.description;
        this._tags = media.tags;
        this._likes = media.likes;
        this._date = media.date;
        this._price = media.price;
        this._image = media.image ? media.image : null;
        this._video = media.video ? media.video : null;

    }

    get id() {
        return this._id;
    }

    get photographerId() {
        return this._photographerId;
    }

    get title() {
        return this._title;
    }

    get type() {
        return this._type;
    }

    get image() {
        if (this._image != null) {
            return `./../assets/photographer_media/${this._photographerId}/${this._image}`;
        } else {
            return null
        }
    }

    get video() {
        if (this._video != null) {
            return `./../assets/photographer_media/${this._photographerId}/${this._video}`;
        } else {
            return null
        }
    }

    get description() {
        return this._description;
    }

    get tags() {
        return this._tags;
    }

    get likes() {
        return this._likes;
    }

    get date() {
        return this._date;
    }

    get price() {
        return this._price;
    }


}
