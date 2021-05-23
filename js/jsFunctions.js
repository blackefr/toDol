import * as dom from "./jsModuleObg.js";

export function flip() {
  return document
    .querySelector(".mainForm")
    .addEventListener("keydown", function (event) {
      if (
        event.target == document.querySelector("#main_input") &&
        event.key == "Enter"
      ) {
        event.preventDefault();
        const deletebutton = document.createElement("button");
        deletebutton.className = "delButton";
        deletebutton.setAttribute("type", "button");
        deletebutton.textContent = "x";
        const inputValue = document.createElement("div");
        inputValue.className = "checked_name";
        inputValue.textContent = event.target.value;
        dom.checkedList.prepend(inputValue);
        inputValue.append(deletebutton);
        event.target.value = "";
      }
    });
}
export function delButton() {
  return document
    .querySelector("#checked_main")
    .addEventListener("click", function (event) {
      if (event.target.className == "delButton") {
        document
          .querySelector("#checked_main")
          .removeChild(event.target.closest("div"));
      } else {
        return;
      }
    });
}
