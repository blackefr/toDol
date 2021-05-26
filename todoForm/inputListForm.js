import { getToList } from "../functions/jsFunctions.js";
import {
  checked_main,
  divEl,
  formEl,
  inputEl,
  inputFormToList,
  inputToList,
  startProjectClass,
  textAt,
} from "../storage/storage.js";

export const mainDiv = document.querySelector(`.${startProjectClass}`);

export const mainForm = document.createElement(formEl);
mainForm.className = inputFormToList;

export const mainInput = document.createElement(inputEl);
mainInput.type = textAt;
mainInput.className = inputToList;
mainForm.prepend(mainInput);

export const checkedList = document.createElement(divEl);
checkedList.className = checked_main;
checkedList.getToList;
