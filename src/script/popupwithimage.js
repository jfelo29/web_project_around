import Popup from "./popup.js";
export default class PopupWithImage extends Popup {
  constructor(popupElement) {
    super(popupElement);
    this.imageElement = this.popupElement.querySelector(".popup__image");
    this.titleElement = this.popupElement.querySelector(".popup__title");
  }
  open(name, link) {
    super.open();
    this.imageElement.src = link;
    this.titleElement.textContent = name;
  }
  setEventListeners() {
    super.setEventListeners();
  }
}

//acoplamiento debil
