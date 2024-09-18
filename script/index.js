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
import formValidator from "./FormValidator.js";
const editButton = document.querySelector(".profile__button");
const addCardButton = document.querySelector(".add__button");
const formAddCard = document.querySelector("#form-cards");
const popupImage = document.querySelector("#popup-image");
const closeButtonImage = popupImage.querySelector(".popup__close");
const closeButton = document.querySelector(".popup__close");
const formElement = document.querySelector(".popup__edit-profile");
const inputCardTitle = document.querySelector("#input-card-title");
const inputCardLink = document.querySelector("#input-card-link");
const cardArea = document
  .querySelector("#card__area")
  .content.querySelector(".card");
const elements = document.querySelector(".element-list");
const elementsSection = document.querySelector(".elements");

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

closeButtonImage.addEventListener("click", closePopupImage);
editButton.addEventListener("click", openPopupProfile);
addCardButton.addEventListener("click", openPopupCards);

closeButton.addEventListener("click", closePopuProfile);
formElement.addEventListener("submit", handleProfileFormSubmit);

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

const validationprofile = new formValidator(
  formElement,

  {
    formSelector: ".popup__form",
    inputSelector: ".popup__item",
    submitButtonSelector: ".popup__submit",
    inactiveButtonClass: "popup__submit_disabled",
    inputErrorClass: "form__input_type_error",
    errorClass: "form__error_visible",
  }
);

validationprofile.enableValidation();
const validationcard = new formValidator(
  formAddCard,

  {
    formSelector: "#popup-cards",
    inputSelector: ".popup__item",
    submitButtonSelector: ".popup__submit",
    inactiveButtonClass: "popup__submit_disabled",
    inputErrorClass: "form__input_type_error",
    errorClass: "form__error_visible",
  }
);
validationcard.enableValidation();
