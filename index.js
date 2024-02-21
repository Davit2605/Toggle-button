const inputEl = document.querySelector(".input");
const bodyEl = document.querySelector("body");
const wifiEl = document.querySelector(".fa-wifi");
const switchEl = document.querySelector(".onOff");
inputEl.checked = JSON.parse(localStorage.getItem("mode"));

updateBody();

function updateBody() {
  if (inputEl.checked) {
    wifiEl.classList.add("active");
    switchEl.innerText = "Connected";
  } else {
    wifiEl.classList.remove("active");
    switchEl.innerText = "Disconnected";
  }
}

inputEl.addEventListener("click", () => {
  updateBody();
  updateLocalStorage();
});
function updateLocalStorage() {
  localStorage.setItem("mode", JSON.stringify(inputEl.checked));
}
