import { checkedList } from "./jsModuleObg.js";

export const getToList = addEventListener("keydown", function (event) {
  if (
    event.target == document.querySelector("#main_input") &&
    event.key == "Enter"
  ) {
    inptVall(event);
  } else {
    return;
  }
});

const inptVall = (event) => {
  if (event.target.value != "") {
    const inputValue = document.createElement("div");
    inputValue.className = "checked_name";
    inputValue.textContent = event.target.value;
    checkedList.prepend(inputValue);
    delButGen();
  }else{
    event.target.blur()
  }
  event.preventDefault();
  event.target.value = "";
};

const delButGen = () => {
  const deletebutton = document.createElement("button");
  deletebutton.className = "delButton";
  deletebutton.type = "button";
  deletebutton.textContent = "x";
  document.querySelector(".checked_name").append(deletebutton);
  butDel(deletebutton);
};

const butDel = (arg) => {
  arg.addEventListener("click", function (event) {
    document
      .querySelector("#checked_main")
      .removeChild(event.target.closest(".checked_name"));
  });
};
