const multiSelect = () => {
  const elements = document.querySelectorAll(".select-language.js-choice");
  elements.forEach((el) => {
    const choices = new Choices(el, {
      searchEnabled: false,
    });
  });
};

const modal = document.querySelector(".dialog");
const modalButton = document.querySelector("#modal-button");

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

const accordionLink = document.querySelector(".popular__info-question");
const accodionBody = document.querySelector(".popular__info-text-grid");

accordionLink.addEventListener("click", () => {
  accodionBody.classList.toggle("popular__info-text-grid--active");
});

const burgerButtonClose = document.querySelector(".burger-btn--close");
const burgerButtonWrapper = document.querySelector(".header__burger-block");
const burgerWrapper = document.querySelector(".burger-menu");
const burgerWindow = document.querySelector(".burger-menu__wrapper");

burgerButtonWrapper.addEventListener("click", () => openBurgerMenu());

document.addEventListener("click", (e) => {
  if (
    e.target === burgerWrapper ||
    e.target.closest(".burger-menu__btn-wrapper")
  ) {
    closeBurgerMenu();
  }
});

function openBurgerMenu() {
  burgerWrapper.classList.add("burger-menu--active");
  burgerWindow.classList.add("burger-menu__wrapper--active");
  document.body.style.overflow = "hidden";
}

function closeBurgerMenu() {
  burgerWrapper.classList.remove("burger-menu--active");
  burgerWindow.classList.remove("burger-menu__wrapper--active");
  document.body.style.overflow = "";
}

// const listOfElements = document.querySelectorAll(".popular__list");
// const divModal = `<div class="popular__modal">
//       <p class="popular__modal-text">
//         Network connecting the most famous and largest porn sites. Hundreds of channels, thousands of
//         pornstars from young to milfs. A variety of scenes – from light porn to BDSM and hardcore. This is a
//         real megaSite and a masterpiece of the industry of adult sites. This is the top 1 in our ratings.
//       </p>
//    </div>`;

// listOfElements.forEach((item) => {
//   const itemOfList = item.querySelectorAll("li");

//   itemOfList.forEach((li) => {
//     li.addEventListener("mouseover", () => {
//       li.innerHTML += divModal;
//     });
//     li.addEventListener("mouseout", (у) => {
//       const modalWindow = document.querySelectorAll(".popular__modal");
//       modalWindow.forEach((item) => item.remove());
//     });
//   });
// });

multiSelect();
