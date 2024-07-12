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

    // Insert photographer description component
    const $mainSection = document.querySelector("main");
    const photographerDescriptionComponent = new PhotographerDescriptionComponent(photographer);
    $mainSection.prepend(photographerDescriptionComponent._HTML);


    //create all mediacomponents
    const mediaComponents = mediaPhotographer.map(media => {
        return new MediaComponent(media)
    })

    //insert all mediacomponent 
    const $mediaCardWrapper = document.querySelector('.media-card-wrapper')
    mediaComponents.forEach(mediaComponent => {
        console.log("Appending media component:", mediaComponent._HTML);
        $mediaCardWrapper.appendChild(mediaComponent._HTML);
    });
}

main();
