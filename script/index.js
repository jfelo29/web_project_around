const editButton = document.querySelector(".profile__button");
const popup = document.querySelector(".popup");
const closeButton = document.querySelector(".popup__close");
//console.log(popup);

function handleopenpopup() {
  popup.classList.add("popup_opened");

  let name = document.querySelector(".profile__name").textContent;
  let about = document.querySelector(".profile__about").textContent;

  const nameInput = document.querySelector("#nombre");
  const aboutinput = document.querySelector("#acerca");

  nameInput.value = name;
  aboutinput.value = about;
}
function handleclosepopup() {
  popup.classList.remove("popup_opened");
  //console.log("funcionamiento cierre formulario");
}
editButton.addEventListener("click", handleopenpopup);
closeButton.addEventListener("click", handleclosepopup);

let formElement = document.querySelector(".popup__edit-profile");

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  let name = document.querySelector(".profile__name");
  let about = document.querySelector(".profile__about");

  const nameInput = document.querySelector("#nombre");
  const aboutInput = document.querySelector("#acerca");

  name.textContent = nameInput.value;
  about.textContent = aboutInput.value;
  handleclosepopup();
}

formElement.addEventListener("submit", handleProfileFormSubmit);
