import { mainDiv, mainForm, checkedList } from "./jsModuleObg.js";
import { htmlBody } from "./storage.js";
import { header } from "./headerStructure.js";
mainDiv.prepend(mainForm);
mainDiv.prepend(checkedList);
htmlBody.prepend(header)
console.log(htmlBody)