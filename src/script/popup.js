export default class Popup {
  constructor(popupElement) {
    this.popupElement = document.querySelector(popupElement);
    this.closeButton = this.popupElement.querySelector(".popup__close");
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this.popupElement.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }
  close() {
    this.popupElement.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }
  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }
  handleclickoutside(evt) {
    return evt.target.classList.contains("popup_opened") ? false : true;
  }
  setEventListeners() {
    this.closeButton.addEventListener("click", () => {
      this.close();
    });
  }
}
