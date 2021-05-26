import {
  divEl,
  headerClassHelp,
  headerClassMenu,
  headerClassN,
  headerClassPost,
  headerClassSlider,
  imgEl,
} from "../storage/storage.js";

export const header = document.createElement(divEl);
header.className = headerClassN;

const headerMenu = document.createElement(divEl);
headerMenu.className = headerClassMenu;

const headerPost = document.createElement(divEl);
headerPost.className = headerClassPost;

const headerHelp = document.createElement(divEl);
headerHelp.className = headerClassHelp;

const headerMenuSlider = document.createElement(divEl);
headerMenuSlider.className = headerClassSlider;

const headerMenuSliderImg = document.createElement(imgEl);
headerMenuSliderImg.height = 30;
headerMenuSliderImg.width = 30;
headerMenuSliderImg.src = "/img/menuPng.png";

header.append(headerMenu);
headerMenu.append(headerPost);
headerMenu.append(headerHelp);
headerMenu.prepend(headerMenuSlider);
headerMenuSlider.prepend(headerMenuSliderImg);
