import { openPopupImage } from "./utils.js";
export default class Card {
  constructor(name, link, handleClickImage) {
    //se agrego el handle
    this.name = name;
    this.link = link;
    this.handleClickImage = handleClickImage;
  }
  getTemplate() {
    const cardTemplate = document.querySelector("#card__area").content;

    return cardTemplate.querySelector(".card").cloneNode(true);
  }

  toogleLike() {
    this.cardLikeButton.classList.toggle("card__like-icon_active");
  }
  removeCard() {
    this.htmlCard.remove();
  }
  setEventListeners() {
    this.cardLikeButton.addEventListener("click", () => {
      this.toogleLike();
    });
    this.cardDelateButton.addEventListener("click", () => {
      this.removeCard();
    });
    this.cardImage.addEventListener("click", () => {
      this.openModalCard();
    });
    this.cardImage.addEventListener("click", this.handleClickImage); //se agrega esto tambien pero igual a mi parecer se crea sin esto tambien la imagen
  }
  setProperties() {
    this.htmlCard = this.getTemplate();

    this.cardImage = this.htmlCard.querySelector(".card__image");
    this.cardTitle = this.htmlCard.querySelector(".card__title");
    this.cardLikeButton = this.htmlCard.querySelector(".card__like");
    this.cardDelateButton = this.htmlCard.querySelector(".card__delate-icon");
    this.cardTitle.textContent = this.name;
    this.cardImage.src = this.link;
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
