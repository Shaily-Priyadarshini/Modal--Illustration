const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".btn-close-modal");
const showModal = document.querySelectorAll(".btn");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// for (let i = 0; i < showModal.length; i++) {
//   showModal[i].addEventListener("click", openModal);
// }
//Using event delegation(more efficient way)
document.querySelector(".container").addEventListener("click", function (e) {
  if (e.target.classList.contains("btn")) {
    openModal();
  }
});
closeBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key == "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
