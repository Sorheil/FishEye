class MediaCardFactory {
    static createMediaCard(media) {
        if (media.image) {
            return new PictureCard(media);
        } else if (media.video) {
            return new VideoCard(media);
        } else {
            throw new Error('Unknown media type');
        }
    }
}