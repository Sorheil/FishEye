class MediaCard {
    constructor(media) {
        this._media = media;
    }

}

class PictureCard extends MediaCard {
    constructor(media) {
        super(media);
    }

    render() {
        const $wrapper = document.createElement('div');
        $wrapper.classList.add('media-card');
        const content = `
            <a href="#" >
                <img src="${this._media.image}" alt="${this._media.description}" class="media-card__image">
            </a>
            <div class="media-card__description">
                <p class="media-card__title">${this._media.title}</p>
                <p class="wrapper-likes">
                    <span class="media__number-like">${this._media.likes}</span>
                    <i class="fa-solid fa-heart media__like unliked"></i>
                </p>
            </div>
        `;
        $wrapper.innerHTML = content;
        return $wrapper;
    }
}

class VideoCard extends MediaCard {
    constructor(media) {
        super(media);
    }

    render() {
        const $wrapper = document.createElement('div');
        $wrapper.classList.add('media-card');

        // Utilisation du getter pour récupérer le chemin de la vidéo
        const videoSrc = this._media.video;

        const content = `
            <a href="#" >
                <video class="media-card__video">
                    <source src="${videoSrc}" type="video/mp4">
                    Votre navigateur ne supporte pas la balise vidéo.
                </video>
                <!-- <i class="fa fa-play play-button" aria-label="Play button"></i> -->
            </a>
            <div class="media-card__description">
                <p class="media-card__title">${this._media.title}</p>
                <p class="wrapper-likes">
                    <span class="media__number-like">${this._media.likes}</span>
                    <i class="fa-solid fa-heart media__like unliked"></i>
                </p>
            </div>
        `;

        $wrapper.innerHTML = content;
        return $wrapper;
    }
}
