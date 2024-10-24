import Card from "./Card.js";
import { initialCards, closePopuProfile, closePopupCards } from "./utils.js";
import formValidator from "./FormValidator.js";
import PopupWithForm from "./popupwithform.js";
import PopupWithImage from "./popupwithimage.js";
import Section from "./section.js";
import UserInfo from "./UserInfo.js";
import "../pages/index.css";
import Api from "./api.js";
import PopupWithConfirmation from "./PopupWithConfirmation.js";
const userInfo = new UserInfo();
fetch("https://around.nomoreparties.co/v1/web-es-cohort-16/users/me", {
  method: "GET",
  headers: {
    authorization: "8edde1ac-8f4b-48c8-98ae-8fc6660146ff",
    "content-type": "application/json",
  },
});

const api = new Api("https://around.nomoreparties.co/v1/web-es-cohort-16", {
  authorization: "8edde1ac-8f4b-48c8-98ae-8fc6660146ff",
  "content-type": "application/json",
});
api.getUserInfo().then((data) => {
  userInfo.setUserInfo(data.name, data.about, data.avatar);
});
api.getCards().then((data) => {
  new Section(data, createCard, ".element-list").renderer();
});

const editButton = document.querySelector(".profile__button");
const addCardButton = document.querySelector(".add__button");
const formAddCard = document.querySelector("#form-cards");

const popupImage = new PopupWithImage("#popup-image");

const closeButton = document.querySelector(".popup__close");
const formElement = document.querySelector(".popup__edit-profile");

const elements = document.querySelector(".element-list");

const popupProfile = new PopupWithForm("#popup-profile", (data) =>
  api.editUser(data).then((data) => {
    userInfo.setUserInfo(data.name, data.about, data.avatar);
  })
);
const popupCards = new PopupWithForm("#popup-cards", (data) =>
  api.createcard(data).then((data) => {
    const newCard = new Card(
      data.name,
      data.link,
      data.likes,
      () => {
        popupImage.open(data.link, data.name);
      },
      "",
      () => {
        popupDeleteCard.open(data._id);
        popupDeleteCard.setSubmitAction(() => {
          console.log("hola");
          api.delateCard(data._id).then((data) => {});
        });
      }
    );

    elements.prepend(newCard.getcard());
    closePopupCards();
  })
);
const popupDeleteCard = new PopupWithConfirmation("#popup-delete");
/*const popupLike = new PopupWithConfirmation("#popup-like", (cardid) => {
  api.likeCard(cardid).then((data) => {
    elements.querySelector(`[data-id="${cardid}"]`).remove(); //me falta algo creo
  });
});*/
/*const popupDislike = new PopupWithConfirmation("#popup-dislike", (cardid) => {
  api.dislikeCard(cardid).then((data) => {
    elements.querySelector(`[data-id="${cardid}"]`).remove(); //me falta algo  creo
  });
});*/
//popupLike.setEventListeners(); // no estoy seguro si va
//popupDislike.setEventListeners(); // no estoy seguro si va
popupDeleteCard.setEventListeners();
popupCards.setEventListeners();
popupProfile.setEventListeners();
popupImage.setEventListeners();

function createCard(card) {
  const cardIntance = new Card(
    card.name,
    card.link,
    card.likes,
    () => {
      popupImage.open(card.link, card.name);
    },
    "",
    () => {
      popupDeleteCard.open(card._id);
      popupDeleteCard.setSubmitAction(() => {
        api.delateCard(card._id).then((data) => {
          cardIntance.removeCard();
        });
      });
    },
    api.likeCard,
    api.dislikeCard,
    card._id
  );

  const cardElement = cardIntance.getcard();
  return cardElement;
}

editButton.addEventListener("click", () => popupProfile.open());
addCardButton.addEventListener("click", () => popupCards.open());

closeButton.addEventListener("click", closePopuProfile);

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
//funcion que se encargue de crear las cartas
