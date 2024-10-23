import { openPopupImage } from "./utils.js";
export default class Card {
  constructor(
    name,
    link,
    likes,
    handleClickImage,
    owner,
    handleDelete,
    likeCard,
    dislikeCard,
    cardId
  ) {
    this.name = name;
    this.link = link;
    this.likes = likes;
    this.owner = owner;
    this.handleClickImage = handleClickImage;
    this.handleDelete = handleDelete;
    this.likeCard = likeCard;
    this.dislikeCard = dislikeCard;
    this.cardId = cardId;
  }
  getTemplate() {
    const cardTemplate = document.querySelector("#card__area").content;

    return cardTemplate.querySelector(".card").cloneNode(true);
  }

  toogleLike() {
    this.likeCard(this.cardId);
    //this.cardLikeButton.classList.toggle("card__like-icon_active");
  }
  removeCard() {
    this.htmlCard.remove();
  }
  setEventListeners() {
    this.cardLikeButton.addEventListener("click", () => {
      this.toogleLike();
    });
    this.cardDelateButton.addEventListener("click", () => {
      this.handleDelete();
    });
    this.cardImage.addEventListener("click", () => {
      this.openModalCard();
    });
    this.cardImage.addEventListener("click", this.handleClickImage);
  }
  setProperties() {
    this.htmlCard = this.getTemplate();

    this.cardImage = this.htmlCard.querySelector(".card__image");
    this.cardTitle = this.htmlCard.querySelector(".card__title");
    this.cardLikeButton = this.htmlCard.querySelector(".card__like");
    this.cardDelateButton = this.htmlCard.querySelector(".card__delate-icon");
    this.cardTitle.textContent = this.name;
    this.cardImage.src = this.link;
    this.cardImage.alt = this.name;
    const counterLikes = this.htmlCard.querySelector(".pruebalikes");
    counterLikes.textContent = this.likes.length;
  }

  getcard() {
    console.log(this.likes.length);
    this.setProperties();

    this.setEventListeners();
    return this.htmlCard;
  }
  openModalCard() {
    openPopupImage(this.name, this.link);
  }
}
