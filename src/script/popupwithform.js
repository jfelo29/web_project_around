import Popup from "./popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupElement, handleSubmit) {
    super(popupElement);
    this.handleSubmit = handleSubmit;
  }
  _getInputValues() {
    let values = {};
    const form = this.popupElement.querySelector(".popup__form");
    for (let element of form.elements) {
      if (element.name) {
        values[element.name] = element.value;
      }
    }
    return values;
  }
  close() {
    super.close();
    const form = this.popupElement.querySelector(".popup__form");
    form.reset();
  }
  setEventListeners() {
    super.setEventListeners();
    const form = this.popupElement.querySelector(".popup__form");
    form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const data = this._getInputValues();
      this.close();
      this.handleSubmit(data);
    });
  }
}
