export default class UserInfo {
  constructor() {
    this.name = document.querySelector(".profile__name");
    this.about = document.querySelector(".profile__about");
  }
  getUserInfo() {
    return { name: this.name.textContent, about: this.about.textContent }; // no estoy seguro si esta bien o es el de arriba segun el brief necesito que devuelva la info  sobre el user
  }
  setUserInfo(name, about) {
    this.name.textContent = name;
    this.about.textContent = about;
  }
}
