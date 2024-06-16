export function menu(content){
    const menuContainer = document.createElement(`div`);
    const menuSection1 = document.createElement(`div`);
    const menuSection2 = document.createElement(`div`);
    const menuHeading = document.createElement(`div`);
    const menuImg = document.createElement(`img`);
    const menuItem1 = document.createElement(`div`);
    const menuItem2 = document.createElement(`div`);
    const menuItem3 = document.createElement(`div`);
    const menuItem4 = document.createElement(`div`);
    const item1H = document.createElement(`div`);
    const item1P = document.createElement(`div`);
    const item2H = document.createElement(`div`);
    const item2P = document.createElement(`div`);
    const item3H = document.createElement(`div`);
    const item3P = document.createElement(`div`);
    const item4H = document.createElement(`div`);
    const item4P = document.createElement(`div`);
    
    menuContainer.classList.add(`menu-container`);
    menuSection1.classList.add(`menu-section-1`);
    menuSection2.classList.add(`menu-section-2`);
    menuHeading.classList.add(`menu-heading`);
    menuImg.classList.add(`menu-img`);
    menuItem1.classList.add(`menu-item`);
    menuItem2.classList.add(`menu-item`);
    menuItem3.classList.add(`menu-item`);
    menuItem4.classList.add(`menu-item`);
    item1H.classList.add(`item-h`);
    item1P.classList.add(`item-p`);
    item2H.classList.add(`item-h`);
    item2P.classList.add(`item-p`);
    item3H.classList.add(`item-h`);
    item3P.classList.add(`item-p`);
    item4H.classList.add(`item-h`);
    item4P.classList.add(`item-p`);

    content.appendChild(menuContainer);
    menuContainer.append(menuSection1, menuSection2);
    menuSection1.append(menuHeading, menuImg);
    menuSection2.append(menuItem1, menuItem2, menuItem3, menuItem4);
    menuItem1.append(item1H, item1P);
    menuItem2.append(item2H, item2P);
    menuItem3.append(item3H, item3P);
    menuItem4.append(item4H, item4P);

    menuHeading.textContent = `MENU`;
    menuImg.src = require("../assets/menu.jpg");

    item1H.textContent = `Regular Tea`;
    item1P.textContent = `prepared with fresh milk and fresh tea powder`;
    item2H.textContent = `Ginger Tea`;
    item2P.textContent = `prepared with fresh milk and fresh tea powder added with ginger`;
    item3H.textContent = `Masala Tea`;
    item3P.textContent = `prepared with fresh milk and fresh tea powder added with masala`;
    item4H.textContent = `Coffee`;
    item4P.textContent = `prepared with fresh milk and fresh coffee beans`;
    
};

