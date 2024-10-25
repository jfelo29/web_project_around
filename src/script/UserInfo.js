export default class UserInfo {
  constructor() {
    this.name = document.querySelector(".profile__name");
    this.about = document.querySelector(".profile__about");
    this.userAvatar = document.querySelector(".profile__image");
  }
  getUserInfo() {
    return { name: this.name.textContent, about: this.about.textContent };
  }
  setUserInfo(name, about, userAvatar) {
    this.name.textContent = name;
    this.about.textContent = about;
    this.userAvatar.src = userAvatar;
  }
}
