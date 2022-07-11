const backdrop = document.querySelector(".backdrop");
const selectPlanButton = document.querySelectorAll(".plan button");
const modalAction = document.querySelectorAll(".modal__action");
const modalNoButton = document.querySelector(".modal__action--negative");
const modal = document.querySelector(".modal");
const toggleButton = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");

for (let i = 0; i < selectPlanButton.length; i++) {
  selectPlanButton[i].addEventListener("click", function () {
    // modal.style.display = "block";
    // backdrop.style.display = "block";
    modal.classList.add("open");
    backdrop.classList.add("open");
  });
}

// for (let i = 0; i < modalAction.length; i++) {
//   modalAction[i].addEventListener("click", function () {
//     modal.style.display = "none";
//     backdrop.style.display = "none";
//   });
// }

backdrop.addEventListener("click", function () {
  //   mobileNav.style.display = "none";
  mobileNav.classList.remove("open");
  closeModal();
});

if (modalNoButton) {
  modalNoButton.addEventListener("click", closeModal);
}

function closeModal() {
  //   backdrop.style.display = "none";
  //   modal.style.display = "none";
  if (modal) {
    modal.classList.remove("open");
  }
  backdrop.classList.remove("open");
}

toggleButton.addEventListener("click", function () {
  //   mobileNav.style.display = "block";
  //   backdrop.style.display = "block";
  mobileNav.classList.add("open");
  backdrop.classList.add("open");
});
console.dir(backdrop);
