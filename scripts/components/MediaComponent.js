class MediaComponent {
    constructor(media) {
        this._props = new Media(media);
        const mediaCard = MediaCardFactory.createMediaCard(this._props);
        this._HTML = mediaCard.render();
        this.addEvent();
    }

    addEvent() {
        this.likeEvent();
        this.openMedia()
    }

    likeEvent() {
        const $likeButton = this._HTML.querySelector('.media__like');
        const $numberlikemedia = this._HTML.querySelector('.media__number-like');
        let numberlikemedia = parseInt($numberlikemedia.textContent, 10); // Convertit le texte en nombre entier

        $likeButton.addEventListener('click', () => {
            if ($likeButton.classList.contains('unliked')) {
                numberlikemedia += 1;
                $numberlikemedia.textContent = numberlikemedia;

                $likeButton.classList.remove('unliked');
                $likeButton.classList.add('liked');
            } else {
                if (numberlikemedia > 0) {
                    numberlikemedia -= 1;
                    $numberlikemedia.textContent = numberlikemedia;
                }

                $likeButton.classList.remove('liked');
                $likeButton.classList.add('unliked');
            }
        });
    }
    openMedia() {

    }
}
