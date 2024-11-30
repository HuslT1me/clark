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

const accordionLine = document.querySelector(".grid-line");
const accodionBody = document.querySelector(".grid");

if (accordionLine) {
  accordionLine.addEventListener("click", () => {
    accodionBody.classList.toggle("grid--active");
  });
}

const burgerButtonWrapper = document.querySelector(".header__burger-block");
const burgerWrapper = document.querySelector(".burger-menu");
const burgerOverlay = document.querySelector(".burger-overlay");

burgerButtonWrapper.addEventListener("click", toggleBurgerMenu);

document.addEventListener("click", (e) => {
  if (e.target === burgerOverlay) {
    closeBurgerMenu();
  }
});

function toggleBurgerMenu() {
  if (burgerWrapper.classList.contains("burger-menu--active")) {
    closeBurgerMenu();
  } else {
    openBurgerMenu();
  }
}

function openBurgerMenu() {
  burgerOverlay.classList.add("burger-overlay--active");
  burgerButtonWrapper.classList.add("is-open");
  burgerWrapper.classList.add("burger-menu--active");
  document.body.style.overflow = "hidden";
}

function closeBurgerMenu() {
  burgerOverlay.classList.remove("burger-overlay--active");
  burgerButtonWrapper.classList.remove("is-open");
  burgerWrapper.classList.remove("burger-menu--active");
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
