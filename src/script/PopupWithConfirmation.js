import Popup from "./popup.js";
export default class PopupWithConfirmation extends Popup {
  constructor(popupElement) {
    super(popupElement);
    this.action = () => {};
  }
  setSubmitAction(action) {
    this.action = action;
  }

  setEventListeners() {
    super.setEventListeners();
    const formConfirm = this.popupElement.querySelector(".popup__submit");
    formConfirm.addEventListener("click", (evt) => {
      console.log(this.action);
      evt.preventDefault();
      this.action();
      this.close();
    });
  }
  open() {
    super.open();
  }
  /*handleclickoutside(evt) {
    return evt.target.classList.contains("popup_opened") ? false : true;
  }
  setEventListeners() {
    super.setEventListeners();
    this.popupElement
      .querySelector(".popup__confirm")
      .addEventListener("click", () => {
        this.close();
        this.handleConfirm();
      });
  }*/
}
