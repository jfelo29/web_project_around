const popup = document.querySelector(".popup");
const formAddCard = document.querySelector("#form-cards");
const popupImage = document.querySelector("#popup-image");
const popupImageSRC = document.querySelector(".popup__image-src");
const popupImageTitle = document.querySelector(".popup__image-title");
const popupCards = document.querySelector("#popup-cards");
const cardCloseButton = popupCards.querySelector(".popup__close");

export const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];
export function openPopupProfile() {
  popup.classList.add("popup_opened");

  const name = document.querySelector(".profile__name").textContent;
  const about = document.querySelector(".profile__about").textContent;

  const nameInput = document.querySelector("#input-name");
  const aboutinput = document.querySelector("#input-about");

  nameInput.value = name;
  aboutinput.value = about;

  document.addEventListener("keydown", closeOnEsc);
  document.addEventListener("click", closeWithClick);
}

/*function formProfile(name, about) {
  form.addEventListener("submit", function (evet) {
    evt.preventDefault();
    formProfile(name, about);
    name.value = "";
    title.value = "";
    setSubmitButtonState(false);
  });*/

export function closePopuProfile() {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeOnEsc);
  document.removeEventListener("click", closeWithClick);
}

export function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  const name = document.querySelector(".profile__name");
  const about = document.querySelector(".profile__about");

  const nameInput = document.querySelector("#input-name");
  const aboutInput = document.querySelector("#input-about");

  name.textContent = nameInput.value;
  about.textContent = aboutInput.value;
  closePopuProfile();
}

export function openPopupCards() {
  popupCards.classList.add("popup_opened");
  document.addEventListener("keydown", closeOnEsc);
  document.addEventListener("click", closeWithClick);
}

export function closePopupCards() {
  popupCards.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeOnEsc);
  document.removeEventListener("click", closeWithClick);
}
export function openPopupImage(title, link) {
  popupImage.classList.add("popup_opened");
  popupImageTitle.textContent = title;
  popupImageSRC.src = link;
  popupImageSRC.alt = title;
  document.addEventListener("keydown", closeOnEsc);
  document.addEventListener("click", closeWithClick);
}

export function closePopupImage() {
  popupImage.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeOnEsc);
  document.removeEventListener("click", closeWithClick);
}
cardCloseButton.addEventListener("click", closePopupCards);
export function closeOnEsc(evt) {
  if (evt.key === "Escape") {
    closePopupCards();
    closePopuProfile();
    closePopupImage();
  }
}

export function closeWithClick(evt) {
  if (evt.target.classList.contains("popup_opened")) {
    closePopupCards();
    closePopuProfile();
    closePopupImage();
  }
}
