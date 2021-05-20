const modal = document.getElementById("subscribe-modal");
const modalClose = modal.querySelector(".modal__close");

checkCookie();

modalClose.addEventListener("click", () => {
  modal.classList.remove("modal_active");
  setCookie("close", "true");
})

function setCookie(key, value) {
  document.cookie = key + '=' + encodeURIComponent(value);
}

function checkCookie() {
getCookie("close") ? "" : modal.classList.add("modal_active");
}

function getCookie(key) {
  const pairs = document.cookie.split("; ");
  const cookie = pairs.find(c => c.startsWith(key + "="));
  return cookie ? cookie.substr((key + "=").length) : null;
}