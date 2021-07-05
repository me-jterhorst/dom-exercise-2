const button_add = document.querySelector(".button-add");
const container = document.querySelector(".container");

button_add.addEventListener("click", () => {
  let box = document.createElement("div");
  box.classList.add("box");
  container.append(box);
});
