import Card from "./card.js";
import {
  initialCards,
  openPopupProfile,
  closePopuProfile,
  handleProfileFormSubmit,
  openPopupCards,
  closePopupCards,
  openPopupImage,
  closePopupImage,
} from "./utils.js";

//import formValidator from "./FormValidator.js";
const editButton = document.querySelector(".profile__button");
const addCardButton = document.querySelector(".add__button");

const formAddCard = document.querySelector("#form-cards");
const popupImage = document.querySelector("#popup-image");
//const popupImageSRC = document.querySelector(".popup__image-src");
//const popupImageTitle = document.querySelector(".popup__image-title");
const closeButtonImage = popupImage.querySelector(".popup__close");
//const popupCards = document.querySelector("#popup-cards");

const closeButton = document.querySelector(".popup__close");
const formElement = document.querySelector(".popup__edit-profile");
//const cardCloseButton = popupCards.querySelector(".popup__close");
const inputCardTitle = document.querySelector("#input-card-title");
const inputCardLink = document.querySelector("#input-card-link");
const cardArea = document
  .querySelector("#card__area")
  .content.querySelector(".card");
const elements = document.querySelector(".element-list");
const elementsSection = document.querySelector(".elements");
/*const initialCards = [
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
];*/

//const formProfile = document.querySelector("#form-cards");
//const profilename = document.querySelector("#name");
//const professionPerson = document.querySelector("#acerca");

function createCard(card) {
  const newCard = cardArea.cloneNode(true);
  const image = newCard.querySelector(".card__image");
  const title = newCard.querySelector(".card__title");
  const cardLikeButton = newCard.querySelector(".card__like");
  const delatebutton = newCard.querySelector(".card__delate-icon");
  cardLikeButton.addEventListener("click", function () {
    cardLikeButton.classList.toggle("card__like-icon_active");
  });
  delatebutton.addEventListener("click", function () {
    newCard.remove();
  });
  image.addEventListener("click", function () {
    openPopupImage(card.name, card.link);
  });

  image.src = card.link;
  title.textContent = card.name;

  elements.prepend(newCard);
  return card;
}

initialCards.forEach(function (item) {
  const card = new Card(item.name, item.link);
  const cardElement = card.getcard();
  elements.prepend(cardElement);
});

/*function openPopupProfile() {
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
  });
}*/
/*function closePopuProfile() {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeOnEsc);
  document.removeEventListener("click", closeWithClick);
}

/*function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  const name = document.querySelector(".profile__name");
  const about = document.querySelector(".profile__about");

  const nameInput = document.querySelector("#input-name");
  const aboutInput = document.querySelector("#input-about");

  name.textContent = nameInput.value;
  about.textContent = aboutInput.value;
  closePopuProfile();
}

function openPopupCards() {
  popupCards.classList.add("popup_opened");
  document.addEventListener("keydown", closeOnEsc);
  document.addEventListener("click", closeWithClick);
}

function closePopupCards() {
  popupCards.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeOnEsc);
  document.removeEventListener("click", closeWithClick);
}
function openPopupImage(title, link) {
  popupImage.classList.add("popup_opened");
  popupImageTitle.textContent = title;
  popupImageSRC.src = link;
  popupImageSRC.alt = title;
  document.addEventListener("keydown", closeOnEsc);
  document.addEventListener("click", closeWithClick);
}

function closePopupImage() {
  popupImage.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeOnEsc);
  document.removeEventListener("click", closeWithClick);
}
*/
closeButtonImage.addEventListener("click", closePopupImage);
editButton.addEventListener("click", openPopupProfile);
addCardButton.addEventListener("click", openPopupCards);

closeButton.addEventListener("click", closePopuProfile);
formElement.addEventListener("submit", handleProfileFormSubmit);
//cardCloseButton.addEventListener("click", closePopupCards);

formAddCard.addEventListener("submit", function (evt) {
  evt.preventDefault();

  const data = {
    link: inputCardLink.value,
    name: inputCardTitle.value,
  };
  const newCard = createCard(data);

  cardArea.prepend(newCard);
  closePopupCards();
});
/*function closeOnEsc(evt) {
  console.log(evt.key);
  if (evt.key === "Escape") {
    closePopupCards();
    closePopuProfile();
    closePopupImage();
  }
}

function closeWithClick(evt) {
  if (evt.target.classList.contains("popup_opened")) {
    closePopupCards();
    closePopuProfile();
    closePopupImage();
  }
}*/
