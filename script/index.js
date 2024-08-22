const editButton = document.querySelector(".profile__button");
const addCardButton = document.querySelector(".add__button");
const popup = document.querySelector(".popup");
const formAddCard = document.querySelector("#form-cards");
const popupImage = document.querySelector("#popup-image");
const popupImageSRC = document.querySelector(".popup__image-src");
const popupImageTitle = document.querySelector(".popup__image-title");
const closeButtonImage = popupImage.querySelector(".popup__close");
const popupCards = document.querySelector("#popup-cards");
const closeButton = document.querySelector(".popup__close");
const formElement = document.querySelector(".popup__edit-profile");
const cardCloseButton = popupCards.querySelector(".popup__close");
const inputCardTitle = document.querySelector("#input-card-title");
const inputCardLink = document.querySelector("#input-card-link");
const cardArea = document
  .querySelector("#card__area")
  .content.querySelector(".card");
const elements = document.querySelector(".element-list");
const elementsSection = document.querySelector(".elements");
const initialCards = [
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

function createCard(card) {
  const newCard = cardArea.cloneNode(true);
  const image = newCard.querySelector(".elements__item");
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
  createCard(item);
});

function openPopupProfile() {
  popup.classList.add("popup_opened");

  const name = document.querySelector(".profile__name").textContent;
  const about = document.querySelector(".profile__about").textContent;

  const nameInput = document.querySelector("#name");
  const aboutinput = document.querySelector("#acerca");

  nameInput.value = name;
  aboutinput.value = about;
}

function closePopuProfile() {
  popup.classList.remove("popup_opened");
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  const name = document.querySelector(".profile__name");
  const about = document.querySelector(".profile__about");

  const nameInput = document.querySelector("#name");
  const aboutInput = document.querySelector("#acerca");

  name.textContent = nameInput.value;
  about.textContent = aboutInput.value;
  closePopuProfile();
}

function openPopupCards() {
  popupCards.classList.add("popup_opened");
}

function closePopupCards() {
  //console.log("hola");
  popupCards.classList.remove("popup_opened");
}
function openPopupImage(title, link) {
  //console.log("hola");
  popupImage.classList.add("popup_opened");
  popupImageTitle.textContent = title;
  popupImageSRC.src = link;
  popupImageSRC.alt = title;
}

function closePopupImage() {
  console.log("hola");
  popupImage.classList.remove("popup_opened");
}
closeButtonImage.addEventListener("click", closePopupImage);
editButton.addEventListener("click", openPopupProfile);
addCardButton.addEventListener("click", openPopupCards);

closeButton.addEventListener("click", closePopuProfile);
formElement.addEventListener("submit", handleProfileFormSubmit);
cardCloseButton.addEventListener("click", closePopupCards);

formAddCard.addEventListener("submit", function (evt) {
  evt.preventDefault();
  console.log(inputCardTitle, inputCardLink);
  const data = {
    link: inputCardLink.value,
    name: inputCardTitle.value,
  };
  const newCard = createCard(data);

  cardArea.prepend(newCard);
  closePopupCards();
});
