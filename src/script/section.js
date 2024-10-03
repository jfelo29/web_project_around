export default class Section {
  constructor(items, render, conteinerSelector) {
    this.items = items;
    this.render = render;
    this._container = document.querySelector(conteinerSelector);
  }
  renderer() {
    this.items.forEach((item) => {
      this.addItem(item);
    });
  }
  addItem(item) {
    this._container.append(this.render(item));
  }
}
