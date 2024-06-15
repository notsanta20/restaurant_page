export function home(content){
    const homeContainer = document.createElement(`div`);
    const homeHeading = document.createElement(`div`);
    const homeImg = document.createElement(`img`);
    const homePara = document.createElement(`div`);
    homeContainer.classList.add(`home-container`);
    homeHeading.classList.add(`home-heading`);
    homeImg.classList.add(`home-img`);
    homePara.classList.add(`home-para`);

    content.appendChild(homeContainer);
    homeContainer.appendChild(homeHeading);
    homeContainer.appendChild(homeImg);
    homeContainer.appendChild(homePara);

    homeHeading.textContent = `LE CAFÉ`;
    homeImg.src = "about.png";
    homePara.textContent = `welcome to the le café ! located in the heart of the city, this treasure of french gastronomy is rated 4 stars by the famous michelin guide`;
    
};

