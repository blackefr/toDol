import { mouseleave} from "../../events/events.js";
import { divEl, slideColumns, slideDiv } from "../../storage/storage.js";
import { link1, link2, link3 } from "./links/slideMenuLinks.js";
import { dontHide } from "./slideFunc.js";


export const mainSliderDiv = document.createElement(divEl);
mainSliderDiv.className = slideDiv

export const sliderColumn1 = document.createElement(divEl);
sliderColumn1.className = slideColumns;
mainSliderDiv.prepend(sliderColumn1)

export const sliderColumn2 = document.createElement(divEl);
sliderColumn2.className = slideColumns;


export const sliderColumn3 = document.createElement(divEl);
sliderColumn3.className = slideColumns;

mainSliderDiv.prepend(sliderColumn1)
mainSliderDiv.prepend(sliderColumn2)
mainSliderDiv.prepend(sliderColumn3)
sliderColumn1.prepend(link1)
sliderColumn2.prepend(link2)
sliderColumn3.prepend(link3)
mainSliderDiv.addEventListener(mouseleave, (event)=>{
		dontHide()
})

console.log(mainSliderDiv.childNodes)