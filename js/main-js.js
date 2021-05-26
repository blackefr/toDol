import { mainDiv, mainForm, checkedList } from "../todoForm/inputListForm.js";
import { htmlBody } from "../storage/storage.js";
import { header } from "../topPanel/headerStructure.js";
mainDiv.prepend(mainForm);
mainDiv.prepend(checkedList);
htmlBody.prepend(header);
console.log(htmlBody);
