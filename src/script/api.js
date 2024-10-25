export default class Api {
  constructor(baseUrl, headers) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }
  getUserInfo() {
    return fetch(this.baseUrl + "/users/me", {
      method: "GET",
      headers: this.headers,
    }).then((response) => {
      if (response.ok) return response.json();

      return Promise.reject("Something went wrong");
    });
  }
  getCards() {
    return fetch(this.baseUrl + "/cards", {
      method: "GET",
      headers: this.headers,
    }).then((response) => {
      if (response.ok) return response.json();

      return Promise.reject("Something went wrong");
    });
  }

  editUser(data) {
    return fetch(
      "https://around.nomoreparties.co/v1/web-es-cohort-16/users/me",
      {
        method: "PATCH",
        headers: this.headers,
        body: JSON.stringify(data),
      }
    ).then((response) => {
      if (response.ok) return response.json();

      return Promise.reject("Something went wrong");
    });
  }
  createcard(data) {
    return fetch(this.baseUrl + "/cards", {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.ok) return response.json();

      return Promise.reject("Something went wrong");
    });
  }
  delateCard(cardId) {
    return fetch(
      `https://around.nomoreparties.co/v1/web-es-cohort-16/cards/${cardId}`,
      {
        method: "DELETE",
        headers: this.headers,
      }
    ).then((response) => {
      if (response.ok) return response.json();

      return Promise.reject("Something went wrong");
    });
  }

  likeCard(cardId) {
    console.log(this.headers);
    return fetch(
      `https://around.nomoreparties.co/v1/web-es-cohort-16/cards/${cardId}/likes`,
      {
        method: "PUT",
        headers: this.headers,
      }
    ).then((response) => {
      if (response.ok) return response.json();

      return Promise.reject("Something went wrong");
    });
  }
  dislikeCard(cardId) {
    return fetch(
      `https://around.nomoreparties.co/v1/web-es-cohort-16/cards/${cardId}/likes`,
      {
        method: "DELETE",
        headers: this.headers,
      }
    ).then((response) => {
      if (response.ok) return response.json();

      return Promise.reject("Something went wrong");
    });
  }

  profileImage(image) {
    return fetch(this.baseUrl + "/users/me/avatar", {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify(image),
    }).then((response) => {
      if (response.ok) return response.json();

      return Promise.reject("Something went wrong");
    });
  }
}
