export function about(content){
    const aboutContainer = document.createElement(`div`);
    const aboutHeading = document.createElement(`div`);
    const aboutItems = document.createElement(`div`);
    const aboutImg1 = document.createElement(`img`);
    const aboutImg2 = document.createElement(`img`);
    const aboutText = document.createElement(`div`);
    const aboutText1 = document.createElement(`div`);
    const aboutText2 = document.createElement(`div`);
    const aboutText3 = document.createElement(`div`);

    aboutContainer.classList.add(`about-container`);
    aboutHeading.classList.add(`about-heading`);
    aboutItems.classList.add(`about-items`);
    aboutText.classList.add(`about-text`);
    aboutText1.classList.add(`about-text1`);
    aboutText2.classList.add(`about-text2`);
    aboutText3.classList.add(`about-text3`);
    aboutImg1.classList.add(`about-img`);
    aboutImg2.classList.add(`about-img`);

    content.appendChild(aboutContainer);
    aboutContainer.append(aboutHeading, aboutItems);
    aboutItems.append(aboutImg1,aboutText,aboutImg2);
    aboutText.append(aboutText1,aboutText2,aboutText3);

    aboutHeading.textContent = `ABOUT US`;
    aboutText1.textContent = `Taste Preparation`;
    aboutText2.textContent = `TRADITION & MODERN`;
    aboutText3.textContent = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, quas esse animi officia excepturi aliquid consequatur`;
    aboutImg2.src = "../assets/design/about.png";
}