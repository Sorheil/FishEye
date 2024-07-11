async function main() {
    const photographersAPI = new PhotographersAPI('./datas/FishEyeData.json');
    const photographers = await photographersAPI.getPhotographers();

    const $photographersWrapper = document.querySelector('.photographers-wrapper');
    const photographersComponent = createPhotographersComponents(photographers);

    insertPhotographers($photographersWrapper, photographersComponent);

    setupTagFilters($photographersWrapper, photographersComponent);
}

//helper function

function createPhotographersComponents(photographers) {
    return photographers.map(photographer => {
        return new PhotographerComponent(photographer);
    });
}

function insertPhotographers(wrapper, photographersComponent) {
    photographersComponent.forEach(photographerComponent => {
        wrapper.appendChild(photographerComponent._photographerHTML);
        photographerComponent.addEvent();
    });
}

function setupTagFilters(wrapper, photographersComponent) {
    const tags = document.querySelectorAll(".tag");
    tags.forEach(tag => {
        tag.addEventListener('click', (event) => {
            const tagName = tag.textContent.match(/#Tag\s?(\w+)/i)[1].toLowerCase();
            clearWrapper(wrapper);

            const filteredPhotographers = filterPhotographersByTag(photographersComponent, tagName);
            insertPhotographers(wrapper, filteredPhotographers);
        });
    });
}

function clearWrapper(wrapper) {
    wrapper.innerHTML = '';
}

function filterPhotographersByTag(photographersComponent, tagName) {
    return photographersComponent.filter(photographerComponent => {
        return photographerComponent._props.tags.includes(tagName);
    });
}

main();
