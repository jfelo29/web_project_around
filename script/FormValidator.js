export default class formValidator {
  constructor(formElement, inputElement, errorMessage, settings) {
    this.formElement = formElement;
    this.inputElement = inputElement;
    this.errorMessage = errorMessage;
    this.settings = settings;
  }
  showInputError() {
    const errorElement = this.formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.add(this.settings.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add("form__input-error_active");
  }
  hideInputError(inputElement) {
    const errorElement = this.formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.remove(this.settings.inputErrorClass);

    errorElement.textContent = "";
  }
  checkInputValidity() {
    if (!this.inputElement.validity.valid) {
      this.showInputError(this.inputElement, inputElement.validationMessage);
    }
  }
  toggleButtonState() {}
  setEventListeners() {
    this.inputList = Array.from(
      this.formElement.querySelectorAll(this.settings.inputSelector)
    );
    this.inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", function () {
        this.checkInputValidity(inputElement);
        this.toggleButtonState(inputElement);
      });
    });
  }
  enableValidation() {
    this.formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });

    this.setEventListeners();
  }
}
