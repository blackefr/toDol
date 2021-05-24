import { click, keydown } from "./Events.js";
import { checkedList, mainInput } from "./jsModuleObg.js";
import { checked_name, buttonOfDel, divEl, buttonEl } from "./storage.js";

export const getToList = addEventListener(keydown, function (event) {
  if (event.target == mainInput && event.key == "Enter") {
    event.preventDefault();
    toListValue(event);
  }
  return;
});

const toListValue = (event) => {
  if (event.target.value != "") {
    const listedValue = inputValue(event);
    const delListedButton = delButGen();
    checkedList.prepend(listedValue);
    delListedButton.addEventListener(click, () => {
      checkedList.removeChild(listedValue);
    });
    listedValue.append(delListedButton);
    event.target.value = "";
    return listedValue;
  } else {
    event.target.blur();
  }
};

const delButGen = () => {
  const deletebutton = document.createElement(buttonEl);
  deletebutton.className = buttonOfDel;
  deletebutton.type = buttonEl;
  deletebutton.textContent = "x";
  return deletebutton;
};

const inputValue = (event) => {
  const checkedDiv = document.createElement(divEl);
  checkedDiv.className = checked_name;
  checkedDiv.textContent = event.target.value;
  return checkedDiv;
};
