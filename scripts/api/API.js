class API {

    /**
       * @param {string} url
       */

    constructor(url) {
        this._url = url;
    }

    async get() {
        try {
            const response = await fetch(this._url);
            const result = await response.json();
            return result;
        } catch (err) {
            console.log('An error occurs', err);
            return null;
        }
    }

}

class PhotographersAPI extends API {

    constructor(url) {
        super(url);
    }

    async getPhotographers() {
        const data = await this.get();
        if (data && data.photographers) {
            return data.photographers;
        } else {
            console.log('No photographers data found');
            return [];
        }
    }
}


class MediaAPI extends API {
    constructor(url) {
        super(url);
    }

    async getMedia() {
        const data = await this.get();
        if (data && data.media) {
            return data.media;
        } else {
            console.log('No media data found');
            return [];
        }
    }
}