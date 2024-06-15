import "./style.css";
import {home} from "./pages/home";   


const content = document.querySelector(`.content`);
const logo = document.querySelector(`.logo`);

logo.addEventListener(`click`, ()=>{
    home(content);
});

home(content);