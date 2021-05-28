import { mainDiv, mainForm, checkedList } from "../todoForm/inputListForm.js";
import { htmlBody } from "../storage/storage.js";
import { header } from "../topPanel/headerStructure.js";
import { mainSliderDiv } from "../topPanel/slideMenu/slideMenu.js";

mainDiv.prepend(mainForm);
mainDiv.prepend(checkedList);
htmlBody.prepend(header);
htmlBody.prepend(mainSliderDiv)
console.log(htmlBody);
