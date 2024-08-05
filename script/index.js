const editButton = document.querySelector(".profile__button");
const popup = document.querySelector(".popup");
const closeButton = document.querySelector(".popup__close");
const formElement = document.querySelector(".popup__edit-profile");
//console.log(popup);

function handleopenpopup() {
  popup.classList.add("popup_opened");

  const name = document.querySelector(".profile__name").textContent;
  const about = document.querySelector(".profile__about").textContent;

  const nameInput = document.querySelector("#nombre");
  const aboutinput = document.querySelector("#acerca");

  nameInput.value = name;
  aboutinput.value = about;
}
function handleclosepopup() {
  popup.classList.remove("popup_opened");
  //console.log("funcionamiento cierre formulario");
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  const name = document.querySelector(".profile__name");
  const about = document.querySelector(".profile__about");

  const nameInput = document.querySelector("#nombre");
  const aboutInput = document.querySelector("#acerca");

  name.textContent = nameInput.value;
  about.textContent = aboutInput.value;
  handleclosepopup();
}

editButton.addEventListener("click", handleopenpopup);
closeButton.addEventListener("click", handleclosepopup);
formElement.addEventListener("submit", handleProfileFormSubmit);
