import "./style.css";
import {home} from "./pages/home";  
import {menu} from "./pages/menu";  
import {booking} from "./pages/booking";  


const content = document.querySelector(`.content`);
const logo = document.querySelector(`.logo`);
const menuBtn = document.querySelector(`.menu-btn`);
const bookingBtn = document.querySelector(`.booking-btn`);
const aboutBtn = document.querySelector(`.about-btn`);


logo.addEventListener(`click`, ()=>{
    content.innerHTML  = ``;
    home(content);
});

menuBtn.addEventListener(`click`, ()=>{
    content.innerHTML  = ``;
    menu(content);
});

bookingBtn.addEventListener(`click`, ()=>{
    content.innerHTML  = ``;
    booking(content);
});

home(content);