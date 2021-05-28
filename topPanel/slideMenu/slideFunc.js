import { headerMenuSlider } from "../headerStructure.js";
import { mainSliderDiv } from "./slideMenu.js";

function getCoords(elem) {
	let box = elem.getBoundingClientRect();
 
	return {
	  top: box.top + pageYOffset,
	  left: box.left + pageXOffset
	};
 }
 
export const poz = ()=>{
	setTimeout(()=>{
 mainSliderDiv.style.left = getCoords(headerMenuSlider).left - mainSliderDiv.offsetWidth +'px';
 mainSliderDiv.style.top = getCoords(headerMenuSlider).top +headerMenuSlider.offsetHeight + 'px'
 mainSliderDiv.style.visibility = 'visible';
 mainSliderDiv.style.opacity = 1
 }, 0)
}

export const dontHide = ()=>{
	mainSliderDiv.style.visibility = 'hidden'
	mainSliderDiv.style.opacity = 0
}
