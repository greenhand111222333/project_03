let panel = document.querySelectorAll(".panel");

console.log(88);
console.log(panel);

function addActiveClass(panel) {
    panel.forEach((item) => {
    item.addEventListener("click", function () {
      removeActivClass(panel);
      item.classList.add("active");
    });
  });
}

function removeActivClass(panel) {
    panel.forEach((item) => {
    item.classList.remove("active");
  });
}

addActiveClass(panel);
