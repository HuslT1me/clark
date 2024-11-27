const defaultSelect = () => {
  const element = document.querySelector(".header__select-language.js-choice");
  const choices = new Choices(element, {
    searchEnabled: false,
  });
};

const modal = document.querySelector(".dialog"),
  modalButton = document.querySelector("#modal-button");

function openModal() {
  modal.showModal();
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.close();
  document.body.style.overflow = "";
}

const buttonEvent = modalButton.addEventListener("click", (e) => {
  e.preventDefault();
  openModal();
});

function closeModalOnOverlay({ currentTarget, target }) {
  const modal = currentTarget,
    clickOnOverlay = target === modal;

  if (clickOnOverlay) {
    closeModal();
  }
}

modal.addEventListener("click", closeModalOnOverlay);
modal.addEventListener("cancel", () => closeModal());

defaultSelect();
