async function main() {
    // Get photographer ID from URL parameters
    const params = new URL(document.location).searchParams;
    const id = parseInt(params.get('id'));

    // Fetch photographer data
    const photographersAPI = new PhotographersAPI('./../datas/FishEyeData.json');
    const photographers = await photographersAPI.getPhotographers();
    const photographer = photographers.find(photographer => photographer.id === id);

    // Set page title
    document.title = `Photographer ${photographer.name}`;

    // Fetch media data
    const mediaAPI = new MediaAPI('./../datas/FishEyeData.json');
    const mediaList = await mediaAPI.getMedia();
    const mediaPhotographer = mediaList.filter(media => media.photographerId === id);

    // Create a document fragment to hold all media components
    const fragment = document.createDocumentFragment();

    // Create media components and append them to the fragment
    mediaPhotographer.forEach(media => {
        const mediaComponent = new MediaComponent(media);
        fragment.appendChild(mediaComponent._HTML);
    });

    // Insert all media components into the DOM in one operation
    const $mediaCardWrapper = document.querySelector('.media-card-wrapper');
    $mediaCardWrapper.appendChild(fragment);

    // Insert photographer description component
    const $mainSection = document.querySelector("main");
    const photographerDescriptionComponent = new PhotographerDescriptionComponent(photographer);
    $mainSection.prepend(photographerDescriptionComponent._HTML);
}

main();
