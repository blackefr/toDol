export const mainDiv = document.querySelector("#mainDiv");
export const mainForm = document.createElement("form");
mainForm.classList.add("mainForm");
const mainInput = document.createElement("input");
mainInput.setAttribute("type", "text");
mainInput.id = "main_input";
mainForm.prepend(mainInput);

export const checkedList = document.createElement("div");
checkedList.id = "checked_main";
