import Card from "./Card.js";
import {
  initialCards,
  closePopuProfile,
  closePopupCards,
  openPopupImage,
} from "./utils.js";
import formValidator from "./FormValidator.js";
import PopupWithForm from "./popupwithform.js";
import PopupWithImage from "./popupwithimage.js";
import Section from "./section.js";
import UserInfo from "./UserInfo.js";
import "../pages/index.css";

const editButton = document.querySelector(".profile__button");
const addCardButton = document.querySelector(".add__button");
const formAddCard = document.querySelector("#form-cards");
//const popupImage = document.querySelector("#popup-image");

const popupImage = new PopupWithImage("#popup-image");
//const closeButtonImage = popupImage.querySelector(".popup__close");
/*las comente porque entiendo que tienen que borrarse si creo las otras para que funcionen*/
const closeButton = document.querySelector(".popup__close");
const formElement = document.querySelector(".popup__edit-profile");
const inputCardTitle = document.querySelector("#input-card-title");
const inputCardLink = document.querySelector("#input-card-link");
const cardArea = document
  .querySelector("#card__area")
  .content.querySelector(".card");
const elements = document.querySelector(".element-list");
/*const elementsSection = document.querySelector(".elements");*/
const popupProfile = new PopupWithForm(
  "#popup-profile",
  handleProfileFormSubmit
);
const popupCards = new PopupWithForm("#popup-cards", handleCreateCard);

popupCards.setEventListeners();
popupProfile.setEventListeners();
popupImage.setEventListeners();

function handleCreateCard(card) {
  const newCard = createCard(card);
  elements.prepend(newCard);
  closePopupCards();
}
function handleProfileFormSubmit(user) {
  userInfo.setUserInfo(user.name, user.about);
  popupProfile.close();
}
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

  return newCard;
}

new Section(initialCards, createCard, ".element-list").renderer();
//closeButtonImage.addEventListener("click", closePopupImage);
editButton.addEventListener("click", () => popupProfile.open());
addCardButton.addEventListener("click", () => popupCards.open());

closeButton.addEventListener("click", closePopuProfile);
const userInfo = new UserInfo();

/*formElement.addEventListener("submit", (evt) => {
  evt.preventDefault();
  userInfo.setUserInfo(
    document.querySelector(".profile__name").textContent,
    document.querySelector(".profile__about").textContent
  );
  popupProfile.close();
});*/

/*formAddCard.addEventListener("submit", function (evt) {
  evt.preventDefault();

  const data = {
    link: inputCardLink.value,
    name: inputCardTitle.value,
  };
  const newCard = createCard(data);

  elements.prepend(newCard);
  closePopupCards();
});
*/
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
