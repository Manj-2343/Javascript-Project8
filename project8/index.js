const textAreaEl = document.getElementById("text-area");
const totalCounterEl = document.getElementById("total-counter");
const remainingCounterEl = document.getElementById("remaining-counter");
textAreaEl.addEventListener("keyup", () => {
  updateCounter();
});
updateCounter();
function updateCounter() {
  totalCounterEl.innerHTML = textAreaEl.value.length;
  remainingCounterEl.innerHTML =
    textAreaEl.getAttribute("maxLength") - textAreaEl.value.length;
}
