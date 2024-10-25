export default class Section {
  constructor(items, render, conteinerSelector,userId) {
    this.items = items;
    this.render = render;
    this._container = document.querySelector(conteinerSelector);
    this.userId = userId;
  }
  renderer() {
    this.items.forEach((item) => {
      this.addItem(item);
    });
  }
  addItem(item) {
    this._container.append(this.render(item,this.userId));
  }
}
