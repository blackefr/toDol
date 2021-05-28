import { click, mouseover } from "../events/events.js";
import {
  divEl,
  headerClassCreator,
  headerClassHelp,
  headerClassMenu,
  headerClassN,
  headerClassPost,
  headerClassSlider,
  imgEl,
} from "../storage/storage.js";
import {poz } from "./slideMenu/slideFunc.js";
import { mainSliderDiv } from "./slideMenu/slideMenu.js";

export const header = document.createElement(divEl);
header.className = headerClassN;

const headerMenu = document.createElement(divEl);
headerMenu.className = headerClassMenu;

const headerPost = document.createElement(divEl);
headerPost.className = headerClassPost;
headerPost.textContent = "почта";

const headerHelp = document.createElement(divEl);
headerHelp.className = headerClassHelp;
headerHelp.textContent = "FAQ";

export const headerMenuSlider = document.createElement(divEl);
headerMenuSlider.className = headerClassSlider;

const headerMenuSliderImg = document.createElement(imgEl);
headerMenuSliderImg.height = 30;
headerMenuSliderImg.width = 30;
headerMenuSliderImg.src = "/img/menuPng.png";

const headerCreator = document.createElement(divEl);
headerCreator.className = headerClassCreator;
headerCreator.textContent = "Создатель";

header.append(headerMenu);
headerMenu.append(headerPost);
headerMenu.append(headerHelp);
headerMenu.append(headerCreator);
headerMenu.prepend(headerMenuSlider);
headerMenuSlider.prepend(headerMenuSliderImg);

headerMenuSlider.addEventListener(click, (event) => {
  poz();
});
