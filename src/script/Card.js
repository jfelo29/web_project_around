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
    cardId,
    userId
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
    this.userId = userId;
  }
  getTemplate() {
    const cardTemplate = document.querySelector("#card__area").content;

    return cardTemplate.querySelector(".card").cloneNode(true);
  }

  toogleLike() {
    let likes = this.likes;
    console.log(likes);
    if (likes.find((like) => like._id === this.owner)) {
      this.dislikeCard(this.cardId).then((data) => {
        // el then no deberia ir aca en tooglelike
        //denmtro de then poner que cambie el numero y quede el link
        this.cardLikeButton.classList.remove("card__like-icon_active");
        this.counterLikes.textContent = data.likes.length;
        this.likes = data.likes; // llegar a todo esto no lo hubiera llegado a hacer realmente solo no hubiera sabido como llegar a la funcion de find lo que yo habia hecho era totalemnte errado diferente
      });
    } else {
      this.likeCard(this.cardId).then((data) => {
        this.cardLikeButton.classList.add("card__like-icon_active");
        this.counterLikes.textContent = data.likes.length;
        this.likes = data.likes;
      });
    }
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
    this.counterLikes = this.htmlCard.querySelector(".pruebalikes");
    this.counterLikes.textContent = this.likes.length;

    if (this.owner !== this.userId) {
      this.cardDelateButton.remove();
    }

    if (this.likes.find((like) => like._id === this.owner)) {
      this.cardLikeButton.classList.add("card__like-icon_active");
    } else {
      this.cardLikeButton.classList.remove("card__like-icon_active");
    } // en esta parte no se me hubiera ocxurrdio de pasar toda la funcion aca
  }

  getcard() {
    this.setProperties();

    this.setEventListeners();
    return this.htmlCard;
  }
  openModalCard() {
    openPopupImage(this.name, this.link);
  }
}
