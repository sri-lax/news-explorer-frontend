const userUrl = "https://news-explorer-backend-izis.onrender.com/users";
const baseUrl = "https://news-explorer-backend-izis.onrender.com/items";

export const getSavedArticles = () => fetch(baseUrl).then((res) => res.json());

export const searchArticles = (query) => {
  return fetch(
    `https://news-explorer-backend-izis.onrender.com/search?q=${query}`
  ).then((res) => {
    if (!res.ok) {
      throw new Error(`Search failed: ${res.status}`);
    }
    return res.json();
  });
};

export const saveArticle = (article) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(article),
  }).then((res) => {
    if (!res.ok) {
      return res.text().then((errorText) => {
        throw new Error(`Save failed: ${errorText}`);
      });
    }
    return res.json();
  });
};

export const deleteArticle = (id) =>
  fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
  });

export const registerUser = (user) =>
  fetch(userUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  }).then((res) => res.json());

export const loginUser = async ({ email, password }) => {
  const res = await fetch(`${userUrl}?email=${email}`);
  const users = await res.json();

  const user = users.find((u) => u.password === password);
  if (!user) {
    throw new Error("Login failed: Invalid credentials");
  }

  return user;
};
