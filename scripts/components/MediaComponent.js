class MediaComponent {
    constructor(media) {
        this._props = new Media(media);
        const mediaCard = MediaCardFactory.createMediaCard(this._props);
        this._HTML = mediaCard.render();
        this.observers = [];
        this.addEvent();
    }

    addEvent() {
        this.likeEvent();
    }

    likeEvent() {
        const $likeButton = this._HTML.querySelector('.media__like');
        const $numberlikemedia = this._HTML.querySelector('.media__number-like');
        let numberlikemedia = parseInt($numberlikemedia.textContent);

        $likeButton.addEventListener('click', () => {
            if ($likeButton.classList.contains('unliked')) {
                numberlikemedia += 1;
                $likeButton.classList.remove('unliked');
                $likeButton.classList.add('liked');
                this.notifyObservers("incrementlike");
            } else if ($likeButton.classList.contains('liked')) {
                numberlikemedia -= 1;
                $likeButton.classList.remove('liked');
                $likeButton.classList.add('unliked');
                this.notifyObservers("decrementlike");
            }
            $numberlikemedia.textContent = numberlikemedia;
        });
    }


    addObserver(observer) {
        this.observers.push(observer);
    }

    notifyObservers(message) {
        this.observers.forEach(observer => observer.update(message));
    }
}
