const button_add = document.querySelector(".button-add");
const container = document.querySelector(".container");
const boxes = document.querySelectorAll(".box");

button_add.addEventListener("click", (event) => {
  event.preventDefault();
  let box = document.createElement("div");
  box.classList.add("box");
  box.addEventListener("click", removeBox);
  container.append(box);
});

function removeBox(event) {
  let decision = confirm("Do you really want to delete this box");
  if (decision === false) {
    return;
  }
  return event.target.remove();
}
