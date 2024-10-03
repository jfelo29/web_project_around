export default class formValidator {
  constructor(formElement, settings) {
    this.formElement = formElement;

    this.settings = settings;
  }
  showInputError(inputElement) {
    const errorElement = this.formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.add(this.settings.inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add("form__input-error_active");
  }
  hideInputError(inputElement) {
    const errorElement = this.formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.remove(this.settings.inputErrorClass);

    errorElement.textContent = "";
  }
  checkInputValidity(inputElement) {
    console.log(inputElement.validity.valid);
    if (!inputElement.validity.valid) {
      this.showInputError(inputElement, inputElement.validationMessage);
    } else {
      this.hideInputError(inputElement, inputElement.validationMessage);
    }
  }
  toggleButtonState(inputList, buttonElement) {
    if (this.hasInvalidInput(inputList)) {
      console.log(buttonElement);
      this.buttonElement.classList.add("popup__submit_inactive");
      this.buttonElement.disabled = true;
    } else {
      this.buttonElement.classList.remove("popup__submit_inactive");
      this.buttonElement.disabled = false;
    }
  }
  hasInvalidInput(inputList) {
    console.log(inputList);
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }
  /*toggleButtonState(inputElement) {
    if (inputElement.validity.valid) {
      this.hideInputError(inputElement, inputElement.validationMessage);
    } else {
      this.showInputError(inputElement, inputElement.validationMessage);
    }
  }*/ //el que tenia antes

  setEventListeners() {
    this.inputList = Array.from(
      this.formElement.querySelectorAll(this.settings.inputSelector)
    );
    this.buttonElement = this.formElement.querySelector(".popup__submit");

    //this.toggleButtonState(inputElement);
    this.inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this.checkInputValidity(inputElement);

        this.toggleButtonState(this.inputList, this.buttonElement);
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
